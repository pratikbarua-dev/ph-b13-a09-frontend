// components/AppointmentsSection.jsx

import Image from "next/image";
import {
  Search,
  ChevronDown,
  MapPin,
  CalendarDays,
  BadgeCheck,
} from "lucide-react";

const appointments = [
  {
    name: "Dr. Sarah Jenkins",
    specialty: "Cardiology",
    hospital: "City General Hospital, North Wing",
    date: "Oct 24, 2024 - 10:00 AM",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Dr. Marcus Vance",
    specialty: "Neurology",
    hospital: "Downtown Medical Center, Suite 402",
    date: "Nov 02, 2024 - 2:30 PM",
    image:
      "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Dr. Emily Chen",
    specialty: "Pediatrics",
    hospital: "Sunrise Family Clinic, Room 3",
    date: "Nov 15, 2024 - 09:15 AM",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Dr. Robert Hayes",
    specialty: "Orthopedics",
    hospital: "Westside Ortho Center, Bldg A",
    date: "Nov 20, 2024 - 11:45 AM",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Dr. Aisha Patel",
    specialty: "General Surgery",
    hospital: "City General Hospital, South Wing",
    date: "Dec 05, 2024 - 08:00 AM",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Dr. David Kim",
    specialty: "Dermatology",
    hospital: "Clear Skin Institute, Floor 2",
    date: "Dec 12, 2024 - 01:15 PM",
    image:
      "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=500&auto=format&fit=crop",
  },
];

export default function AppointmentsSection() {
  return (
    <section className="min-h-screen bg-[#f5f7fb] px-4 py-10 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          {/* Left */}
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900">
              All Appointments
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Manage and view your upcoming medical visits.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3 sm:flex-row">
            {/* Search */}
            <div className="relative">
              <Search
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search by Doctor Name..."
                className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-700 outline-none transition focus:border-blue-500 sm:w-[260px]"
              />
            </div>

            {/* Sort */}
            <button className="flex h-12 items-center justify-between rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-700 sm:w-[170px]">
              <span>Sort by...</span>

              <ChevronDown size={16} className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* Appointment Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {appointments.map((doctor, index) => (
            <div
              key={index}
              className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              {/* Top */}
              <div className="flex gap-4">
                {/* Image */}
                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {doctor.name}
                      </h3>

                      <p className="text-sm font-medium text-blue-600">
                        {doctor.specialty}
                      </p>
                    </div>

                    {/* Verified */}
                    <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-[11px] font-semibold text-green-700">
                      <BadgeCheck size={12} />
                      Verified
                    </div>
                  </div>

                  {/* Hospital */}
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <MapPin size={14} className="text-gray-400" />

                    <span>{doctor.hospital}</span>
                  </div>

                  {/* Date */}
                  <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                    <CalendarDays size={14} className="text-gray-400" />

                    <span>{doctor.date}</span>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-3">
                <button className="flex-1 rounded-xl border border-blue-600 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50">
                  Reschedule
                </button>

                <button className="flex-1 rounded-xl bg-blue-700 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
