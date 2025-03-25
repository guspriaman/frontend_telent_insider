"use client";

import Footer from '@/components/layouts/Footer';
import NavbarProfile from '@/components/layouts/NavbarProfile';

const ProfileLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div>
      <NavbarProfile />
      <div className="max-w-7xl mx-auto flex sm:px-6 lg:px-8">
        {/* Main Content */}
        <main className="flex-1 pt-6 md:pt-10 w-full">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileLayout;
