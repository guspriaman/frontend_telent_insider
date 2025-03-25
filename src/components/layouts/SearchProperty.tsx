"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { properties } from "@/components/PropertyList";

const SearchProperty = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const filteredProperties = properties.filter(
    (property) =>
      property.name.toLowerCase().includes(query.toLowerCase()) ||
      property.location.toLowerCase().includes(query.toLowerCase()) ||
      property.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-80">
      <div className="flex items-center px-2 rounded-lg gap-0.5">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          className="w-full px-4 py-2 bg-white rounded-lg outline-none text-gray-700 placeholder-gray-400"
        />
        <button className="bg-blue-900 hover:bg-blue-800 text-white px-2 py-2 rounded-lg flex items-center justify-center w-20 h-10">
          <Search className="w-5 h-5" />
        </button>
      </div>


      {query && (
        <ul className="absolute w-full bg-white border mt-1 rounded-md shadow-md max-h-60 overflow-y-auto">
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

export default SearchProperty;
