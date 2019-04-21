// core
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";

// transition group plugin
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// css
import './BaseApp.css';
import '../../styles/pageSlider/pageSlider.css';
import '../../styles/keyframes/slideY.css';

// mudules - components
import HeaderModule from '../../modules/header/HeaderModule';

// views - components
import HomeView from '../../views/home/HomeView';
import SignUpView from '../../views/signup/SignUpView';
import LogInView from '../../views/login/LogInView';
import AccountView from '../../views/account/AccountView';
import AboutView from '../../views/about/AboutView';
import ContactView from '../../views/contact/ContactView';
import ErrorView from '../../views/error/ErrorView';

// actions
import { ROUTE_ACTIONS } from '../../../redux/actions/route/RouteActions';
import { USERS_ACTIONS } from'../../../redux/actions/users/UsersActions';

export class BaseApp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    //let setRouteOptions = {type:"SET_ROUTE", location: this.props.location};  
    //this.props.setLocationRoute(setRouteOptions);

    let usersOptions = {page:1};  
    this.props.getUsers(usersOptions);     
  } 

  render() {
    return (
      <Router> 
        <div>
          <HeaderModule/>
          <Route render={(props) => (
              <TransitionGroup className="wrapper">
                <CSSTransition
                  key={props.location.key}
                  timeout={450}
                  classNames={"pageSlider"}
                >
                  <Switch location={props.location}>
                    <Route
                      path='/'
                      render={(props) => <HomeView {...props} />}
                    />
                    <Route
                      path='/signup/'
                      render={(props) => <SignUpView {...props} />}
                    />
                    <Route
                      path='/login/'
                      render={(props) => <LogInView {...props} />}
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
          )} /> 
        </div>
      </Router> 
    )    
  }
}

const mapStateToProps = (state) => {
  return {
    route: state.route,
    users: state.users
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setLocationRoute: (options) => { 
      ROUTE_ACTIONS(dispatch).setLocationRoute(options);   
    },
    getUsers: (options) => { 
      USERS_ACTIONS(dispatch).getUsers(options);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BaseApp);