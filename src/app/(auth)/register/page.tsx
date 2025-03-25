"use client";

import { useState } from "react";
import { register } from "@/authService";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setPopupMessage(null);

    try {
      await register(formData);
      setPopupMessage("Registrasi berhasil! Anda akan diarahkan ke halaman login.");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err: any) {
      setPopupMessage("Registrasi gagal! " + (err.message || "Silakan coba lagi."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

      {popupMessage && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-4 py-2 rounded-md shadow-md">
          {popupMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Set Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="+62xxxxxxxxxx"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-300 text-gray-700 p-3 hover:bg-red-600 hover:text-white rounded mt-4"
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>

        <p className="text-center text-sm mt-3">
          Already Have An Account?{" "}
          <a href="/login" className="text-black font-semibold">
            Log In
          </a>
        </p>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-500">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button className="w-full flex items-center justify-center border border-gray-400 py-2 rounded">
          <FcGoogle className="mr-2 text-xl" />
          Sign up with Google
        </button>
      </form>
    </div>
  );
};

export default Register;
