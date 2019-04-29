// core
import React from 'react';
import { connect } from "react-redux";

// actions
import { ROUTE_ACTIONS } from '../../../redux/actions/route/RoutesActions';
import { USERS_ACTIONS } from'../../../redux/actions/users/UsersActions';

// components
import ListDropDown from '../../../components/dropdowns/ListDropDown';
import BarLoader from '../../../components/loaders/BarLoader';
import BarsLoader from '../../../components/loaders/BarsLoader';

// static data
import { GenderDropDown } from '../../../data/lists/FormData';

// css
import '../../styles/global/globalView.css';
import '../../styles/global/globalForm.css';
import './AccountView.css';

export class AccountView extends React.Component {
  render() {
    let props = this.props;
    let complete = (props.users.fetched && !props.users.fetching) ? true : false;

    return (
      <div>
        <BarLoader done={(complete) ? "done" : ""} /> 
        <div className={"page view account-view"}>         
          <BarsLoader done={(complete) ? "done" : ""} /> 
          <form className={"form"}>
            <h1>Account Information</h1>
            <input type="text" name="username" placeholder="username" required />
            <input type="email" name="email" placeholder="email" />
            <input type="text" name="firstname" placeholder="first name" />
            <input type="text" name="lastname" placeholder="last name" />
            <input type="text" name="age" placeholder="age" />
            <input type="password" name="password" placeholder="password" required />
            <input type="password" name="confirmPassword" placeholder="confirm password" required />
            <ListDropDown name={"gender"} data={GenderDropDown} placeholder="select gender" />
            <input type="submit" value="UPDATE" />
          </form>
        </div>
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
    ...ROUTE_ACTIONS(dispatch), 
    ...USERS_ACTIONS(dispatch) 
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AccountView);