import {
  AppWindow,
  ShieldCheck,
  Users,
  MessageSquare,
  Calendar,
  FileText,
} from "lucide-react";

export default function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg">
            <AppWindow className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Modern Interface</h3>
            <p className="text-muted-foreground">
              A sleek and intuitive interface for a seamless user experience.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <ShieldCheck className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Vetted Professionals</h3>
            <p className="text-muted-foreground">
              All caregivers are thoroughly vetted for your peace of mind.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Community Support</h3>
            <p className="text-muted-foreground">
              Connect with other families and caregivers in our community.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <MessageSquare className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Secure Messaging</h3>
            <p className="text-muted-foreground">
              Communicate securely with caregivers through our platform.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <Calendar className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
            <p className="text-muted-foreground">
              Easily schedule and manage appointments with caregivers.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <FileText className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Detailed Reporting</h3>
            <p className="text-muted-foreground">
              Receive detailed reports on the care provided to your loved ones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}