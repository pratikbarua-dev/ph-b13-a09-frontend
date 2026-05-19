// components/HeroSection.jsx

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
    <section className="bg-[#f5f7fb] px-4 py-6 md:px-8 md:py-10">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-white shadow-lg md:grid-cols-2">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12">
          
          {/* Badge */}
          <div className="mb-5">
            <span className="rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold tracking-wide text-blue-700">
              Trusted Care
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-xl text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
            Your Health,
            <br />
            Our Priority.
            <br />

            <span className="text-blue-700">
              Book Top Doctors Instantly.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
            Experience seamless healthcare access. Connect with certified
            specialists, manage appointments, and prioritize your well-being
            with DocAppoint.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-4 text-sm font-semibold text-white shadow-md transition hover:bg-green-800">
              Find a Doctor
              <ArrowRight size={18} />
            </button>

            <button className="rounded-xl border border-gray-300 px-6 py-4 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">500+</h3>
              <p className="text-sm text-gray-500">Doctors</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">20k+</h3>
              <p className="text-sm text-gray-500">Patients</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
              <p className="text-sm text-gray-500">Support</p>
            </div>
          </div>
        </div>

        {/* Right Swiper */}
        <div className="relative h-[350px] sm:h-[450px] md:h-full md:min-h-[650px]">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 3500,
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
                <div className="relative h-full w-full">
                  <Image
                    src={doctor.image}
                    alt={`Doctor ${index + 1}`}
                    fill
                    priority
                    className="object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}