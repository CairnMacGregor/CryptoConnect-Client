import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Moment from 'react-moment'
import {connect} from 'react-redux'
import { addLike, deletePost, removeLike } from '../../actions/post'


const PostItem = ({deletePost, addLike, removeLike, auth, post: { _id, text, name, user, likes, comments, date, profileHandle, profilePicture}, showActions}) => {
    let found = false
     if(auth.loading === false && auth.user._id !== _id){
        for(var i = 0; i < likes.length; i++) {
            if (likes[i].user === auth.user._id) {
                found = true;
                break;
            }
            
        }
        
     } 
    return (
        <Fragment>
            <div className = "PostItem">
            <div className = "PostItemTop">
                <Link to = {`/profile/${user}`}><img src={profilePicture} alt ="Users profile" className = "PostItemImage"/></Link>
                <div className = "PostTopInfo">
                <h4>{profileHandle} <small>@{name}</small></h4>
                {!auth.loading && user === auth.user._id && showActions && (
            <p onClick = {e => deletePost(_id)}> <i className="far fa-trash-alt deleteButton"></i></p>
            )}  
            <p>Posted on: <Moment format = 'DD/MMM/YYYY'>{date}</Moment> at  <Moment format = 'HH:mm'>{date}</Moment></p>
            </div>
            
            </div>  
            
            <div>
            <p className = "PostText">{text}</p>
          
        


        {showActions && <div className = "actionsDiv">

        { auth.loading === false && auth.user._id !== _id && ( 
                <Fragment>
                    
                    {found === true ? (<i className="far fa-thumbs-up" onClick = {e => removeLike(_id)}></i> ) : (<i className="fas fa-thumbs-up" onClick = {e => addLike(_id)}></i>)  }{likes.length > 0 && (
            <span>{likes.length}</span>
        )}
                    {/* <button onClick = {e => FollowById(_id)}>Follow</button>
                    <button onClick = {e => UnfollowById(_id)}>Unfollow</button> */}
                </Fragment>         
                )}

            
        <Link to = {`/posts/${_id}`}> <i className="far fa-comment"></i>
        {comments.length > 0 && (
            <span> {comments.length}</span>
        )}
        </Link>
        
        
        
        </div>}
      
                </div>
        
        </div>
        </Fragment>
    )
}


PostItem.defaultProps = {
    showActions: true
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps, {addLike, removeLike, deletePost})(PostItem)
