"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Mail, Bell, Search, ChevronDown, Globe } from "lucide-react";
import { properties } from "@/components/PropertyList";

const DesktopNavProfile = () => {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const filteredProperties = properties.filter(
    (property) =>
      property.name.toLowerCase().includes(query.toLowerCase()) ||
      property.location.toLowerCase().includes(query.toLowerCase()) ||
      property.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="hidden lg:flex w-full text-black px-6 py-3 items-center justify-between">
      {/* Logo & Menu dengan Background Bersama */}
      <Link href="/">
        <Image src="/images/logo.png" alt="logo" width={50} height={50} className="h-12 w-12" />
      </Link>
      <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 space-x-4">

        {/* Dropdown Menu */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center space-x-1 text-black rounded-md px-2 py-1"
          >
            <Globe className="w-5 h-5 text-gray-800" />
            <span>Menu</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          {menuOpen && (
            <ul className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-md w-40">
              {[{ href: "/", title: "Home" }, { href: "/property", title: "Property" }, { href: "/profile", title: "Profile" }].map(
                (item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="block px-4 py-2 hover:bg-gray-200">
                      {item.title}
                    </Link>
                  </li>
                )
              )}
            </ul>
          )}
        </div>
        {/* Garis Vertikal */}
        <div className="border-l border-gray-300 h-8 mx-4"></div>
        {/* Search Bar dalam satu background */}
        <div className="relative w-180 flex items-center text-black rounded-lg px-3 py-1 ml-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full bg-transparent outline-none px-2 py-1"
          />
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center justify-center w-20 h-10">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Dropdown Hasil Pencarian */}
      {query && (
        <ul className="absolute w-80 bg-white text-black border mt-12 rounded-md shadow-md max-h-60 overflow-y-auto z-50">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <li
                key={property.id}
                className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => router.push(`/property?id=${property.id}`)}
              >
                <img src={property.image} alt={property.name} className="w-10 h-10 rounded-md mr-3" />
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

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-600">
          <Mail className="w-6 h-6" />
        </button>
        <button className="relative text-gray-600 px-2">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-lg w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>
        <button className="w-10 h-10 rounded-lg overflow-hidden border border-gray-400">
          <Image src="/images/profiles.jpg" alt="Profile" width={40} height={40} />
        </button>
      </div>
    </div>
  );
};

export default DesktopNavProfile;
