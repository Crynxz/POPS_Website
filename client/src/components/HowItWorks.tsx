import { CircleUserRound, CalendarCheck, Handshake } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <CircleUserRound className="w-24 h-24 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Create Your Profile</h3>
            <p className="text-muted-foreground">
              Sign up and create a profile for your family or as a caregiver.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <CalendarCheck className="w-24 h-24 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">
              Find the Right Match
            </h3>
            <p className="text-muted-foreground">
              Browse through our vetted caregivers and find the perfect match.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Handshake className="w-24 h-24 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">
              Connect and Collaborate
            </h3>
            <p className="text-muted-foreground">
              Connect with your caregiver and start collaborating on care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}