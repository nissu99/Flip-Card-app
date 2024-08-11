"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Dashboard</h1>
      <p className="mt-4 mb-8 text-center text-lg text-gray-600">
        Welcome to the Dashboard. Navigate to the Admin or Quiz section using the buttons below.
      </p>
      <div className="flex space-x-4">
        <Button
          className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          onClick={() => {
            router.push("/admin");
          }}
        >
          Admin
        </Button>
        <Button
          className="px-6 py-3 text-white bg-green-600 rounded-md hover:bg-green-700"
          onClick={() => {
            router.push("/quiz");
          }}
        >
          Quiz
        </Button>
      </div>
    </div>
  );
}
