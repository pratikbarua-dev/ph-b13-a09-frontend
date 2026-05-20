// components/SearchBar.jsx

import { Search, MapPin, ChevronDown, SlidersHorizontal } from "lucide-react";

export default function SearchBar() {
  return (
    <section className="bg-[#f5f7fb] px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        {/* Top Row */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search Doctor name, specialty or hospital..."
              className="h-14 w-full rounded-xl border border-gray-200 bg-white pl-12 pr-4 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Location */}
          <button className="flex h-14 items-center justify-between rounded-xl border border-gray-200 px-5 text-sm font-medium text-gray-700 transition hover:border-blue-500 lg:w-[270px]">
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-gray-400" />
              <span>Current Location</span>
            </div>

            <ChevronDown size={18} className="text-gray-400" />
          </button>
        </div>

        {/* Bottom Filters */}
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          {/* Filter Items */}
          <div className="grid flex-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Gender */}
            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-wide text-gray-500">
                Gender
              </label>

              <button className="flex h-12 w-full items-center justify-between rounded-xl border border-gray-200 px-4 text-sm font-medium text-gray-700 transition hover:border-blue-500">
                <span>Any Gender</span>

                <ChevronDown size={16} className="text-gray-400" />
              </button>
            </div>

            {/* Availability */}
            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-wide text-gray-500">
                Availability
              </label>

              <button className="flex h-12 w-full items-center justify-between rounded-xl border border-gray-200 px-4 text-sm font-medium text-gray-700 transition hover:border-blue-500">
                <span>Any Day</span>

                <ChevronDown size={16} className="text-gray-400" />
              </button>
            </div>

            {/* Consultation Fee */}
            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-wide text-gray-500">
                Consultation Fee
              </label>

              <button className="flex h-12 w-full items-center justify-between rounded-xl border border-gray-200 px-4 text-sm font-medium text-gray-700 transition hover:border-blue-500">
                <span>Any Price</span>

                <ChevronDown size={16} className="text-gray-400" />
              </button>
            </div>
          </div>

          {/* More Filters */}
          <button className="flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700">
            <SlidersHorizontal size={17} />
            More Filters
          </button>
        </div>
      </div>
    </section>
  );
}
