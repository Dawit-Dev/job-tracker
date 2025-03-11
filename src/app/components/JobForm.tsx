"use client"

import React, { useState, useEffect } from "react"

interface Job {
  id: number
  title: string
  company: string
  status: string;
}

// Define props interface
interface JobFormProps {
  onAddJob: (job: Job) => void;
  editingJob: Job | null
  onUpdateJob: (job: Job) => void
}

// Accept props in the function
export default function JobForm({onAddJob, editingJob, onUpdateJob }: JobFormProps) {
  const [jobTitle, setJobTitle] = useState("")
  const [company, setCompany] = useState("")
  const [status, setStatus] = useState("Applied")

  useEffect(() => {
    if (editingJob) {
      setJobTitle(editingJob.title)
      setCompany(editingJob.company)
      setStatus(editingJob.status)
    }
  }, [editingJob])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!jobTitle || !company) return;

    const newJob: Job = {
      id: editingJob ? editingJob.id : Date.now(),
      title: jobTitle,
      company,
      status
    }

    if (editingJob) {
      onUpdateJob(newJob)
    } else {
      onAddJob(newJob)
    }

    // onAddJob(newJob); // Call the function from props

    setJobTitle("")
    setCompany("")
    setStatus("Applied")

    // console.log("Job Submitted:", { jobTitle, company, status })
    // setJobTitle("")
    // setCompany("")
    // setStatus("Applied")
  }
    
  return (
    <div className='bg-white p-4 shadow-md rounded-lg w-full max-w-md'>
      <h2 className='text-xl text-black font-semibold mb-3'> Add a Job Application</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type='text'
          placeholder='Job Title'
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className='w-full p-2 border rounded mb-2 placeholder-gray-500 text-black'
          required
        />

        <input
          type='text'
          placeholder='Company'
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className='w-full p-2 border rounded mb-2 placeholder-gray-500 text-black'
          required
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className='w-full p-2 border rounded mb-3 text-gray-500'
        >
          <option value='Applied'>Applied</option>
          <option value='Interviewing'>Interviewing</option>
          <option value='Rejected'>Rejected</option>
          <option value='Offer'>Offer</option>
        </select>

        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded w-full'
        >
          {editingJob ? "Update Job" : "Add Job"}
        </button>
      </form>
    </div>
  )
}
