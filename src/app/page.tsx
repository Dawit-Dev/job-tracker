"use client"

import React, { useState } from "react"
import JobForm from "./components/JobForm"

interface Job {
  id: number
  title: string
  company: string
  status: string
  name?: string
  surname?: string
  cohort?: string
}

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [editingJob, setEditingJob] = useState<Job | null>(null)

  const addJob = (job: Job) => {
    setJobs((prevJobs) => [...prevJobs, job])
  }

  const deleteJob = (id: number) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id))
  }

  const startEditing = (job: Job) => {
    setEditingJob(job)
  }

  const updateJob = (updatedJob: Job) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) => (job.id === updatedJob.id ? updatedJob : job))
    )
    setEditingJob(null)
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4'>
      <h1 className='text-4xl font-bold text-gray-600 mb-4'>Job Tracker</h1>
      <p className='text-lg text-gray-700 mb-6'>
        Track your job applications easily.
      </p>

      <JobForm
        onAddJob={addJob}
        editingJob={editingJob}
        onUpdateJob={updateJob}
      />

      {/* Job List Display */}
      {jobs.length > 0 && (
        <div className='mt-6 w-full max-w-md bg-white p-4 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold text-blue-500 mb-3'>
            Job Applications
          </h2>
          {/* <ul className='space-y-2' */}
          {jobs.map((job) => (
            <div
              key={job.id}
              className='bg-white p-4 shadow-md rounded-lg mb-2 w-full max-w-md'
            >
              {job.name && (
                <p className='text-black-700 text-black'>
                  {job.name} {job.surname}
                </p>
              )}
              {job.cohort && (
                <p className='text-black-500 text-black'>
                  Cohort: {job.cohort}
                </p>
              )}
              <h3 className='text-lg font-semibold text-black'>
                {job.title} at {job.company} - {job.status}
              </h3>

              <div className='flex space-x-2 mt-2'>
                <button
                  onClick={() => startEditing(job)}
                  className='bg-yellow-500 text-white px-2 py-1 rounded'
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteJob(job.id)}
                  className='bg-red-500 text-white px-2 py-1 rounded'
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
