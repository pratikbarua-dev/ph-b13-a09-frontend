// components/BookingSteps.tsx

import { Search, CalendarDays, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "1. Search Doctor",
    description: "Find a specialist based on your needs and location.",
    icon: Search,
    active: false,
  },
  {
    title: "2. Choose Time",
    description: "Select an available slot that fits your schedule.",
    icon: CalendarDays,
    active: false,
  },
  {
    title: "3. Confirm Booking",
    description:
      "Secure your appointment and receive a confirmation instantly.",
    icon: CheckCircle2,
    active: true,
  },
];

export default function BookingSteps() {
  return (
    <section className="bg-[#f5f7fb] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Book in 3 Easy Steps
          </h2>
        </div>

        {/* Steps */}
        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Icon Circle */}
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-full shadow-md transition
                    ${
                      step.active
                        ? "bg-green-700 text-white"
                        : "bg-white text-blue-600"
                    }`}
                >
                  <Icon size={32} strokeWidth={2.2} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-2xl font-bold text-gray-800">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 max-w-xs text-sm leading-6 text-gray-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
