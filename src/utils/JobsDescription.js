import {CButton} from '@coreui/react'
import React from 'react'
import placeholder from '../img/google_logo.png'
import {callLambda} from './LambdaRequests'
import axios from 'axios'

const JobDescription = ({job}) => {
    const jwtToken = localStorage.getItem('token');
    const email = localStorage.getItem('email');

    const getCVs = async () => {
        const config = {
            method: 'get',
            url: 'https://2etnadonz2.execute-api.eu-west-1.amazonaws.com/prod/user-metadata/' + email,
            headers: {
                Authorization: jwtToken
            }
        }
        console.log(config);
        const response = await axios(config)
            .catch(function (error) {
                console.log(error);
                alert("Oops, something went wrong! Please try again.")
            });
        console.log(response.data);
        return response.data;
    }

    const sendJobUpdate = async () => {
        await getCVs().then((cvs) => {
            console.log(cvs);
            // Dynamically create the data object
            let candidates = cvs.cv.map(cvPath => {
                return {
                    "user_id": email,
                    "attached_cv": 'https://2etnadonz2.execute-api.eu-west-1.amazonaws.com/prod/cv-upload/' + cvPath
                };
            });
            callLambda({
                token: localStorage.getItem("token"),
                method: 'patch',
                url: 'https://2etnadonz2.execute-api.eu-west-1.amazonaws.com/prod/job-posting/' + job.job_posting_id,
                data: {
                    "candidates": candidates
                }
            });
        });
    }

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
                    <p>{job.description}</p>
                </div>
            </div>
            <div className='flex w-4/5 mx-auto justify-end pt-4' id='button'>
                <CButton onClick={sendJobUpdate}>Apply</CButton>
            </div>
        </div>
    )
}

export default JobDescription
