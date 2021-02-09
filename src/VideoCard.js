import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './VideoCard.css';
function VideoCard({image, title, channel, views,timestamp,channel_img}) {
    return (
        <div className="videoCard">
            <img src={image} className="videoCard__thumbnail"/>
            <div className="videoCard__info">
                <Avatar classname="videoCard__avatar"
                    alt={channel}
                    src={channel_img}
                />
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p className="channel__name">{channel}</p>
                    <p className="views__time">{views} · {timestamp} </p>
                </div>


            </div>
            
        </div>
    )
}

export default VideoCard;
/* 
props 대신에 function VideoCard({image, title, channel, views})
이렇게 받는 이유 
1. props로 받으면 나중에 쓸 때 props.image, props.title등 이렇게 받아야 하는데 코드가 길어질 수 있음
2. const {image,title,channel ...}=props 이렇게 변수로 받아도 되긴 함
3. 비교적 깔끔하게 할 수 있고 이게 es6에서 하는 방법

*/