import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './ChannelRow.css';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
function ChannelRow( {image ,channel, verified , subs,noOfVidoes,description } ) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt={channel} src={image}
            />
            <div className="channelRow__text">
                <h4>{channel}{verified && <CheckCircleOutlineIcon/>}</h4>
                <p>{subs} subscribers · {noOfVidoes} videos</p>
                <p>{description}</p>
            </div>

        </div>
    )
}

export default ChannelRow
