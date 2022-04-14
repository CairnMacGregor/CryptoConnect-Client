import React, {Fragment, useEffect} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getProfileById } from '../../actions/profile'
import ProfileTop from './ProfileTop'
import ProfileAbout from './ProfileAbout'
import ProfileExperience from './ProfileExperience'
import ProfileEducation from './ProfileEducation'
const Profile = ({ match, getProfileById, profile: {profile, loading}, auth}) => {
    useEffect(() => {
        getProfileById(match.params.id);
    },[getProfileById, match.params.id]);
    return (
        <Fragment>
{   profile === null || loading ? <Spinner/> : 
    <Fragment>
        <Link to = '/profiles' className = " BackLink">Back to Users</Link>
        {auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id && (<Link to = '/edit-profile'>Edit your Profile</Link>)}

    <div>
        <ProfileTop profile = {profile} auth = {auth} ></ProfileTop>
        <ProfileAbout profile = {profile}></ProfileAbout>
        <div className="profile-exp">
            <h2>Experience</h2>
            { profile.experience.length > 0 ? (
                <>
                    {profile.experience.map(experience => (
                        <ProfileExperience key = {experience.id} experience = {experience}/>
                    ))}
                </>
            ): ( <h4>No Experience</h4>)}

        </div>

        <div className="profile-edu">
            <h2>Education</h2>
            { profile.education.length > 0 ? (
                <>
                    {profile.education.map(education => (
                        <ProfileEducation key = {education.id} education = {education}/>
                    ))}
                </>
            ): ( <h4>No Education</h4>)}

        </div>
    </div>
    </Fragment>}
        </Fragment>
    )
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});
export default connect(mapStateToProps, {getProfileById})(Profile)
