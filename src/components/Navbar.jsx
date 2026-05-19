// components/Navbar.jsx

"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-blue-600">
          DocAppoint
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="border-b-2 border-blue-600 pb-1 text-sm font-semibold text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/doctors"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
          >
            Find Doctors
          </Link>

          <Link
            href="/specialties"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
          >
            Specialties
          </Link>

          <Link
            href="/appointments"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
          >
            Appointments
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg border border-blue-600 px-5 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50">
            Login
          </button>

          <button className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="flex items-center md:hidden"
        >
          {mobileMenu ? (
            <X size={28} className="text-gray-700" />
          ) : (
            <Menu size={28} className="text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="flex flex-col gap-5 px-6 py-6">
            
            <Link
              href="/"
              className="text-sm font-semibold text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/doctors"
              className="text-sm font-medium text-gray-700"
            >
              Find Doctors
            </Link>

            <Link
              href="/specialties"
              className="text-sm font-medium text-gray-700"
            >
              Specialties
            </Link>

            <Link
              href="/appointments"
              className="text-sm font-medium text-gray-700"
            >
              Appointments
            </Link>

            <div className="flex flex-col gap-3 pt-2">
              <button className="w-full rounded-lg border border-blue-600 px-5 py-3 text-sm font-semibold text-blue-600">
                Login
              </button>

              <button className="w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white">
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}