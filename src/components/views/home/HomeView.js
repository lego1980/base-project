import React, { Component } from 'react';
import { connect } from "react-redux";

//actions
import { ROUTE_ACTIONS } from '../../../redux/actions/route/RouteActions';
import { USERS_ACTIONS } from'../../../redux/actions/users/UsersActions';

import styles from './HomeView.css';

export class HomeView extends Component {
  componentWillMount() {
    console.log("route HomeView",this.props.route);
    console.log("route HomeView",this.props.users);

    let routeOptions = {type:"ROUTE_DEFAULT",route:"/"};  
    //this.props.setLocationRoute(routeOptions);

    let usersOptions = {page:2};  
    //this.props.getUsers(usersOptions);      
  }

  render() {
    return (
      <div className={"HomeView animate-left"}>
        HOME VIEW
      </div>
    );
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

export default connect(mapStateToProps,mapDispatchToProps)(HomeView);