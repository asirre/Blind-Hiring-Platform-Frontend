import { CCardGroup, CRow, CButton } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import placeholder from '../img/google_logo.png'
// import AsyncSelect from "react-select/async";
import { getAllJobs, createJobPosting } from './LambdaRequests'

const JobDescription = () => {
  const routeParams = useParams()
  const index = routeParams.id
  console.log(index)

  useEffect(() => {
    console.log('Hi')
    // const getData = async () => {
    //   const response = await getAllJobs()
    //   setJobs(response)
    // }
    // getData()
    // console.log(jobs)
  }, [])

  const [jobs, setJobs] = useState([])
  useEffect(() => {
    console.log('Hi')
    const getData = async () => {
      const response = await getAllJobs()
      setJobs(response)
    }
    getData()
    console.log(jobs)
  }, [])

  useEffect(() => {
    const getData = async () => {
      const response = await createJobPosting()
      console.log(job)
      console.log(response)
    }
    getData()
  }, [])

  const job = jobs[0]
  console.log(job)

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
        <div class='p-4 flex-fill bd-highlight'>
          <div className='job-image'>
            <img
              src={placeholder}
              width='64'
              height='64'
              className='float-left'
            />
          </div>
          <div className='job-title font-sans p-2 h-full flex-fill'>
            <h1 className='text-xl'>
              <b>
                {job.job_position} {job.organization}
              </b>
            </h1>
            <p className='job-posted-date text-sm text-gray-500 justify-self-end mb-2'>
              Posted {job.posting_date}
            </p>
          </div>
        </div>
        <div className='job-description p-2 flex-grow-1 bd-highlight'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
        </div>
      </div>
      <div className='flex w-4/5 mx-auto justify-end pt-4' id='button'>
        <CButton>Apply</CButton>
      </div>
    </div>
  )
}

export default JobDescription
