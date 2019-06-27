// core
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// actions
import { ROUTE_ACTIONS } from '../../../redux/actions/route/RoutesActions';
import { USERS_ACTIONS } from'../../../redux/actions/users/UsersActions';

// components
import BarLoader from '../../loaders/BarLoader';
import BarsOverlayLoader from '../../loaders/BarsOverlayLoader';

// css
import stylesViews from '../../../styles/global/globalView.module.scss';
import styles from './PeopleView.module.scss';

export class PeopleView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        pageLoading: false
    }
  }
  
  componentDidUpdate() {
    console.log("this.props",this.props.users);


    //this.state.USERS_ACTIONS('GET_USERS_FULFILLED');
    window.scrollTo(0,0);
  }
  
  render() {
    // let props = this.props;
    // let complete = (props.users.fetched && !props.users.fetching) ? true : false;
    let pageLoading = this.props.users.fetched;
    


    // if (error) {
    //   return <div>Error! {error.message}</div>;
    // }

    // if (loading) {
    //   return <div>Loading...</div>;
    // }

    return (
        <main className={stylesViews["page"] + " " + stylesViews["view"] + " " + styles["items-view"]}>  
          <BarLoader done={(pageLoading) ? "" : "done"} />  
          <BarsOverlayLoader done={(pageLoading) ? "" : "done"} /> 
          <h1>Items</h1>   
          <div className={styles["items-wrapper"]}>   

            { 
                // users.map((user, index) => {
                //     return (
                //         <div key={index} className={styles["item-wrapper"]}>   
                //             <div className={styles["item-image-wrapper"]}>
                //                 <img src={user.avatar} alt={user.first_name} title={user.last_name} className={styles["item-image"]} />
                //             </div>        
                //             <p><strong className={styles["item-label"]}>Name</strong>{user.first_name} {user.last_name}</p>
                //             <p><strong className={styles["item-label"]}>Email</strong>{user.email}</p>
                //             <Link to={"/person/"+index}>Go Now!!!</Link>
                //         </div>
                //     )
                // }) 
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

export default connect(mapStateToProps,mapDispatchToProps)(PeopleView);