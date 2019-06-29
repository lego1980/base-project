// core
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// actions
// import { ROUTE_ACTIONS } from '../../../redux/actions/route/RoutesActions';
// import { USERS_ACTIONS } from'../../../redux/actions/users/UsersActions';

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
        pageLoading: this.props.data.fetching,
        users: null
    }
  }
  
  componentDidMount() {    
    window.scrollTo(0,0);
  }

  componentWillReceiveProps(next) {
    console.log("componentWillReceiveProps",next);
    if (typeof next.data.users !== "undefined") {
      this.setState({
        users: next.data.users.data
      })
    }
  }
  
  render() {
    return (
        <main className={stylesViews["page"] + " " + stylesViews["view"] + " " + styles["items-view"]}>  
          <BarLoader done={(this.state.pageLoading === true) ? "" : "done"} />  
          <BarsOverlayLoader done={(this.state.pageLoading === true) ? "" : "done"} /> 
          <h1>Items</h1>   
          <div className={styles["items-wrapper"]}>   

            { 
                this.state.users !== null
                ?
                  this.state.users.map((user, index) => {
                    return(
                      <div key={index} className={styles["item-wrapper"]}>   
                        <div className={styles["item-image-wrapper"]}>
                            <img src={user.avatar} alt={user.first_name} title={user.last_name} className={styles["item-image"]} />
                        </div>        
                        <p><strong className={styles["item-label"]}>Name</strong>{user.first_name} {user.last_name}</p>
                        <p><strong className={styles["item-label"]}>Email</strong>{user.email}</p>
                        <Link to={"/person/"+index}>Go Now!!!</Link>
                      </div>
                    )
                  }) 
                :
                  null
            } 
              
          </div>  
        </main> 
    )
  }
}

const mapStateToProps = (state) => {
  return {
    route: state.route,
    data: state.users
  }
}

export default connect(mapStateToProps)(PeopleView);