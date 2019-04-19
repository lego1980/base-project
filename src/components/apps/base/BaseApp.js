// core
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";

// transition group plugin
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// css
import './BaseApp.css';
import '../../styles/pageSlider/pageSlider.css';

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

// routes
const routes = [
  { path: '/', name: 'About', Component: HomeView },
  { path: '/login', name: 'LogIn', Component: LogInView },
  { path: '/signup', name: 'SignUp', Component: SignUpView },
  { path: '/account', name: 'Account', Component: AccountView },
  { path: '/about', name: 'About', Component: AboutView },
  { path: '/contanct', name: 'Contact', Component: ContactView },
  { path: '/contact', name: 'Error', Component: ErrorView },
]

export class BaseApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // prevDepth: this.getPathDepth(this.props.location)
      prevPathName: this.getPathName(this.props.location),
      prevFlow: "right"
    };
  }

  componentWillMount() {  
    
    let getRouteOptions = {type:"GET_ROUTE"};  
    this.props.getLocationRoute(getRouteOptions);

    let setRouteOptions = {type:"SET_ROUTE",route:"/signup/"};  
    this.props.setLocationRoute(setRouteOptions);

    let usersOptions = {page:1};  
    this.props.getUsers(usersOptions);    
  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps",this.props.location);
    //When props are updated, update the current path 
    //props supplies us with the location object which has a router location info
    //this.setState({ prevDepth: this.getPathDepth(this.props.location) });
    this.setState({ prevPathName: this.getPathName(this.props.location) });
  }
  
  // getPathDepth(obj) {
  //   let pathArr = obj.pathname.split("/");
  //   pathArr = pathArr.filter(n => n !== "");    
  //   return pathArr.length;
  // }

  getPathName(obj) {    
    let location = obj;
    return location.pathname;
  }

  getFlow(currentLocation,previousLocation) {
    // console.log("currentLocation",currentLocation);
    // console.log("previousLocation",previousLocation);
    let that = this; 
    let flow = "right";
    let prevFlow = that.state.prevFlow;  
    // if (currentLocation != previousLocation) {
    //   if (prevFlow == "left") {    
    //     flow = "right";
    //   } else {    
    //     flow = "left";
    //   }
    // } else {   
    //   if (prevFlow == "left") {
    //     flow = "right";
    //   } else {
    //     flow = "left";
    //   }       
    // }

    if (prevFlow == "left") {
      flow = "right";
    } else {
      flow = "left";
    } 
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
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={450}
                  classNames={"pageSlider"}
                >
                  <div className={ this.getFlow(location.pathname,this.state.prevPathName) }>
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

  // render() { 
  //   return (


  //     <Router>        
  //       <div>
  //         <HeaderModule />
  //         <div className={
  //           this.getPathDepth(this.props.location) - this.state.prevDepth >= 0
  //             ? "container left"
  //             : "containerr right"
  //           }
  //         >
  //           {routes.map(({ path, Component }) => (
  //             <Route key={path} exact path={path}>
  //               {({ match }) => (
  //                 <CSSTransition
  //                   in={match != null}
  //                   timeout={300}
  //                   classNames="page"
  //                   unmountOnExit
  //                 >
  //                   <div className="page">
  //                     <Component />
  //                   </div>
  //                 </CSSTransition>
  //               )}
  //             </Route>
  //           ))}
  //         </div>
          
  //       </div>
  //     </Router>
  //   );
  // }
}

const mapStateToProps = (state) => {
  return {
    route: state.route,
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLocationRoute: (options) => { 
      ROUTE_ACTIONS(dispatch).getLocationRoute(options);   
    },
    setLocationRoute: (options) => { 
      ROUTE_ACTIONS(dispatch).setLocationRoute(options);   
    },
    getUsers: (options) => { 
      USERS_ACTIONS(dispatch).getUsers(options);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BaseApp);