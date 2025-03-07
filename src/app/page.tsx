"use client"

import React, { useState } from "react"
import JobForm from "./components/JobForm"

interface Job {
  id: number
  title: string
  company: string
  status: string
}

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([])

  const addJob = (job: Job) => {
    setJobs((prevJobs) => [...prevJobs, job])
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4'>
      <h1 className='text-4xl font-bold text-gray-600 mb-4'>Job Tracker</h1>
      <p className='text-lg text-gray-700 mb-6'>
        Track your job applications easily.
      </p>

      <JobForm onAddJob={addJob} />

      {/* Job List Display */}
      {jobs.length > 0 && (
        <div className='mt-6 w-full max-w-md bg-white p-4 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold text-blue-500 mb-3'>
            Job Applications
          </h2>
          <ul className='space-y-2'>
            {jobs.map((job) => (
              <li key={job.id} className='p-2 border rounded bg-gray-50'>
                <strong className='text-gray-900'>{job.title}</strong> at
                <span className="text-blue-700">{job.company}</span>-
                <span className='text-green-600 font-medium'> {job.status}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

// export default function Home() {
//   return (
//     <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4'>
//       <h1 className='text-4xl font-bold text-gray-900 mb-4'>Job Tracker</h1>
//       <p className='text-lg text-gray-600 mb-6'>
//         Track your job applications easily.
//       </p>

//       <JobForm />
//     </div>
//   )
// }
