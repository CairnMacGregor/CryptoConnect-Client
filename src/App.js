import React, { Fragment, useEffect } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar.js'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from './components/layout/Landing.js'
import Login from './components/auth/Login.js'
import Register from './components/auth/Register.js'
import { Provider } from 'react-redux'
import store from './store'
import Alert from './components/layout/Alert'
import { loadUser } from './actions/auth';
import  setAuthToken from './utils/setAuthToken'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './components/routing/PrivateRoute'
// import CreateProfile from './components/profile-forms/CreateProfile'
// import EditProfile from './components/profile-forms/EditProfile'
import ProfileForm from './components/profile-forms/ProfileForm'
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation'
import Profiles from './components/profiles/Profiles'
import Profile from './components/Profile/Profile'
import Posts from './components/posts/Posts'
import Post from './components/post/Post'
import Followers from './components/Profile/Followers'
import Following from './components/Profile/Following'
if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () =>  {
  useEffect(() =>{
    store.dispatch(loadUser());
  }, []);
   return(
  <Provider store = {store}>
  <Router>
    <Fragment>
      <Navbar/>
      <Route exact path='/' component = {Landing}/>
      <section className="container">
        <Alert/>
        <Switch>
          <Route exact path ='/register' component = {Register}/>
          <Route exact path ='/login' component = {Login}/>
          <PrivateRoute exact path ='/dashboard' component = {Dashboard}/>
          <PrivateRoute exact path ='/create-profile' component = {ProfileForm}/>
          <PrivateRoute exact path ='/edit-profile' component = {ProfileForm}/>
          <PrivateRoute exact path ='/add-experience' component = {AddExperience}/>
          <PrivateRoute exact path ='/add-education' component = {AddEducation}/>
          <PrivateRoute exact path ='/profiles' component = {Profiles}/>
          <PrivateRoute exact path ='/profile/:id' component = {Profile}/>
          <PrivateRoute exact path ='/profile/:id/followers' component = {Followers}/>
          <PrivateRoute exact path ='/profile/:id/following' component = {Following}/>
          <PrivateRoute exact path ='/posts' component = {Posts}/>
          <PrivateRoute exact path ='/posts/:id' component = {Post}/>
        </Switch>
      </section>
    </Fragment>
  </Router>
  </Provider>
)};

export default App;
