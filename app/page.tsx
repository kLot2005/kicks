"use client";

import { Navbar } from "@/components/navbar";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='flex min-h-screen flex-col items-center justify-center px-4'>
        <h1 className='text-4xl font-bold'>Welcome to the Home Page</h1>
        <p className='mt-2 text-lg text-gray-600'>
          This is the main page of the application.
        </p>
      </div>
    </>
  );
}
