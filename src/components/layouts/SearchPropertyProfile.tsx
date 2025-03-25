"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { properties } from "@/components/PropertyList";

const SearchPropertyProfile = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const filteredProperties = properties.filter(
    (property) =>
      property.name.toLowerCase().includes(query.toLowerCase()) ||
      property.location.toLowerCase().includes(query.toLowerCase()) ||
      property.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-lg mx-auto">


      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 shadow-md rounded-lg mt-2 p-1">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full py-2.5 px-4 bg-transparent outline-none text-gray-700 placeholder-gray-400 rounded-l-full"
        />
        <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg flex items-center justify-center w-10 h-10">
          <Search className="w-5 h-5" />
        </button>
      </div>

      {/* Dropdown Hasil Pencarian */}
      {query && (
        <ul className="absolute w-full bg-white border border-gray-300 mt-1 rounded-md shadow-md max-h-60 overflow-y-auto">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <li
                key={property.id}
                className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => router.push(`/property?id=${property.id}`)}
              >
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-10 h-10 rounded-md mr-3"
                />
                <div>
                  <p className="font-semibold">{property.name}</p>
                  <p className="text-sm text-gray-500">{property.location} - {property.type}</p>
                </div>
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">Properti tidak ditemukan.</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchPropertyProfile;
