// core
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// actions
import { ROUTE_ACTIONS } from '../../../redux/actions/route/RoutesActions';
import { USERS_ACTIONS } from'../../../redux/actions/users/UsersActions';

// static data
import { ItemsData } from '../../../data/ItemsData';

// components
import BarLoader from '../../loaders/BarLoader';
import BarsOverlayLoader from '../../loaders/BarsOverlayLoader';

// css
import stylesViews from '../../../styles/global/globalView.module.scss';
import styles from './ItemsView.module.scss';

export class ItemsView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        pageLoading: false
    }
  }
  
  componentDidUpdate() {
    window.scrollTo(0,0);
  }
  
  render() {
    // let props = this.props;
    // let complete = (props.users.fetched && !props.users.fetching) ? true : false;
    let pageLoading = this.state.pageLoading;
    return (
        <main className={stylesViews["page"] + " " + stylesViews["view"] + " " + styles["items-view"]}>  
          <BarLoader done={(pageLoading) ? "" : "done"} />  
          <BarsOverlayLoader done={(pageLoading) ? "" : "done"} /> 
          <h1>Items</h1>   
          <div className={styles["items-wrapper"]}>   

            { 
                ItemsData.map((item, index) => {
                    return (
                        <div key={index} className={styles["item-wrapper"]}>   
                            <div className={styles["item-image-wrapper"]}>
                                <img src={item.image} alt={item.imageAlt} title={item.imageTitle} className={styles["item-image"]} />
                            </div>        
                            <p><strong className={styles["item-label"]}>Name</strong>{item.name}</p>
                            <p><strong className={styles["item-label"]}>Price</strong>{item.price}</p>
                            <p><strong className={styles["item-label"]}>Description</strong>{item.description}</p>
                            <Link to={item.href}>Go Now!!!</Link>
                        </div>
                    )
                }) 
            } 
              
          </div>  
        </main> 
    )
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

export default connect(mapStateToProps,mapDispatchToProps)(ItemsView);