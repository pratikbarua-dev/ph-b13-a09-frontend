// app/login/page.jsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
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
                Welcome Back
              </h1>

              <p className="mt-4 text-base leading-7 text-gray-500">
                Log in to manage your appointments and health records.
              </p>
            </div>

            {/* Form */}
            <form className="mt-12 space-y-6">
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

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-semibold text-gray-700">
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-sm font-semibold text-blue-600"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="h-14 w-full rounded-2xl border border-gray-200 px-5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Button */}
              <button className="h-14 w-full rounded-2xl bg-green-700 text-sm font-bold text-white transition hover:bg-green-800">
                Log In
              </button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200"></div>

              <span className="text-sm text-gray-400">OR</span>

              <div className="h-px flex-1 bg-gray-200"></div>
            </div>

            {/* Google */}
            <button className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white text-sm font-medium text-gray-700 transition hover:bg-gray-50">
              <Image
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                width={20}
                height={20}
              />
              Continue with Google
            </button>

            {/* Register */}
            <p className="mt-8 text-center text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-bold text-blue-600 transition hover:text-blue-700"
              >
                Register
              </Link>
            </p>

            {/* Footer */}
            <div className="mt-16 flex items-center justify-center gap-6 text-xs text-gray-400">
              <Link href="/privacy-policy">Privacy Policy</Link>

              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 lg:flex lg:items-center lg:justify-center">
          {/* Blur */}
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"></div>

          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10 max-w-xl px-10 text-center text-white">
            {/* Icon */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-2xl">
              <ShieldCheck size={40} className="text-blue-700" />
            </div>

            {/* Title */}
            <h2 className="mt-10 text-7xl font-extrabold tracking-tight">
              DocAppoint
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg leading-9 text-blue-100">
              Streamlining healthcare management with empathetic efficiency.
              Connect with top specialists and manage your appointments
              seamlessly.
            </p>

            {/* Image Card */}
            <div className="relative mt-12 overflow-hidden rounded-[32px] bg-white/10 p-5 backdrop-blur-md">
              <div className="relative h-[420px] overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1200&auto=format&fit=crop"
                  alt="Doctor"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute bottom-10 left-10 right-10 flex items-center gap-4 rounded-3xl bg-white p-5 shadow-2xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <ShieldCheck size={26} />
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-bold text-gray-900">
                    Verified Specialists
                  </h4>

                  <p className="text-sm text-gray-500">
                    Over 10,000 trusted professionals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
