import React from 'react'
import { useLoaderData } from 'react-router-dom'


const JobDetails = () => {
    const JobDetails = useLoaderData()
  return (
    <div className='job-details'>
        <p><b>job title:</b>{JobDetails.title} </p>
        <p><b>salary:</b>{JobDetails.salary} </p>
        <p><b>location:</b>{JobDetails.location} </p>
        <p><b>description:</b>dasdasdsafdsdkjoiss jdaskdjsaoidjsadsoda</p>
        <button>apply now</button>
    </div>
  )
}

export default JobDetails

export const JobDetailsLoader = async ({params}) => {
    const {id} = params
    const res = await fetch("http://localhost:5000/jobs/" + id)
    return res.json()
}
