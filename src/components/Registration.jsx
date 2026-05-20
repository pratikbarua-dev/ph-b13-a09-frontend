// app/register/page.jsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function RegisterPage() {
  return (
    <motion.section
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen overflow-hidden bg-[#f5f7fb]"
    >
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* LEFT */}
        <div className="flex items-center justify-center bg-white px-6 py-12">
          <div className="w-full max-w-md">
            {/* Heading */}
            <div>
              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
                Create Account
              </h1>

              <p className="mt-4 text-base leading-7 text-gray-500">
                Register to manage appointments and connect with specialists.
              </p>
            </div>

            {/* Form */}
            <form className="mt-12 space-y-6">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="h-14 w-full rounded-2xl border border-gray-200 px-5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="h-14 w-full rounded-2xl border border-gray-200 px-5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Photo URL */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Photo URL
                </label>

                <input
                  type="text"
                  placeholder="https://example.com/photo.jpg"
                  className="h-14 w-full rounded-2xl border border-gray-200 px-5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="h-14 w-full rounded-2xl border border-gray-200 px-5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Button */}
              <button className="h-14 w-full rounded-2xl bg-blue-600 text-sm font-bold text-white transition hover:bg-blue-700">
                Create Account
              </button>
            </form>

            {/* Login */}
            <p className="mt-8 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-bold text-blue-600 transition hover:text-blue-700"
              >
                Login
              </Link>
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 lg:flex lg:items-center lg:justify-center">
          <div className="relative z-10 max-w-xl px-10 text-center text-white">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-2xl">
              <ShieldCheck size={40} className="text-blue-700" />
            </div>

            <h2 className="mt-10 text-7xl font-extrabold tracking-tight">
              DocAppoint
            </h2>

            <p className="mt-6 text-lg leading-9 text-blue-100">
              Join thousands of patients and connect with trusted healthcare
              professionals.
            </p>

            <div className="relative mt-12 overflow-hidden rounded-[32px] bg-white/10 p-5 backdrop-blur-md">
              <div className="relative h-[420px] overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1200&auto=format&fit=crop"
                  alt="Doctor"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
