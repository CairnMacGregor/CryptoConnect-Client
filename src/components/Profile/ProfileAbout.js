import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

const ProfileAbout = ({ profile: { 
    bio,
    skills,
    user:{ name }
}}) => {
    return (
        <Fragment>
            {bio && (
                <h3 className ="ProfileAboutBio">{bio}</h3>
            )}
            {
                skills.map((skill, index) =>(
                    <div key = {index} className ="ProfileAboutCoin"> <i className="fab fa-bitcoin"></i> {skill}</div>   
                ))
            }
            
        </Fragment>
    )
}

ProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default ProfileAbout
