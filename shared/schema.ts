import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// TABELA DE UTILIZADORES
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// TABELA DA WAITLIST (Sincronizada com o teu SQL do Supabase)
export const waitlist = pgTable("waitlist", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  birthDate: text("birth_date"),
  location: text("location"),
  profile: text("profile"),
  interest: text("interest"),
  // Sincronizado com 'timestamp with time zone'
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const insertUserSchema = createInsertSchema(users);
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const insertWaitlistSchema = createInsertSchema(waitlist).extend({
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
});
export type InsertWaitlist = z.infer<typeof insertWaitlistSchema>;
export type Waitlist = typeof waitlist.$inferSelect;
