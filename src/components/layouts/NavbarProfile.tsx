"use client";

import Link from "next/link";
import MobileNav from "@/components/layouts/MobileNav";
import { buttonVariants } from "@/components/ui/Button";
import DesktopNavProfile from "./DesktopNavProfile";

const NavbarProfile: React.FC = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b shadow-md bg-white">
      
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between py-3">
        {/* Mobile Navigation */}
        <MobileNav />

        {/* Desktop Navigation */}
        <DesktopNavProfile />

        {/* Sign In Button */}
        <div className="hidden lg:flex">
          <Link href="/login" className={buttonVariants({ size: "sm" })}>
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavbarProfile;
