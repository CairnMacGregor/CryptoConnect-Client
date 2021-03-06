import React, { Fragment, useState} from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { setAlert } from '../../actions/alert'
import { register } from '../../actions/auth'
import PropTypes from 'prop-types'


const Register = ({ setAlert, register, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        name:'',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = async e =>{
        e.preventDefault();
        if(password !== password2){
           setAlert('Passwords must match', 'danger')
        } else{
           register( {name, email, password} );
        }
    }

    if(isAuthenticated){
      return <Redirect to = "/dashboard"/>
    }


    return (
        <Fragment>
          <div className ="login-box">
           <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit = {e => onSubmit(e)}>


                <div className="form-group user-box">
                  <input 
                  type="text" 
                  name="name" 
                  value = {name}
                  onChange = { e => onChange(e)}
                  placeholder ="Name"
                  required
                  />
                    <label>This will be your account name. You cannot change this later.</label>
                </div>
                <div className = "form-group user-box">
                  <input 
                  type="email" 
                  name="email" 
                  value = {email}
                  onChange = { e => onChange(e)}
                  placeholder ="Email"
                  required
                  />
                  <label>Email</label>
                </div>
                <div className="form-group user-box">
                  <input
                    type="password"
                    placeholder ="Password"
                    name="password"
                    minLength="6"
                    value = {password}
                  onChange = { e => onChange(e)}
                  required
                  />
                  <label>Password</label>
                </div>
                <div className="form-group user-box">
                  <input
                    placeholder ="Confirm password"
                    type="password"
                    name="password2"
                    minLength="6"
                    value = {password2}
                    onChange = { e => onChange(e)}
                    required
                  />
                  <label>Confirm Password</label>
                </div>
                <button className="borderman btn-border">Register</button>
              </form>
              <p className="my-1">
                Already have an account? <Link to="/login">Sign In</Link>
              </p>
              </div>
        </Fragment>
    );
};
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, { setAlert, register })(Register)