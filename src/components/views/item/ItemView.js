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
import styles from './ItemView.module.scss';

export class ItemView extends React.Component {

  constructor(props) {    
    super(props);
    this.state = {
      pageLoading: false,
      item : ItemsData.find((item) => item.id == this.props.match.params.id)
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
        <main className={stylesViews["page"] + " " + stylesViews["view"] + " " + styles["item-view"]}>  
            <BarLoader done={(pageLoading) ? "" : "done"} />  
            <BarsOverlayLoader done={(pageLoading) ? "" : "done"} /> 
            <h1>{this.state.item.name}</h1>   
            <div className={styles["item-wrapper"]}>   
                <div className={styles["item-image-wrapper"]}>
                    <img src={this.state.item.image} alt={this.state.item.imageAlt} title={this.state.item.imageTitle} className={styles["item-image"]} />
                </div>        
                <p><strong className={styles["item-label"]}>Name</strong>{this.state.item.name}</p>
                <p><strong className={styles["item-label"]}>Price</strong>{this.state.item.price}</p>
                <p><strong className={styles["item-label"]}>Description</strong>{this.state.item.description}</p>
                <Link to={this.state.item.href}>Go Now!!!</Link>
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

export default connect(mapStateToProps,mapDispatchToProps)(ItemView);