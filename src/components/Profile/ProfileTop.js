import React, {Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FollowById, UnfollowById } from '../../actions/follow'
import {connect} from 'react-redux'



const ProfileTop = ({
    FollowById,
    UnfollowById,
    auth,
    profile: { 
    profilePicture,
    status,
    company,
    location,
    website,
    social,
    handle,
    followers,
    following,
    user:{
        _id,
        name,
    }
}}) => {
    let found = false
     if(auth.loading === false && auth.user._id !== _id){
        for(var i = 0; i < followers.length; i++) {
            if (followers[i].user === auth.user._id) {
                found = true;
                break;
            }
            
        }
        
     } 
        
    
    return (
        <div className ="ProfileTop">
            <img src= {profilePicture} alt="" className ="ProfileTopImage"/>
            <div className="ProfileTopInfo">
            <h1>{handle}</h1>
            <h4>@{name}</h4>
            <p> {status} {company && <span> at {company} </span>} </p>
            <p>{location && <span> {location}</span>}</p>
            
            <div className ="ProfileTopLinks">
            
            
                {
                    website && (
                        <a className ="ProfileTopLink" href = {website} target =  '_blank' rel = 'noopener noreferrer'> <i className="fas fa-globe"></i></a>
                    )
                }
                {social && social.twitter &&(
                    <a className ="ProfileTopLink" href = {social.twitter}> <i className="fab fa-twitter"></i></a>
                )}

                {social && social.facebook &&(
                    <a className ="ProfileTopLink" href = {social.facebook}> <i className="fab fa-facebook"></i></a>
                )}
                {social && social.youtube &&(
                    <a className ="ProfileTopLink" href = {social.youtube}> <i className="fab fa-youtube"></i></a>
                )}

                {social && social.linkedin &&(
                    <a className ="ProfileTopLink" href = {social.linkedin}> <i className="fab fa-linkedin"></i></a>
                )}

                {social && social.instagram &&(
                    <a className ="ProfileTopLink" href = {social.instagram}> <i className="fab fa-instagram"></i></a>
                )}
                
                <div>
                { auth.loading === false && auth.user._id !== _id && ( 
                <Fragment>
                    
                    {found === true ? ( <button onClick = {e => UnfollowById(_id)}>Unfollow</button>) : (<button onClick = {e => FollowById(_id)}>Follow</button>)}
                    {/* <button onClick = {e => FollowById(_id)}>Follow</button>
                    <button onClick = {e => UnfollowById(_id)}>Unfollow</button> */}
                </Fragment>         
                )}
                    
                
               
               

                <div className ="ProfileTopFollow">
                
                   <Link className = "ProfileTopFollowData" to ={`/profile/${_id}/followers`}><p>{followers.length} Followers</p></Link>
                   <Link className = "ProfileTopFollowData" to ={`/profile/${_id}/following`}><p>{following.length} Following</p></Link>
                   </div>
                </div>
                </div>
                
                


            </div>
        </div>
    )
}

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired,
    FollowById: PropTypes.func.isRequired,
    UnfollowById: PropTypes.func.isRequired,
}



export default connect(null, {FollowById, UnfollowById})(ProfileTop)
