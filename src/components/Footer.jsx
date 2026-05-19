// components/Footer.jsx

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f5f7fb] px-6 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 text-sm text-gray-500 md:grid-cols-4">
        
        <div>
          <h2 className="text-lg font-bold text-blue-600">
            DocAppoint
          </h2>

          <p className="mt-3 max-w-xs leading-7">
            Empowering patients with seamless healthcare
            access and trusted medical professionals.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Support</Link>
          <Link href="/careers">Careers</Link>
        </div>

        <div className="flex flex-col gap-4">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>

        <div className="md:text-right">
          <p>
            © 2024 DocAppoint Healthcare Systems.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}