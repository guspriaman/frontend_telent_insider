"use client";


const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full p-6 rounded-lg">
        {/* Header dengan logo di kiri dan teks di kanan */}
        <div className="flex items-center justify-between mb-6">
          {/* Logo */}
          <img src="/images/logo.png" alt="Logo" className="h-10 w-auto" />

          {/* Text lorem */}
          <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet.</p>
        </div>

        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
