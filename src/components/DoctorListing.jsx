// components/DoctorListing.jsx

import Image from "next/image";
import {
  Star,
  MapPin,
  CalendarClock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const doctors = [
  {
    name: "Dr. Sarah Chen",
    specialty: "Senior Cardiologist",
    experience: "12+ Years Exp.",
    rating: "4.9",
    reviews: "142 reviews",
    hospital: "Metropolitan Heart Institute, NY",
    availability: "Tomorrow, 10:30 AM",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Dr. Ayesha Rahman",
    specialty: "Pediatrician",
    experience: "8+ Years Exp.",
    rating: "4.8",
    reviews: "98 reviews",
    hospital: "Children’s Hospital, NY",
    availability: "Aug 21",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Dr. James Wilson",
    specialty: "Orthopedic Surgeon",
    experience: "20+ Years Exp.",
    rating: "5.0",
    reviews: "120 reviews",
    hospital: "OrthoCare Specialists, NY",
    availability: "Today, 4:00 PM",
    image:
      "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Dr. Elena Rodriguez",
    specialty: "Dermatologist",
    experience: "7+ Years Exp.",
    rating: "4.7",
    reviews: "88 reviews",
    hospital: "Skin & Beauty Clinic, NY",
    availability: "Tomorrow, 9:00 AM",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Dr. Michael Schmidt",
    specialty: "Neurologist",
    experience: "15+ Years Exp.",
    rating: "4.9",
    reviews: "130 reviews",
    hospital: "NeuroCenter Care, NY",
    availability: "Wed, Aug 23",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Dr. Sofia Garcia",
    specialty: "General Physician",
    experience: "6+ Years Exp.",
    rating: "4.6",
    reviews: "76 reviews",
    hospital: "MediCare Wellness, NY",
    availability: "Today, 2:30 PM",
    image:
      "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=500&auto=format&fit=crop",
  },
];

export default function DoctorListing() {
  return (
    <section className="bg-[#f5f7fb] px-4 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:w-[260px]">
          {/* Specialties */}
          <div>
            <h3 className="text-sm font-bold text-gray-900">Specialties</h3>

            <div className="mt-4 space-y-3">
              {[
                "Cardiology",
                "Pediatrics",
                "Dermatology",
                "Orthopedics",
                "Neurology",
                "General Medicine",
              ].map((item, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 text-sm text-gray-600"
                >
                  <input type="checkbox" className="rounded" />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mt-8">
            <h3 className="text-sm font-bold text-gray-900">Experience</h3>

            <div className="mt-4 space-y-3">
              {["1 - 5 Years", "5 - 10 Years", "10+ Years"].map(
                (item, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <input type="radio" name="experience" />
                    {item}
                  </label>
                ),
              )}
            </div>
          </div>

          {/* Ratings */}
          <div className="mt-8">
            <h3 className="text-sm font-bold text-gray-900">Ratings</h3>

            <button className="mt-4 flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700">
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              <span>& Up</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Top Bar */}
          <div className="mb-5 flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-600">
              <span className="font-bold text-gray-900">142 doctors</span>{" "}
              available in{" "}
              <span className="font-semibold text-blue-600">New York</span>
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Sort by:</span>

              <button className="font-semibold text-blue-600">Relevance</button>
            </div>
          </div>

          {/* Doctor Cards */}
          <div className="grid gap-5 md:grid-cols-2">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                {/* Top */}
                <div className="flex gap-4">
                  {/* Image */}
                  <div className="relative h-20 w-20 overflow-hidden rounded-full">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">
                      {doctor.name}
                    </h3>

                    <p className="text-sm font-medium text-blue-600">
                      {doctor.specialty}
                    </p>

                    <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                      <span>{doctor.experience}</span>

                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star size={13} fill="currentColor" strokeWidth={0} />

                        <span className="text-gray-700">{doctor.rating}</span>
                      </div>

                      <span>{doctor.reviews}</span>
                    </div>
                  </div>
                </div>

                {/* Hospital */}
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                  <MapPin size={15} className="text-gray-400" />

                  <span>{doctor.hospital}</span>
                </div>

                {/* Availability */}
                <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
                  <CalendarClock size={15} />

                  <span>Next available: {doctor.availability}</span>
                </div>

                {/* Buttons */}
                <div className="mt-5 flex gap-3">
                  <button className="flex-1 rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                    Book Now
                  </button>

                  <button className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600">
              <ChevronLeft size={16} />
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-semibold text-white">
              1
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700">
              2
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700">
              3
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
