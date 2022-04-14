import React, { Fragment, useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''     
    });

    const {  email, password,} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = async e =>{
        e.preventDefault();
            login(email, password)
    };
  

    if(isAuthenticated){
      return <Redirect to = "/dashboard"/>
    }
    
    return (
        <Fragment>
          <div className = "login-box">
           <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign Into Your Account</p>
      <form className="form" onSubmit = {e => onSubmit(e)}>

        <div className="form-group user-box">
          <input 
          type="email" 
          name="email" 
          value = {email}
          onChange = { e => onChange(e)}
          required
          />
        <label>Email</label>
        </div>
        <div className="form-group user-box">
          <input
            type="password"
            
            name="password"
            minLength="6"
            value = {password}
          onChange = { e => onChange(e)}
          required
          />
          <label>Password</label>
        </div>
       
        <button className="borderman btn-border">Sign in</button>
      </form>
      <p className="my-1">
       Dont have an account? <Link to="/register">Sign Up</Link>
      </p>
      </div>
        </Fragment>
    );
};

Login.propTypes ={
   login: PropTypes.func.isRequired,
   isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login)