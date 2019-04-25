// core
import React from 'react';
import { connect } from "react-redux";

// actions
import { ROUTE_ACTIONS } from '../../../redux/actions/route/RoutesActions';
import { USERS_ACTIONS } from'../../../redux/actions/users/UsersActions';

// components
import BarLoader from '../../../components/loaders/BarLoader';
import BarsLoader from '../../../components/loaders/BarsLoader';

// css
import '../../styles/views/globalView.css';
import './AccountView.css';

export class AccountView extends React.Component {
  render() {
    console.log("render",this.props);
    let props = this.props;
    let complete = (props.users.fetched && !props.users.fetching) ? true : false;

    return (
      <div>
        <BarLoader done={(complete) ? "done" : ""} /> 
        <div className={"page view account-view"}>
          ACCOUNT VIEW<br/>
          <BarsLoader done={(complete) ? "done" : ""} /> 
          {             
            complete === true
            ?
              props.users.users.data.map((user, index) => {
                return <section key={index} className={"item"}>{user.first_name}</section>;
              })
            : 
              null
          }
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