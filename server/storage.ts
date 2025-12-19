import { type User, type InsertUser, type Waitlist, type InsertWaitlist, users, waitlist } from "../shared/schema";
import { randomUUID } from "crypto";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getWaitlistEntryByEmail(email: string): Promise<Waitlist | undefined>;
  createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    if (!db) return undefined;
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    if (!db) return undefined;
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    if (!db) throw new Error("Database not available");
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async getWaitlistEntryByEmail(email: string): Promise<Waitlist | undefined> {
    if (!db) {
      return memStorage.getWaitlistEntryByEmail(email);
    }
    try {
      const [entry] = await db.select().from(waitlist).where(eq(waitlist.email, email));
      return entry;
    } catch (dbError) {
      console.error("Database error in getWaitlistEntryByEmail:", dbError);
      // If DB fails (e.g. table doesn't exist), fallback to memory for checking
      return memStorage.getWaitlistEntryByEmail(email);
    }
  }

  async createWaitlistEntry(insertEntry: InsertWaitlist): Promise<Waitlist> {
    console.log("DatabaseStorage: Attempting to create waitlist entry for", insertEntry.email);
    if (!db) {
      // Fallback para MemStorage temporário se o DB falhar em produção
      console.warn("Database not available, using temporary memory storage");
      return memStorage.createWaitlistEntry(insertEntry);
    }
    try {
      const [entry] = await db.insert(waitlist).values(insertEntry).returning();
      return entry;
    } catch (dbError) {
      console.error("Critical Database Error, falling back to memory:", dbError);
      return memStorage.createWaitlistEntry(insertEntry);
    }
  }
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private waitlist: Map<string, Waitlist>;

  constructor() {
    this.users = new Map();
    this.waitlist = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getWaitlistEntryByEmail(email: string): Promise<Waitlist | undefined> {
    return Array.from(this.waitlist.values()).find(
      (entry) => entry.email.toLowerCase() === email.toLowerCase(),
    );
  }

  async createWaitlistEntry(insertEntry: InsertWaitlist): Promise<Waitlist> {
    const id = randomUUID();
    const entry: Waitlist = { 
      ...insertEntry, 
      id, 
      createdAt: new Date().toISOString() 
    };
    this.waitlist.set(id, entry);
    return entry;
  }
}

const memStorage = new MemStorage();
export const storage = process.env.DATABASE_URL ? new DatabaseStorage() : memStorage;