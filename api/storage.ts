import { 
  type User, type InsertUser, 
  type Waitlist, type InsertWaitlist, 
  type CmsContent, type InsertCmsContent,
  type AnalyticsEvent, type InsertAnalyticsEvent,
  users, waitlist, cmsContent, analyticsEvents 
} from "../shared/schema.js";
import { getDb } from "./db.js";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getWaitlistEntryByEmail(email: string): Promise<Waitlist | undefined>;
  createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist>;
  
  // CMS & Analytics
  getCmsContent(slug: string): Promise<CmsContent | undefined>;
  listCmsContent(): Promise<CmsContent[]>;
  updateCmsContent(content: InsertCmsContent): Promise<CmsContent>;
  logAnalyticsEvent(event: InsertAnalyticsEvent): Promise<AnalyticsEvent>;
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

  async getCmsContent(slug: string): Promise<CmsContent | undefined> {
    const db = getDb();
    if (!db) return memStorage.getCmsContent(slug);
    const [content] = await db.select().from(cmsContent).where(eq(cmsContent.slug, slug));
    return content;
  }

  async listCmsContent(): Promise<CmsContent[]> {
    const db = getDb();
    if (!db) return memStorage.listCmsContent();
    return await db.select().from(cmsContent).orderBy(cmsContent.slug);
  }

  async updateCmsContent(insertContent: InsertCmsContent): Promise<CmsContent> {
    const db = getDb();
    if (!db) return memStorage.updateCmsContent(insertContent);
    
    // Upsert logic (Postgres supports ON CONFLICT)
    const [content] = await db.insert(cmsContent)
      .values(insertContent)
      .onConflictDoUpdate({
        target: cmsContent.slug,
        set: { 
          value: insertContent.value, 
          type: insertContent.type,
          metadata: insertContent.metadata,
          lastUpdated: new Date()
        }
      })
      .returning();
    return content;
  }

  async logAnalyticsEvent(insertEvent: InsertAnalyticsEvent): Promise<AnalyticsEvent> {
    const db = getDb();
    if (!db) return memStorage.logAnalyticsEvent(insertEvent);
    const [event] = await db.insert(analyticsEvents).values(insertEvent).returning();
    return event;
  }
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private waitlist: Map<number, Waitlist>;
  private cms: Map<string, CmsContent>;
  private analytics: Map<number, AnalyticsEvent>;
  private uId = 1;
  private wId = 1;
  private cId = 1;
  private aId = 1;

  constructor() {
    this.users = new Map();
    this.waitlist = new Map();
    this.cms = new Map();
    this.analytics = new Map();
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

  async getCmsContent(slug: string) {
    return this.cms.get(slug);
  }

  async listCmsContent() {
    return Array.from(this.cms.values()).sort((a, b) => a.slug.localeCompare(b.slug));
  }

  async updateCmsContent(c: InsertCmsContent) {

    const existing = this.cms.get(c.slug);
    const id = existing ? existing.id : this.cId++;
    const res: CmsContent = {
      ...c,
      id,
      type: c.type || "text",
      metadata: c.metadata || null,
      lastUpdated: new Date()
    };
    this.cms.set(c.slug, res);
    return res;
  }

  async logAnalyticsEvent(e: InsertAnalyticsEvent) {
    const res: AnalyticsEvent = {
      ...e,
      id: this.aId++,
      properties: e.properties || null,
      sessionId: e.sessionId || null,
      createdAt: new Date()
    };
    this.analytics.set(res.id, res);
    return res;
  }
}

const memStorage = new MemStorage();
export const storage = new DatabaseStorage();

