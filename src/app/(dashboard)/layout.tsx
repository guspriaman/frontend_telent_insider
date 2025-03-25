"use client";

import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';

const DashbaordLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div>
      <Navbar />
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

export default DashbaordLayout;
