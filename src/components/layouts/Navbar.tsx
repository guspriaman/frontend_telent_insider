"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import DesktopNav from "@/components/layouts/DesktopNav";
import MobileNav from "@/components/layouts/MobileNav";
import { buttonVariants } from "@/components/ui/Button";
import UserAccountNav from "@/components/UserAccountNav";

const Navbar: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Mengecek apakah token tersedia di cookie
    setIsAuthenticated(!!Cookies.get("token"));
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b shadow-md bg-gradient-to-r from-pink-400 to-pink-600">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between py-3">
        {/* Mobile Navigation */}
        <MobileNav />

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Sign In or User Account */}
        {isAuthenticated ? (
          <UserAccountNav />
        ) : (
          <Link href="/login" className={buttonVariants({ size: "sm" })}>
            Sign In
            <span className="sr-only">Sign In</span>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
