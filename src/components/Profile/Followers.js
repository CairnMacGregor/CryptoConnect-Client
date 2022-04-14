import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import {getFollowersById} from '../../actions/follow'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Followers = ({match, getFollowersById, follow: { followers} }) => {
    console.log(followers)
    useEffect(()=>{
        getFollowersById(match.params.id)
    },[getFollowersById, match.params.id]);
    return (
        <Fragment>
            
            {
                followers.map((follower, index) =>(
                    <div key = {index}> 
                    <img src={follower.profile.profilePicture} alt=""/>
                        <p>{follower.profile.handle} @<small>{follower.name}</small></p>
                        <p>{follower.from}</p>
                        <p>{follower.profile.followers.length} followers</p>
                        <p>{follower.profile.following.length} following</p>
                        <Link to ={`/profile/${follower.user}`} target ="_blank">View Profile</Link>
                    </div>
                ))
            }
           
           

        </Fragment>
    )
}

Followers.propTypes = {
    follow: PropTypes.object.isRequired,
}

const mapPropsToState = state =>({
    follow: state.follow
})

export default connect(mapPropsToState, {getFollowersById})(Followers)
