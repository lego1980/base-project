// core
import React from 'react';
import { connect } from "react-redux";

// actions
import { ROUTE_ACTIONS } from '../../../redux/actions/route/RoutesActions';
//import { USERS_ACTIONS } from'../../../redux/actions/users/UsersActions';

// components
import BarLoader from '../../../components/loaders/BarLoader';
import BarsLoader from '../../../components/loaders/BarsLoader';

// css
import '../../../styles/global/globalView.css';
import './HomeView.css';

export class HomeView extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate",nextProps,nextState);
    // if (nextProps.users.fetched && !nextProps.users.fetching) {      
    // }
    return true;
  }
  
  render() {
    //let props = this.props;
    let complete = false; // (props.users.fetched && !props.users.fetching) ? true : false;

    return (
      <main>
        <BarLoader done={(complete) ? "done" : ""} /> 
        <div className={"page view home-view"}>          
          <h1>HOME VIEW</h1>
          <BarsLoader done={(complete) ? "done" : ""} /> 
          {/* {             
            complete === true
            ?
              props.users.users.data.map((user, index) => {
                return <section key={index} className={"item"}>{user.first_name}</section>;
              })
            : 
              null
          } */}
        </div>
      </main>
    )  
  }
}

const mapStateToProps = (state) => {
  return {
    route: state.route
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    ...ROUTE_ACTIONS(dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeView);
