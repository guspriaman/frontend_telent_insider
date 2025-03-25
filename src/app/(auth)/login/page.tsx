"use client";

import { useState } from "react";
import { login } from "@/authService";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await login(credentials);
      setSuccess("Login berhasil! Anda akan segera dialihkan...");
      setTimeout(() => {
        router.push("/property"); // Redirect ke dashboard setelah login sukses
      }, 2000);
    } catch (err: any) {
      setError(err.message || "Login gagal. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>

      {error && (
        <div className="bg-red-500 text-white text-sm text-center py-2 rounded-md mb-4">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-500 text-white text-sm text-center py-2 rounded-md mb-4">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
          <button
          type="submit"
          className="w-full bg-gray-300 text-gray-600 py-2 hover:bg-red-600 hover:text-white rounded-md font-semibold cursor-not-allowed"
          disabled={loading}
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>

      <div className="flex justify-between text-sm mt-4">
        <p>
          New to Xplore? <span className="font-semibold cursor-pointer"><a href="/register" className="text-black font-semibold">Sign Up</a></span>
        </p>
        
        <p className="cursor-pointer">Forgot Password?</p>
      </div>

      <div className="relative flex items-center my-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500">Or</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md font-semibold">
        <FcGoogle className="mr-2 text-lg" />
        Log In with Google
      </button>
    </div>
  );
};

export default Login;
