// core
import React from 'react';
import { connect } from "react-redux";

// actions
import { ROUTE_ACTIONS } from '../../../redux/actions/route/RoutesActions';

// components
// import BarLoader from '../../loaders/BarLoader';
// import BarsLoader from '../../loaders/BarsLoader';

// css
import '../../../styles/global/globalView.css';
import './ParallaxView.css';

export class ParallaxView extends React.Component {
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
        {/* <BarLoader done={(complete) ? "done" : ""} />  */}
        <div className={"page view parallax-view"}>         
          {/* <BarsLoader done={(complete) ? "done" : ""} />       */}

          <div className={"bgimg-1"}>
            <div className={"caption"}>
            </div>
          </div>

          <div className={"box1"}>
            <div className={"inner-box"}>
              <h3>Parallax Demo</h3>
              <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
            </div>
          </div>

          <div className={"bgimg-2"}>
            <div className={"caption"}>
            </div>
          </div>

          <div className={"box2"}>
            <div className={"inner-box"}>
              <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
            </div>
          </div>

          <div className={"bgimg-3"}>
            <div className={"caption"}>
            </div>
          </div>

          <div className={"box3"}>
            <div className={"inner-box"}>
              <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
            </div>
          </div>

          <div className={"bgimg-1"}>
            <div className={"caption"}>
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
