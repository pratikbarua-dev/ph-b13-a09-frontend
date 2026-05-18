// components/HeroSection.tsx

"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const doctors = [
  {
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function HeroSection() {
  return (
    <section className="bg-[#f5f7fb] px-4 py-10 md:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl bg-white shadow-md md:grid-cols-2">
        {/* Left Content */}
        <div className="flex flex-col justify-center p-8 md:p-12">
          {/* Badge */}
          <div className="mb-6">
            <span className="rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold text-blue-700">
              Trusted Care
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-md text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Your Health, Our Priority.
            <br />
            <span className="text-blue-700">Book Top Doctors Instantly.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-md text-base leading-7 text-gray-500">
            Experience seamless healthcare access. Connect with certified
            specialists, manage appointments, and prioritize your well-being
            with DocAppoint.
          </p>

          {/* Button */}
          <div className="mt-8">
            <button className="flex items-center gap-2 rounded-lg bg-green-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-green-800">
              Find a Doctor
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Swiper */}
        <div className="relative min-h-[500px]">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop
            className="h-full w-full"
          >
            {doctors.map((doctor, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[500px] w-full">
                  <Image
                    src={doctor.image}
                    alt={`Doctor ${index + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
