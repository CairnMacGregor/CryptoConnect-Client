import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const ProfileEducation = ({ education: {
    school,
    degree,
    fieldofstudy,
    current,
    to,
    from,
    description
}}) => {
    return (
        <div>
            <h3>{school}</h3>
            <p>
                <Moment format = 'DD/MM/YYYY'>{from}</Moment> - {!to ? ' Now' : <Moment format = 'DD/MM/YYYY'>{to}</Moment>}
            </p>
            <p> <strong>Degree: {degree}</strong></p>
            <p> <strong>Field of study: {fieldofstudy}</strong></p>
            <p> <strong>Description: {description}</strong></p>
            
        </div>
    )
}

ProfileEducation.propTypes = {
    education: PropTypes.array.isRequired,
}

export default ProfileEducation