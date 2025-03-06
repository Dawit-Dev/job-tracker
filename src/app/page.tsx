"use client"

import React from "react"
import JobForm from "./components/JobForm"

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4'>
      <h1 className='text-4xl font-bold text-gray-900 mb-4'>Job Tracker</h1>
      <p className='text-lg text-gray-600 mb-6'>
        Track your job applications easily.
      </p>

      <JobForm />
    </div>
  )
}
