// core
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


// actions
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
        pageLoading: true,
        usersData: null
    }
  }
  
  componentDidMount() { 
    window.scrollTo(0,0);
    if (this.props.usersData.users !== null && this.props.usersData.fetched === true) {
      this.setState({
        pageLoading: false,   
        usersData: this.props.usersData.users
      });
    } else {
      let that = this;
      if (this.props.usersData.fetched === false) {
        let usersOptions = { page : 1 }; 
        this.props.initUsers(usersOptions).then(() => {
          that.setState({
            pageLoading: false,   
            usersData: that.props.usersData.users
          });
        });
       
      }
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
                this.state.usersData !== null
                ?
                  this.state.usersData.data.map((user, index) => {
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
    usersData: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    ...USERS_ACTIONS(dispatch) 
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PeopleView);