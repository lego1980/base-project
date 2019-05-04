// core
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

// actions
import { ROUTE_ACTIONS } from '../../../redux/actions/route/RoutesActions';

// css
import stylesView from '../../../styles/global/globalView.module.scss';
import stylesForms from '../../../styles/global/globalForm.module.scss';
import styles from './ParallaxView.2.module.scss';

export class ParallaxView extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // if (nextProps.users.fetched && !nextProps.users.fetching) {      
    // }
    return true;
  }
  
  render() {

    return (
      <main>
        <div className={"parallax-view " + stylesView['page'] + " " + stylesView['view']}>
          <div className={styles['section'] + ' ' + styles['bgimg-1']}>
            <div className={styles['box']}>
              <div className={styles['inner-box']}>
                <h1>Parallax Demo</h1>
                <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis.</p>
              </div>
            </div> 
          </div>          

          <div className={styles['show-box']}>
            <div className={styles['caption']}>
              <span className={styles['border']}>
                <Link to="/login/" className={stylesForms['link-button']}>LOG IN</Link>
              </span>
            </div>
          </div>
          
          <div className={styles['section'] + ' ' + styles['bgimg-2']}>
            <div className={styles['box']}>
              <div className={styles['inner-box']}>
                <h2>Parallax Demo</h2>
                <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling.</p>
              </div>
            </div> 
          </div>

          <div className={styles['section'] + ' ' + styles['bgimg-3']}>
            <div className={styles['box']}>
              <div className={styles['inner-box']}>              
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
