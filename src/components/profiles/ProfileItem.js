import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProfileItem = ({
    profile: {
    user: { _id, name, avatar},
    handle,
    status,
    company,
    location,
    skills,
    followers,
    following,
    profilePicture
}}) => {
    return (
        <div className ="ProfileItemContainer">
            <div className ="ProfileItem">
            <Link to ={`/profile/${_id}`}><img className = "ProfileItemImage" src={profilePicture} alt=""/></Link>
            <div className ="ProfileItemInfo">
                <h2>{handle}</h2>
                <h5>@{name}</h5>
                <p>{status} {company && <span> at {company}</span>}</p>
                <p>{location && <span><i class="fas fa-map-marker-alt"></i> {location}</span>}</p>
                <div className ="ProfileItemInfoFollow">
                <p className ="ProfileInfoFollowData">{followers.length} followers</p>
                <p className ="ProfileInfoFollowData">{following.length} following</p>
                </div>
            </div>
            </div>
            <h4>Coins</h4>
            <ul className ="ProfileCoins">
                {skills.slice(0, 4).map((skill, index) => (
                    <li key ={index}> | {skill} |</li>
                ))}
            </ul>
        </div>
    )
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default ProfileItem
