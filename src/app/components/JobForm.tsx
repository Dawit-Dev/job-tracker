"use client"

import React, { useState } from "react"

export default function JobForm() {
  const [jobTitle, setJobTitle] = useState("")
  const [company, setCompany] = useState("")
  const [status, setStatus] = useState("Applied")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Job Submitted:", { jobTitle, company, status })
    setJobTitle("")
    setCompany("")
    setStatus("Applied")
  }
    
    return (
      <form
        onSubmit={handleSubmit}
        className='bg-white p-4 shadow-md rounded-lg w-full max-w-md'
      >
        <h2 className='text-xl font-semibold mb-3'> Add a Job Application</h2>
        <input
          type='text'
          placeholder='Job Title'
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className='w-full p-2 border rounded mb-2'
          required
        />

        <input
          type='text'
          placeholder='Company'
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className='w-full p-2 border rounded mb-2'
          required
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className='w-full p-2 border rounded mb-3'
        >
          <option value='Applied'>Applied</option>
          <option value='Interviewing'>Interviewing</option>
          <option value='Rejected'>Rejected</option>
          <option value='Offer'>Offer</option>
            </select>
            
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Add Job
            </button>
      </form>
    )
}
