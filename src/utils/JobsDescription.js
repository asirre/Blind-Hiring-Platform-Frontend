import { CCardGroup, CRow, CButton } from '@coreui/react'
import React, { useEffect, useMemo, useState, Spinner } from 'react'
import placeholder from '../img/google_logo.png'
// import AsyncSelect from "react-select/async";
import {
  getAllJobs,
  usersJob,
  getCVFeedback,
  createJobPosting,
} from './LambdaRequests'

const JobDescription = () => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await getAllJobs()
      setJobs(response)
    }
    getData()
    console.log(jobs)
  }, [])

  return (
    <div className='w-4/5 h-4/5 z-10 mx-auto mt-20 flex flex-col'>
      <div
        id='Title'
        className='h-16 w-11/12 mx-auto mb-10 bg-primaryTailwind border border-gray-400 flex items-center justify-center rounded'
      >
        <h1 className='text-2xl m-0 font-light'>Job Description </h1>
      </div>
      <div
        id='Jobs'
        className='h-60 w-11/12 mx-auto mb-10 bg-primaryTailwind border border-gray-400 flex items-center justify-center rounded'
      >
        <div className='job-header mb-2 flex gap-3'>
          <div className='job-image'>
            <img
              src={placeholder}
              width='64'
              height='64'
              className='float-left'
            />
          </div>
          <div className='job-title font-sans h-full flex flex-col'>
            <h1 className='text-xl'>
              <b>text</b>
            </h1>
            <p className='job-posted-date text-sm text-gray-500 justify-self-end mb-2'>
              Posted
            </p>
          </div>
        </div>
        <div className='job-description flex-1'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
        </div>
      </div>
      <div className='flex w-4/5 mx-auto justify-end pt-4' id='button'>
        <CButton href='/add-job'>Apply</CButton>
      </div>
    </div>
  )
}

export default JobDescription
