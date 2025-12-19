import { type User, type InsertUser, type Waitlist, type InsertWaitlist, users, waitlist } from "../shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // CHANGED: id is now number to match Supabase SERIAL
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getWaitlistEntryByEmail(email: string): Promise<Waitlist | undefined>;
  createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist>;
}

export class DatabaseStorage implements IStorage {
  // CHANGED: id: number
  async getUser(id: number): Promise<User | undefined> {
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
    if (!db) return memStorage.getWaitlistEntryByEmail(email);
    try {
      const [entry] = await db.select().from(waitlist).where(eq(waitlist.email, email));
      return entry;
    } catch (dbError) {
      console.error("Database error:", dbError);
      return memStorage.getWaitlistEntryByEmail(email);
    }
  }

  async createWaitlistEntry(insertEntry: InsertWaitlist): Promise<Waitlist> {
    if (!db) return memStorage.createWaitlistEntry(insertEntry);
    try {
      const [entry] = await db.insert(waitlist).values(insertEntry).returning();
      return entry;
    } catch (dbError) {
      console.error("Database write error:", dbError);
      return memStorage.createWaitlistEntry(insertEntry);
    }
  }
}

export class MemStorage implements IStorage {
  // CHANGED: Maps now use number keys
  private users: Map<number, User>;
  private waitlist: Map<number, Waitlist>;
  private currentId: number;
  private currentWaitlistId: number;

  constructor() {
    this.users = new Map();
    this.waitlist = new Map();
    this.currentId = 1;
    this.currentWaitlistId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
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
    const id = this.currentWaitlistId++;
    const entry: Waitlist = { 
      ...insertEntry, 
      id,
      // Fixes optional fields for memory storage
      phone: insertEntry.phone ?? null,
      location: insertEntry.location ?? null,
      birthDate: insertEntry.birthDate ?? null,
      profile: insertEntry.profile ?? null,
      interest: insertEntry.interest ?? null,
      createdAt: new Date() // Use Date object, not string
    };
    this.waitlist.set(id, entry);
    return entry;
  }
}

const memStorage = new MemStorage();
export const storage = process.env.DATABASE_URL ? new DatabaseStorage() : memStorage;