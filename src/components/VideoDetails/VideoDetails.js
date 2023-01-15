import './VideoDetails.scss'
import {Navigate,useParams } from 'react-router-dom'
import Details from '../../data/video-details.json'

import React from 'react'

export default function VideoDetails() {

    const {vidDetails} = useParams();

    const video = Details.find((p)=> p.id ===vidDetails)
    if (!video) {
        return <Navigate to="/" />;
      }

  return (
    <div>
      
    </div>
  )
}
