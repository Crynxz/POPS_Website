import { LucideIcon } from 'lucide-react';

export type EventType = 'check-in' | 'task' | 'medication' | 'alert' | 'check-out';

export interface TimelineEvent {
  id: string;
  time: string;
  type: EventType;
  title: string;
  description?: string;
  icon: LucideIcon;
}

export interface Caregiver {
  name: string;
  photo: string;
  status: string;
  location: string;
  battery: string;
}
