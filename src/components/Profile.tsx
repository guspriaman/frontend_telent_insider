"use client";

import Image from "next/image";
import { useState } from "react";
import { Edit2 } from "lucide-react";
import Link from "next/link";

export default function Profile() {
    const [progress, setProgress] = useState(70);

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Full-width Hero Section */}
            <div className="relative w-full h-64 bg-gray-300 rounded-b-[50px] border border-gray-300 shadow-md">
                <Image
                    src="/images/bg-profile.jpg"
                    alt="Background"
                    fill
                    className="object-cover rounded-b-[50px]"
                />
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                    <Edit2 size={16} />
                </button>
            </div>

            {/* Profile Card - Lebih Lebar */}
            <div className="relative mt-10 w-full max-w-6xl mx-auto bg-white rounded-t-[50px] rounded-b-none shadow-lg text-center py-8 px-6">
                {/* Profile Image */}
                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 border-10 border-red-700 rounded-b-[100px] shadow-md">
                    <Image
                        src="/images/profiles.jpg"
                        alt="Profile"
                        width={120}
                        height={250}
                        className="rounded-b-[100px] object-cover"
                    />
                </div>

                {/* Profile Info */}
                <div className="mt-16 flex justify-between items-center">
                    {/* Placeholder agar posisi tetap stabil */}
                    <div className="w-24"></div>

                    {/* Tengah: Informasi Profil */}
                    <div className="text-center flex-1">
                        <h2 className="text-xl font-semibold flex items-center justify-center gap-1">
                            Amanda Christine <span className="text-red-500">🔴</span>
                        </h2>
                        <p className="text-gray-500 text-sm">South Jakarta, DKI Jakarta, Indonesia</p>
                        <Link href="#">
                            <button className="mt-3 bg-red-500 text-white px-5 py-2 rounded-md text-sm hover:bg-red-600 transition">
                                Edit Profile
                            </button>
                        </Link>
                    </div>

                    {/* Kanan: Tombol Aksi */}
                    <div className="flex flex-col items-end gap-2">
                        <Link href="#">
                            <button className="bg-white text-black px-4 py-2 border rounded-md text-sm w-24 hover:bg-gray-200 transition">
                                Message
                            </button>
                        </Link>
                        <Link href="#">
                            <button className="bg-white text-black px-4 py-2 border rounded-md text-sm w-24 hover:bg-gray-200 transition">
                                Follow
                            </button>
                        </Link>
                        <Link href="#">
                            <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm w-24 hover:bg-red-600 transition">
                                Connect
                            </button>
                        </Link>
                    </div>
                </div>

            </div>

            <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 mt-8 px-6">
                {/* Left Sidebar */}
                <div className="w-full lg:w-1/4 flex flex-col gap-4">
                    {/* Profile Status */}
                    <div className="bg-white rounded-xl shadow-md p-5">
                        <h3 className="font-semibold text-gray-700 text-lg">Profile Status</h3>
                        <p className="text-sm text-gray-500 mt-1">Complete 2 steps to achieve Expert!</p>
                        <div className="mt-3 bg-gray-300 rounded-full h-2.5 w-full">
                            <div className="bg-red-500 h-2.5 rounded-full" style={{ width: `70%` }}></div>
                        </div>
                        <p className="text-sm font-semibold text-red-500 mt-1">70%</p>

                        <div className="mt-4 space-y-3">
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <p className="text-sm font-semibold">Which industry do you work in?</p>
                                <p className="text-xs text-gray-500 mt-1">
                                    Members who add an industry receive up to 2.5 times as many profile views.
                                </p>
                                <button className="mt-2 bg-white text-black px-4 py-2 border rounded-md text-sm w-full hover:bg-gray-200 transition">
                                    Button
                                </button>
                            </div>

                            <div className="bg-gray-100 p-4 rounded-lg">
                                <p className="text-sm font-semibold">Which University do you go to?</p>
                                <p className="text-xs text-gray-500 mt-1">
                                    Members who add an industry receive up to 2.5 times as many profile views.
                                </p>
                                <button className="mt-2 bg-white text-black px-4 py-2 border rounded-md text-sm w-full hover:bg-gray-200 transition">
                                    Button
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="bg-white rounded-xl shadow-md p-5 mb-2">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-gray-700 text-lg">About</h3>
                            <button className="text-gray-500 hover:text-gray-700">
                                ✏️
                            </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie...
                        </p>
                    </div>
                </div>

                {/* Right Content */}
                <div className="w-full lg:w-3/4 bg-white rounded-xl shadow-md flex flex-col items-center justify-center min-h-[400px] mb-2">
                    <p className="text-gray-500 text-lg">No content available</p>
                </div>
            </div>
        </div>
    );
}
