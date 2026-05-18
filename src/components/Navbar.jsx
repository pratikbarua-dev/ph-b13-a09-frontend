// components/Navbar.tsx

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          DocAppoint
        </Link>

        {/* Nav Links */}
        <div className="hidden items-center gap-10 md:flex">
          <Link
            href="/"
            className="border-b-2 border-blue-600 pb-1 text-sm font-medium text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/doctors"
            className="text-sm font-medium text-gray-500 transition hover:text-blue-600"
          >
            Find Doctors
          </Link>

          <Link
            href="/specialties"
            className="text-sm font-medium text-gray-500 transition hover:text-blue-600"
          >
            Specialties
          </Link>

          <Link
            href="/appointments"
            className="text-sm font-medium text-gray-500 transition hover:text-blue-600"
          >
            Appointments
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="rounded-md border border-blue-600 px-5 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-50">
            Login
          </button>

          <button className="rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}
