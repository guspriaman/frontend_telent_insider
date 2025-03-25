"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";
import LogoutButton from "@/components/Logout";
import { FaUserCircle } from "react-icons/fa";

const API_URL = "/api";

const UserAccountNav = () => {
  const [user, setUser] = useState<{ name?: string; email: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      axios
        .get(`${API_URL}/user`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setUser(response.data))
        .catch(() => {
          Cookies.remove("token");
          router.push("/login");
        });
    }
  }, [router]);

  if (!user) return null;

  return (
    <div className="relative group inline-block">
      {/* Button dengan ikon user */}
      <button className="flex items-center space-x-2 p-2 rounded-lg bg-gray-200 hover:bg-gray-300">
        <FaUserCircle className="text-xl text-gray-700" />
        <span className="text-sm font-medium">{user.name || user.email}</span>
      </button>

      {/* Dropdown Logout */}
      <div className="absolute hidden group-hover:block right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2">
        <LogoutButton />
      </div>
    </div>
  );
};

export default UserAccountNav;
