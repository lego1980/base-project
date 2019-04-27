// core
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

// actions
import { ROUTE_ACTIONS } from '../../../redux/actions/route/RoutesActions';

// css
import '../../styles/global/globalView.css';
import '../../styles/global/globalForm.css';
import  './RegisterView.css';

export class RegisterView extends React.Component {  
  render() {
    return (
      <main className={"page view sign-up-view"}>
        
        <form className={"form"}>
          <h1>Create Account</h1>
          <input type="text" name="username" placeholder="username" required />
          <input type="password" name="password" placeholder="password" required />
          <input type="password" name="confirmPassword" placeholder="confirm password" required />
          <input type="submit" value="GET STARTED" />
          {/* <input type="reset" value="CLEAR" /> */}
          <Link to="/login/" className="link-button">LOG IN</Link>
        </form>
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

export default connect(mapStateToProps,mapDispatchToProps)(RegisterView);