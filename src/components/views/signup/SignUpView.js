// core
import React from 'react';
import { connect } from "react-redux";

// actions
import { ROUTE_ACTIONS } from '../../../redux/actions/route/RoutesActions';

// css
import '../../styles/global/globalView.css';
import '../../styles/global/globalForm.css';
import  './SignUpView.css';

export class SignUpView extends React.Component {  
  render() {
    return (
      <main className={"page view sign-up-view"}>
        <h1>SIGN UP VIEW</h1>
        <form noValidate>
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <input type="submit" value="LOG IN" />
          <input type="reset" value="CLEAR" />
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

export default connect(mapStateToProps,mapDispatchToProps)(SignUpView);