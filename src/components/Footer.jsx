// components/Footer.tsx

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f5f7fb] px-6 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 text-sm text-gray-500 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="text-lg font-bold text-blue-600">DocAppoint</h2>

          <p className="mt-3 max-w-xs leading-7">
            Empowering patients with seamless healthcare access and trusted
            medical professionals.
          </p>
        </div>

        {/* Links 1 */}
        <div className="flex flex-col gap-4">
          <Link href="/about" className="transition hover:text-blue-600">
            About Us
          </Link>

          <Link href="/contact" className="transition hover:text-blue-600">
            Contact Support
          </Link>

          <Link href="/careers" className="transition hover:text-blue-600">
            Careers
          </Link>
        </div>

        {/* Links 2 */}
        <div className="flex flex-col gap-4">
          <Link
            href="/privacy-policy"
            className="transition hover:text-blue-600"
          >
            Privacy Policy
          </Link>

          <Link href="/terms" className="transition hover:text-blue-600">
            Terms of Service
          </Link>
        </div>

        {/* Copyright */}
        <div className="md:text-right">
          <p>© 2024 DocAppoint Healthcare Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
