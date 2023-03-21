import { CButton, CSpinner } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import Job from './Job'
import { callLambda } from './LambdaRequests'

let applied = false;


const Jobs = () => {
  const [jobs, setJobs] = useState([])
  const [isLoading, setLoading] = useState(true)
  const email = localStorage.getItem('email')

  const getData = async () => {
    const response = await callLambda({token: localStorage.getItem("token"), url: "https://2etnadonz2.execute-api.eu-west-1.amazonaws.com/prod/job-posting"})
    setJobs(response)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  const appliedJobs = async () => {
    if (applied) {
      getData()
      applied = false
    } else {
      const response = await callLambda({token: localStorage.getItem("token"), url: 'https://2etnadonz2.execute-api.eu-west-1.amazonaws.com/prod/job-posting?username=' + email})
      setJobs(response)
      setLoading(false)
      applied = true
    }
  }

  return (
    <div className='w-4/5 h-4/5 z-10 mx-auto mt-20 flex flex-col'>
      <div
        id='Title'
        className='h-16 w-11/12 mx-auto mb-10 bg-slate-100 border border-gray-400 flex items-center justify-center rounded'
      >
        <h1 className='text-2xl m-0 font-light'>All listed Job Positions </h1>
      </div>
      <div
        id='Jobs'
        className='h-4/5 w-4/5 float-left mx-auto flex-grow overflow-y-scroll'
      >
        <ul className='w-full flex flex-col gap-4'>
          {isLoading ? (
            <CSpinner style={{ marginTop: '15%', marginLeft: '45%' }} />
          ) : (
            jobs.map((job, index) => <Job job={job} index={index} />)
          )}
        </ul>
      </div>
      <div className='flex w-4/5 mx-auto justify-end pt-4' id='button'>
        <div className='flex w-4/5 mx-auto justify-end pt-4' id='button'>
          {applied ? (
            <CButton onClick={appliedJobs}>See all Jobs</CButton>
          ) : (
            <CButton onClick={appliedJobs}>See my applied Jobs</CButton>
          )}
        </div>
        <div className='flex mx-auto justify-end pt-4' id='button'>
          <CButton href='/job-upload'>Add posting</CButton>
        </div>
      </div>
    </div>
  )
}

export default Jobs
