import { type User, type InsertUser, type Waitlist, type InsertWaitlist, users, waitlist } from "../shared/schema";
import { getDb } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getWaitlistEntryByEmail(email: string): Promise<Waitlist | undefined>;
  createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const db = getDb();
    if (!db) return memStorage.getUser(id);
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const db = getDb();
    if (!db) return memStorage.getUserByUsername(username);
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const db = getDb();
    if (!db) return memStorage.createUser(insertUser);
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async getWaitlistEntryByEmail(email: string): Promise<Waitlist | undefined> {
    const db = getDb();
    if (!db) return memStorage.getWaitlistEntryByEmail(email);
    try {
      const [entry] = await db.select().from(waitlist).where(eq(waitlist.email, email));
      return entry;
    } catch (e) {
      return memStorage.getWaitlistEntryByEmail(email);
    }
  }

  async createWaitlistEntry(insertEntry: InsertWaitlist): Promise<Waitlist> {
    const db = getDb();
    if (!db) return memStorage.createWaitlistEntry(insertEntry);
    try {
      const [entry] = await db.insert(waitlist).values(insertEntry).returning();
      return entry;
    } catch (e) {
      console.error("DB Write failed, using memory fallback", e);
      return memStorage.createWaitlistEntry(insertEntry);
    }
  }
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private waitlist: Map<number, Waitlist>;
  private uId = 1;
  private wId = 1;

  constructor() {
    this.users = new Map();
    this.waitlist = new Map();
  }

  async getUser(id: number) { return this.users.get(id); }
  async getUserByUsername(u: string) { return Array.from(this.users.values()).find(x => x.username === u); }
  async createUser(u: InsertUser) {
    const res = { ...u, id: this.uId++ };
    this.users.set(res.id, res);
    return res;
  }
  async getWaitlistEntryByEmail(e: string) {
    return Array.from(this.waitlist.values()).find(x => x.email.toLowerCase() === e.toLowerCase());
  }
  async createWaitlistEntry(w: InsertWaitlist) {
    const res: Waitlist = { 
      ...w, id: this.wId++, 
      phone: w.phone || null, location: w.location || null,
      birthDate: w.birthDate || null, profile: w.profile || null,
      interest: w.interest || null, createdAt: new Date()
    };
    this.waitlist.set(res.id, res);
    return res;
  }
}

const memStorage = new MemStorage();
export const storage = new DatabaseStorage();
