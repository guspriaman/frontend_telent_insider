"use client";

import Link from 'next/link';
import Image from 'next/image';
import { NavigationMenu, NavigationMenuList } from '@/components/ui/NavigationMenu';
import { ListItem } from './ListItem';
import SearchProperti from "@/components/layouts/SearchProperty";

const DesktopNav = () => {
  const menuItems = [
    { href: '/', title: 'Home' },
    { href: '/property', title: 'Property' },
    { href: '/profile', title: 'Profile' },
  ];

  return (
    <div className="hidden lg:flex w-full max-w-7xl mx-auto items-center justify-between py-2 px-2">
      
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo_putih.png"
          alt="logo"
          width={50}
          height={50}
          className="h-12 w-12"
        />
      </Link>

      {/* Search Bar */}
      <div className="w-[40%] max-w-md">
        <SearchProperti />
      </div>

      {/* Navigation Menu */}
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-6">
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              className="hover:bg-white text-white hover:text-black px-4 py-2 rounded-lg transition-all duration-300"
              href={item.href}
              title={item.title}
            />
          ))}
        </NavigationMenuList>
      </NavigationMenu>

    </div>
  );
};

export default DesktopNav;
