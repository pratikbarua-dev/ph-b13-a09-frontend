// components/SpecialistSection.jsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

const doctors = [
  {
    name: "Dr. Ayesha Rahman",
    specialty: "Cardiologist",
    reviews: 120,
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Dr. Sarah Chen",
    specialty: "Pediatrician",
    reviews: 95,
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Dr. Michael Ross",
    specialty: "Neurologist",
    reviews: 150,
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop",
  },
];

export default function SpecialistSection() {
  return (
    <section className="bg-[#f5f7fb] px-6 py-14">
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Meet Our Top Rated Specialists
            </h2>

            <p className="mt-2 text-gray-500">
              Highly recommended professionals ready to assist you.
            </p>
          </div>

          <Link
            href="/doctors"
            className="flex items-center gap-2 text-sm font-semibold text-blue-600"
          >
            View All Doctors
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-md"
            >
              <div className="flex justify-center">
                <div className="relative h-24 w-24 overflow-hidden rounded-full">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800">
                  {doctor.name}
                </h3>

                <span className="mt-2 inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-medium text-blue-700">
                  {doctor.specialty}
                </span>

                <div className="mt-4 flex items-center justify-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}

                  <span className="ml-2 text-sm font-medium text-gray-500">
                    ({doctor.reviews} Reviews)
                  </span>
                </div>

                <button className="mt-6 w-full rounded-md border border-blue-500 py-2 text-sm font-semibold text-blue-600">
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