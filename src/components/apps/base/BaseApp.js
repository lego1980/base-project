// core
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";

// transition group plugin
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Utils
import { GET_LOCATION_PATH_NAME } from '../../utils/LocationUtils';

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
    this.state = {
      prevPathName: GET_LOCATION_PATH_NAME(this.props.location),
      prevFlow: "right"
    };
  }

  componentWillMount() {    
    let setRouteOptions = {type:"SET_ROUTE", location: this.props.location};  
    this.props.setLocationRoute(setRouteOptions);

    let usersOptions = {page:1};  
    this.props.getUsers(usersOptions);     
  } 

  getFlow(currentLocation) {
    let that = this;    
    let flow = "right";
    let prevFlow = that.state.prevFlow;  
   
    if (prevFlow == "left") {
      flow = "right";
    } else {
      flow = "left";
    } 

    // let setPreviousLocationRouteOptions = {type: SET_PREVIOUS_LOCATION_ROUTE, previousPathName: GET_LOCATION_PATH_NAME(this.props.location)};  
    // this.props.setPreviousLocationRoute(setPreviousLocationRouteOptions);

    // let setFlowRouteOptions = {type: SET_FLOW_ROUTE, flowRoute: flow};  
    // this.props.setFlowRoute(setFlowRouteOptions);

    that.state.prevPathName = currentLocation;
    that.state.prevFlow = flow;

    return flow;
  }

  render() {
    return (
      <Router> 
        <div>
          <HeaderModule/>
          <Route render={({location}) => (
              <TransitionGroup className="wrapper">
                <CSSTransition
                  key={location}
                  timeout={450}
                  classNames={"pageSlider"}
                >
                  <div className={ this.getFlow(location.pathname) }>
                    <Switch location={location}>
                      <Route exact path="/" component={HomeView}></Route>
                      <Route exact path="/signup/" component={SignUpView}></Route>
                      <Route exact path="/login/" component={LogInView}></Route>
                    </Switch>
                  </div>
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