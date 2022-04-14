import React from 'react'
import { Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const Landing = ({ isAuthenticated }) => {
    if(isAuthenticated){
       return  <Redirect to = "/dashboard" />
    }
    return (
        <section>
            <div className = "darkOverlay">
                <div className="landingInner">
                    <h1> CryptoConnect</h1>
                    <p className ="lead">
                        Share your ideas for the cryptocurrency space, learn from others, and connect based on your favourite coins
                    </p>
                    <div className = "buttons">
                        <Link to ="/register">Sign Up</Link>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </section>
    )
};
Landing.propTypes = {
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps)(Landing)