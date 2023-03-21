import {CButton} from '@coreui/react'
import React, {useContext, useEffect, useState} from 'react'
import placeholder from '../img/google_logo.png'
import {AccountContext} from '../Account'
import {updateJobPostings} from './LambdaRequests'
import axios from 'axios'

const JobDescription = ({job}) => {
    const {getSession} = useContext(AccountContext)
    const [cvPathList, setPath] = useState()
    const [email, setEmail] = useState()

    const getCVs = async () => {
        const config = {
            method: 'get',
            url: 'https://2etnadonz2.execute-api.eu-west-1.amazonaws.com/prod/user-metadata/' + email,
            headers: {
                Authorization:
                    'eyJraWQiOiJSMFhMQW10MG9jOW5EeHR2YzRVRnViSmRkaDJvVGRMUXkrTStoOU1XYlRVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjZmFjYTExMi1hOWEwLTQ2NTQtYjE5Ny1mN2RlN2Y4NDQzNzgiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX2x5N0V3M3VLbiIsImNvZ25pdG86dXNlcm5hbWUiOiJjZmFjYTExMi1hOWEwLTQ2NTQtYjE5Ny1mN2RlN2Y4NDQzNzgiLCJvcmlnaW5fanRpIjoiZDFhYTljYzEtZDRmMC00N2VkLWJjNzQtNTQ3NDNhMmVmYmQ5IiwiYXVkIjoiNDhvY21tZHNiZDZoYTFkOHBiZjI3amdkZWkiLCJldmVudF9pZCI6IjViNWNlNTM3LTA4YmMtNDZjNC1iNWNhLWJhN2VkMDVjZjIxYyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjc4OTc1MzM3LCJleHAiOjE2Nzg5Nzg5MzcsImlhdCI6MTY3ODk3NTMzNywianRpIjoiODJhZTdhYjEtZWI4NC00NjVhLWExOTctMmE5ZDI0ODIyNjk5IiwiZW1haWwiOiJha2lya2luaXNAZ21haWwuY29tIn0.uBy5ksiWZbc3SYZ-4Ey4vMFVPR9Off3kIj0NiZDGqh8_9u7IIXfOYthsMtOM1D2mxb8uC18N3bfC2IGE0RSO9xjhN7_OF8sCzdqtwhM3Tus8mpqiOijFci5y0PvSykU917FvpujqRSbTmFbP9d8jksz-6ydM33layOlwQ-rR8oQVFbwZRlNuH_-l192LTgVdjXuRnWJy0giVRTG0TovmqpvCEy3kI1r0BIx42Ajkv2OdheQ5Ajze7scq7u9DScWnj3-VNMMuuW0R8k7WPv0RvHZJjLaECvJza3gEpbHoTwJkT1pcgJGXz81w6SxC7WMFenwrLZ0w3Y2Ynj1XaCiqNw',
                'Content-Type': 'text/plain',
            },
        }

        const response = await axios(config)
            .catch(function (error) {
                console.log(error);
                alert("Oops, something went wrong! Please try again.")
            });

        return response.data;
    }

    const sendJobUpdate = async () => {
        const session = await getSession().then(async (session) => {
            const cvs = await getCVs().then((cvs) => {
                console.log(cvs);
                // Dynamically create the data object
                let candidates = cvs.map(cvPath => {
                    return {
                        "user_id": session.idToken.payload.email,
                        "attached_cv": 'https://2etnadonz2.execute-api.eu-west-1.amazonaws.com/prod/cv-upload/' + cvPath
                    };
                });
                console.log(job);
                let data = {
                    "job_id": job.job_id,
                    "candidates": candidates
                };
                console.log(data)
                // updateJobPostings(data)
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
