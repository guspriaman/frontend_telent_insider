
"use client";

import { useState } from "react";
import SidebarNav from "@/components/SidebarNav";
import  SearchBar from "@/components/SearchBar";
import { properties } from "@/components/PropertyList";
import { Bookmark } from "lucide-react";

import { ShieldCheck, Clock } from "lucide-react";

export default function PropertyLayout() {
  const [status, setStatus] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<number[]>([4000000, 8000000]);

  const filteredProperties = properties.filter((property) => {
    const matchesStatus = status ? property.status === status : true;
    const matchesLocation = location ? property.location === location : true;
    const matchesType = type ? property.type === type : true;
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];

    return matchesStatus && matchesLocation && matchesType && matchesPrice;
  });

  return (
    <div className="flex flex-col">
      <div className="flex">
        <SidebarNav setStatus={setStatus} setLocation={setLocation} setType={setType} setPriceRange={setPriceRange} />

        <main className="flex-1 p-6">
          <div className="mb-2">

        <SearchBar />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <div
                  key={property.id}
                  className="relative border border-gray-200 bg-white p-4 rounded-2xl shadow-lg"
                >
                  {/* Bookmark Icon */}
                  <button className="absolute top-3 right-3 text-blue-900 hover:text-red-500">
                    <Bookmark size={18} />
                  </button>

                  {/* Image */}
                  <div className="flex items-center gap-4">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-10 h-10 object-cover rounded-lg"
                    />
                    <div >
                      <h2 className="text-sm font-bold">{property.name}</h2>
                      <div className="flex items-center gap-1">
                        <p className="text-sm text-gray-500">{property.location}</p>
                        <ShieldCheck className="w-4 h-4 text-blue-500" />
                      </div>

                    </div>
                  </div>

                  <div className="mt-3">
                    {/* Tags */}
                    <div className="flex justify-between items-center gap-2 mt-2">
                      <span className="text-xs font-semibold bg-blue-100 text-blue-600 px-4 py-2 rounded-lg">
                        {property.type}
                      </span>
                      <span className="text-xs font-semibold bg-blue-100 text-blue-600 px-4 py-2 rounded-lg">
                        {property.status}
                      </span>
                      <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-4 py-2 rounded-lg">
                        IDR {property.price / 1000000}M
                      </span>
                    </div>


                    {/* Price & Booking Button */}
                    <div className="mt-4 flex justify-end items-center text-sm font-semibold text-gray-700">
                      <div className="flex items-center gap-2">
                        <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md">
                          LT {property.landSize} m² LB {property.buildingSize} m²
                        </span>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-xs text-gray-400">{property.listingAge} d</span>
                        </div>
                      </div>
                    </div>

                    {/* Book Button */}
                    <button className="mt-4 w-full bg-gradient-to-r from-pink-500 to-pink-700 text-white font-semibold py-2 rounded-lg shadow-md hover:opacity-90 transition">
                      Book
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center text-center mt-20">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-lg mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 9.75V6.75a3 3 0 00-3-3H7.5a3 3 0 00-3 3v3m15 0h-15m15 0l-1.5 9.75a3 3 0 01-3 2.25H9a3 3 0 01-3-2.25L4.5 9.75m15 0H4.5"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 text-lg">
                  Maaf, tidak ada hasil untuk <strong>"(keyword)"</strong>.
                  Kami akan terus memperbarui data.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-pink-700 text-white font-semibold rounded-md shadow-md hover:opacity-90 transition"
                >
                  Lihat Properti Lain
                </button>
              </div>
            )}
          </div>
        </main>

      </div>
    </div>
  );
}
