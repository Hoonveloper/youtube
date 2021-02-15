import React from 'react'
import './VideoRow.css'
function VideoRow({views, subs,description, timestamp,channel,title,image}) {
    return (
        <div className="videoRow">
            <img src={image}></img>
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">
                {channel} · 
                <span className="videoRow__subs">
                구독자
                    <span className="videoRow__subsNumber"> {subs}</span>
                </span>{" "}
                · 조회수 {views}  · {timestamp}</p>
                <p className="videiRow__description">{description}</p>

            </div>
        </div>
    )
}

export default VideoRow