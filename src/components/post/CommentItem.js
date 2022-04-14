import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { connect} from 'react-redux'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { deleteComment} from '../../actions/post'
const CommentItem = ({
    postId,
    comment: {_id, text, name, user, date, profilePicture, profileHandle},
    auth,
    deleteComment

}) => {
    return (
        <Fragment >
            <div className = "CommentItem">
            <div className = "CommentItemLinkDiv">
                <Link to = {`/profile/${user}`} className = "CommentItemLink">
                    <img src = {profilePicture} alt="Profile" className ="CommentItemImage"/>
                    <h4>{profileHandle}</h4>
                    
                </Link>
                <p className = "CommentItemText">{text}</p>
            </div>
           
            <div className = "CommentItemInfo"> 
                <p><Moment format = 'DD/MMM/YYYY'>{date}</Moment></p>
                {!auth.loading && user === auth.user._id && (
                    <p onClick = {e => deleteComment(postId, _id)} ><i  className="far fa-trash-alt deleteButton"></i></p>
                )}
                </div>   
                    <hr></hr>
                    </div>
        </Fragment>
        
    )
}

CommentItem.propTypes = {
    postId: PropTypes.string.isRequired,
    comment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
}

const mapStateToProps = state =>({
    auth: state.auth
})


export default connect(mapStateToProps, {deleteComment })(CommentItem)
