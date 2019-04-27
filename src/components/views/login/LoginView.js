// core
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

// actions
import { ROUTE_ACTIONS } from '../../../redux/actions/route/RoutesActions';

// css
import '../../styles/global/globalView.css';
import '../../styles/global/globalForm.css';
import './LogInView.css';

export class LogInView extends React.Component {
  render() {
    return (
      <main className={"page view log-in-view"}>
        <h1>LOG IN VIEW</h1>
        <form>
          <input type="text" name="username" placeholder="username" required />
          <input type="password" name="password" placeholder="password" required />
          <input type="submit" value="LOG IN" />
          <input type="reset" value="CLEAR" />
          <Link to="/register/" className="">REGISTER</Link>
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

export default connect(mapStateToProps,mapDispatchToProps)(LogInView);