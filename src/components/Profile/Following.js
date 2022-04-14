import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import {getFollowingById} from '../../actions/follow'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Following = ({match, getFollowingById, follow: { following} }) => {
    console.log(following)
    useEffect(()=>{
        getFollowingById(match.params.id)
    },[getFollowingById, match.params.id]);
    return (
        <Fragment>
            
            {
                following.map((follow, index) =>(
                    <div key = {index}> 
                    <img src={follow.profile.profilePicture} alt=""/>
                        <p>{follow.profile.handle} @<small>{follow.name}</small></p>
                        <p>{follow.from}</p>
                       <p>{follow.profile.followers.length} followers</p>
                        <p>{follow.profile.following.length} following</p>
                        <Link to ={`/profile/${follow.user}`} target ="_blank">View Profile</Link>
                    </div>
                ))
            }
           
           

        </Fragment>
    )
}

Following.propTypes = {
    follow: PropTypes.object.isRequired,
}

const mapPropsToState = state =>({
    follow: state.follow
})

export default connect(mapPropsToState, {getFollowingById})(Following)
