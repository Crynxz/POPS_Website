import { pgTable, text, serial, timestamp, date } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// USERS TABLE
export const users = pgTable("users", {
  id: serial("id").primaryKey(), // Changed to serial (number)
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// WAITLIST TABLE
export const waitlist = pgTable("waitlist", {
  id: serial("id").primaryKey(), // Changed to serial (number)
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"), // Optional
  birthDate: text("birth_date"), // Using text for simplicity with forms
  location: text("location"),
  profile: text("profile"),
  interest: text("interest"),
  createdAt: timestamp("created_at").defaultNow(),
});

// TYPES (Automatically inferred from the tables above)
export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createInsertSchema(users);
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const insertWaitlistSchema = createInsertSchema(waitlist).extend({
  email: z.string().email("Email inválido"), // Custom validation
  phone: z.string().optional(),
});
export type InsertWaitlist = z.infer<typeof insertWaitlistSchema>;
export type Waitlist = typeof waitlist.$inferSelect;