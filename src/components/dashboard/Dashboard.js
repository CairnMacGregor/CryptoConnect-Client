import React, { Fragment, useEffect} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteAccount, getCurrentProfile } from '../../actions/profile'
import Spinner from '../layout/Spinner'
import DashboardActions from './DashboardActions'
import Experience from './Experience'
import Education from './Education'

const Dashboard = ({ getCurrentProfile, auth: {user}, profile: { profile, loading}, deleteAccount}) => {
    useEffect(() =>{
        getCurrentProfile();
    }, [getCurrentProfile]);
    return  loading && profile === null ? <Spinner /> : 
    <Fragment>
        <h1>
            Dashboard
        </h1>
        
        {profile !== null ? (
        <Fragment>
            <p>
            <i className="fas fa-user"></i> {user && profile.handle} <small>{user && "@"+ user.name} </small>
        </p>
            <DashboardActions></DashboardActions>
            <Experience experience = { profile.experience} />
            <Education education = { profile.education}/>

            <div>
                <button onClick ={() => deleteAccount()}>  <i className="fas fa-user-minus"></i>  Delete Account</button>
            </div>
            </Fragment>) : (
        <Fragment>
            <p>You have not set up a profile, please add some info</p>
            <Link to ='/create-profile' className ="btn"> Create a profile</Link>
            </Fragment>)}

    </Fragment>
        
    
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})


export default connect(mapStateToProps, { getCurrentProfile, deleteAccount})(Dashboard)
