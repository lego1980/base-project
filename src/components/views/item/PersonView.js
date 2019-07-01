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
import styles from './PersonView.module.scss';

export class PersonView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        pageLoading: true,
        userData: null
    }
  }
  
  componentDidMount() { 
    window.scrollTo(0,0);
    if (this.props.usersData.users !== null && this.props.usersData.fetched === true) {
      this.setState({
        pageLoading: false,   
        userData: this.props.usersData.users.data.find((item) => item.id.toString() === this.props.match.params.id)
      });
    } else {
      let that = this;
      if (this.props.usersData.fetched === false) {
        let usersOptions = { page : 1 }; 
        this.props.initUsers(usersOptions).then(() => {
          that.setState({
            pageLoading: false,   
            userData: that.props.usersData.users.data.find((item) => item.id.toString() === this.props.match.params.id)
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
          { 
              this.state.userData !== null
              ?
                <div className={styles["item-wrapper"]}>   
                  <h1>{this.state.userData.first_name} {this.state.userData.last_name}</h1>  
                  <div className={styles["item-image-wrapper"]}>
                      <img src={this.state.userData.avatar} alt={this.state.userData.first_name} title={this.state.userData.last_name} className={styles["item-image"]} />
                  </div>        
                  <p><strong className={styles["item-label"]}>Email</strong>{this.state.userData.email}</p>
                  <Link to={"/people/"}>Back to People</Link>
                </div>
              :
                null
          } 
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

export default connect(mapStateToProps,mapDispatchToProps)(PersonView);