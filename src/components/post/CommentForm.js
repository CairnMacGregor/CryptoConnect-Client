import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {addComment} from '../../actions/post'


const CommentForm = ({postId, addComment}) => {
    const [text, setText] = useState('');
    return (
        <div>
            <div>
                <h3>Leave a comment</h3>
            </div>
            <form onSubmit ={e => {
                e.preventDefault();
                addComment(postId, {text});
                setText('');
            }}>
            <textarea className = "CommentFormTextArea" name="text" id="" cols="30" rows="10" value ={text} onChange = {e=> setText(e.target.value)}></textarea>
            <input type="submit" className ="CommentFormSubmit" value ="Comment" />
            </form>
        </div>
    )
}

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
}

export default connect(null, {addComment})(CommentForm)
