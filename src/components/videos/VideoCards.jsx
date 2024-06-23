import React from 'react'
import { Link } from 'react-router-dom'

const VideoCards = ({videos}) => {
  return (
    <>
        {videos.map((video,index)=>(
            <div className='video' key={index}>
                <div className="video__thumb play__icon">
                    <Link to={video.img} alt={videos.title}>
                        <img src={video.img} alt={videos.title} />
                    </Link>
                </div>
            </div>
        ))}
    </>
  )
}

export default VideoCards