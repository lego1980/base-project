// core
import React from 'react';
import { connect } from "react-redux";

// actions
import { ROUTE_ACTIONS } from '../../../redux/actions/route/RoutesActions';

// components
import BarLoader from "../../loaders/BarLoader";

// css
import stylesViews from "../../../styles/global/globalView.module.scss";
import styles from './FaqView.module.scss';

export class FaqView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      submitProgress: true,
    };
  }

  componentDidMount() {
    let that = this;
    setTimeout(function() {
      that.setState({ submitProgress: false });
    }, 2000);    
  }
  
  render() {
    let submitProgress = this.state.submitProgress;
    return (
      <main className={stylesViews["page"] + " " + stylesViews["view"] + " " + styles["faq-view"]}>  
        <BarLoader done={(submitProgress) ? "" : "done"} />  
        <div className={stylesViews["content"]}>
          <h1>FAQ</h1>
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

export default connect(mapStateToProps,mapDispatchToProps)(FaqView);