import React, { Component } from 'react';
//import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import { connect } from "react-redux";

//actions
import { ROUTE_ACTIONS } from '../../redux/actions/routeActions';
import { USERS_ACTIONS } from'../../redux/actions/usersActions';

import styles from './SignUpView.css';

export class SignUpView extends React.Component {
  componentWillMount() {
    console.log("route SignUpView",this.props.route);
    console.log("route SignUpView",this.props.users);
    
    let routeOptions = {type:"ROUTE_SIGN_UP",route:"/signup/"};  
    //this.props.setLocationRoute(routeOptions);

    let usersOptions = {page:1};  
    //this.props.getUsers(usersOptions);    
  }
  
  render() {
    return (
      <div className={"animate-left"}>
        SING UP VIEW
        {/* <Form>
          <FormGroup>
            <Label for="exampleEmail">Input without validation</Label>
            <Input />
            <FormFeedback>You will not be able to see this</FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Valid input</Label>
            <Input valid />
            <FormFeedback valid>Sweet! that name is available</FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Invalid input</Label>
            <Input invalid />
            <FormFeedback>Oh noes! that name is already taken</FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Input without validation</Label>
            <Input />
            <FormFeedback tooltip>You will not be able to see this</FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Valid input</Label>
            <Input valid />
            <FormFeedback valid tooltip>Sweet! that name is available</FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Invalid input</Label>
            <Input invalid />
            <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
        </Form> */}
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

export default connect(mapStateToProps,mapDispatchToProps)(SignUpView);
