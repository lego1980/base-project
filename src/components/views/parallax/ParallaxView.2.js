// core
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

// actions
import { ROUTE_ACTIONS } from '../../../redux/actions/route/RoutesActions';

// css
import stylesView from '../../../styles/global/globalView.module.scss';
import './ParallaxView.2.css';

export class ParallaxView extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // if (nextProps.users.fetched && !nextProps.users.fetching) {      
    // }
    return true;
  }
  
  render() {

    return (
      <main>
        <div className={"page parallax-view " + stylesView['view']}>
          <div className={"section bgimg-1"}>
            <div className={"box"}>
              <div className={"inner-box"}>
                <h1>Parallax Demo</h1>
                <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis.</p>
              </div>
            </div> 
          </div>          

          <div className={"show-box"}>
            <div className={"caption"}>
              <span className={"border"}>
                <Link to="/login/" className="link-button">LOG IN</Link>
              </span>
            </div>
          </div>
          
          <div  className={"section bgimg-2"}>
            <div className={"box"}>
              <div className={"inner-box"}>
                <h2>Parallax Demo</h2>
                <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling.</p>
              </div>
            </div> 
          </div>

          <div className={"section bgimg-3"}>
            <div className={"box"}>
              <div className={"inner-box"}>              
                <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling.</p>
              </div>
            </div> 
          </div>          

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

export default connect(mapStateToProps,mapDispatchToProps)(ParallaxView);
