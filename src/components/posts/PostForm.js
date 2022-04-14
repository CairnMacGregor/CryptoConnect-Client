import React, { useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addPost} from '../../actions/post'


const PostForm = ({addPost}) => {

    const [text, setText] = useState('');

    return (
        <div>
            <div>
                <h3>Say something</h3>
            </div>
            <form onSubmit ={e => {
                e.preventDefault();
                addPost({text});
                setText('');
            }}>
            <textarea className = "CommentFormTextArea" name="text" id="" cols="30" rows="10" value ={text} onChange = {e=> setText(e.target.value)}></textarea>
            <input type="submit" className ="CommentFormSubmit" value ="Post " />
            </form>
        </div>
    )
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired,
}

export default connect(null, {addPost})(PostForm)
