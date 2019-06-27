// core
import React from 'react';
import { connect } from 'react-redux';

// actions
import { ROUTE_ACTIONS } from '../../../redux/actions/route/RoutesActions';
import { USERS_ACTIONS } from'../../../redux/actions/users/UsersActions';

// components
import ListDropDown from '../../dropdowns/ListDropDown';
import BarLoader from '../../loaders/BarLoader';
import BarsOverlayLoader from '../../loaders/BarsOverlayLoader';
// import DefaultModal from '../../modals/defaultModal/DefaultModal';
import ConfirmAccountModal from '../../modals/confirmAccount/ConfirmAccountModal';

// static data
import { GenderDropDown } from '../../../data/lists/FormData';

// utils
import { validate, checkError } from '../../../utils/FormValidations';

// css
import stylesViews from '../../../styles/global/globalView.module.scss';
import stylesForms from '../../../styles/global/globalForm.module.scss';
import styles from './AccountView.1.module.scss';

export class AccountView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      submitProgress: false,
      submitButton: false,
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      error: {
        username: { 
          valid : null,
          msg: "" 
        },
        email: { 
          valid : null,
          msg: "" 
        },
        password: {
          valid : null,
          msg: ""  
        },
        confirmPassword: {
          valid : null,
          msg: ""  
        },
        firstName: { 
          valid : null,
          msg: "" 
        },
        lastName: { 
          valid : null,
          msg: "" 
        },
        gender: { 
          valid : null,
          msg: "" 
        }
      },
      modalOpen: true, //this.props.modalOpen || false, 
      modalHeader: this.props.modalHeader || "",
      modalBody:  this.props.modalBody || ""        
    };
  }

  updateStatus = (bool) => {
    console.log("updateStatus",bool);
    this.setState({
      modalOpen:  bool      
    })
  }

  onSubmitHandler = (e) => {
    let that = this;
    that.setState({ 
      submitButton : false,
      submitProgress : true
    });
    checkError(that.state.error).then((data) => {
      if (data.length === 0) {
        //proceed post
        console.log("Posting...");
      } else {
        that.setState({ 
          submitButton : true,
          submitProgress : false
        });
      }
    });   
    e.preventDefault();
  }

  onChangeHandler = (e,matchBool,inputName,inputLabel,inputValue) => {   
    //console.log("onChangeHandler",e);
    let that = this;    
    let element = e.target || e || null;
    let matchObj = null;
    
    // get match object 
    if (matchBool === true && typeof inputName !== undefined && typeof inputValue !== undefined && typeof inputLabel !== undefined) {
      matchObj = {
        bool: matchBool,
        name: inputName,
        label: inputLabel,
        value: inputValue
      }
    }
    
    that.setState({ 
      [element["name"]] : element.value
    }, () => {
      
      if (element) {
        validate(element,matchObj).then((arrObj) => {
          arrObj.map((obj) => {
            if (obj != null) {
              that.setState({ 
                error: Object.assign(
                    {}, 
                    that.state.error, 
                    { [obj.name] : { valid : obj.bool, msg : obj.msg }}
                )                        
              })
            }
            return true;              
          });
        }).then(() => {            
          checkError(that.state.error).then((data) => {
            if (data.length === 0) {
              that.setState({ 
                submitButton : true,
                submitProgress : false
              });
            } else {
              that.setState({ 
                submitButton : false,
                submitProgress : false
              });
            }
          });    
        });
      }
          
    });
  }
  
  render() {
    // let props = this.props;
    // let complete = (props.users.fetched && !props.users.fetching) ? true : false;

    let submitProgress = this.state.submitProgress;
    return (
      <React.Fragment>
        <main className={stylesViews["page"] + " " + stylesViews["view"] + " " + styles["account-view"]}>  
          <BarLoader done={(submitProgress) ? "" : "done"} />  
          <BarsOverlayLoader done={(submitProgress) ? "" : "done"} />      
          
          <form noValidate onSubmit={(e) => this.onSubmitHandler(e)}>
            <h1>Create Account</h1>

            <div className={styles["avatar-wrapper"] + " " + styles["icon"] + " icon-user"}>
                <img src="https://www.geek.com/wp-content/uploads/2018/06/goku_large-625x352.png" alt="Avatar" />
                {/* <img src="http://i3.ytimg.com/vi/hCr4XKf3Dsk/maxresdefault.jpg" /> */}              
            </div>

            <input 
              type="text" 
              id="username"
              name="username" 
              placeholder="username"            
              onChange = {(e) => this.onChangeHandler(e)}
              className={(this.state.error.username.valid === false) ? stylesForms["error"]  : ""}
              required
            />
            <label htmlFor="username" className={((this.state.error.username.msg.length !== 0) ? stylesForms["show-label"] : "")}>{this.state.error.username.msg}</label> 

            <input 
              type="text" 
              id="email"
              name="email" 
              placeholder="email"            
              onChange = {(e) => this.onChangeHandler(e)}
              className={(this.state.error.email.valid === false) ? stylesForms["error"]  : ""}
              pattern="[a-z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
            />
            <label htmlFor="email" className={((this.state.error.email.msg.length !== 0) ? stylesForms["show-label"] : "")}>{this.state.error.email.msg}</label> 

            <input 
              type="password" 
              id="password"
              name="password" 
              placeholder="password"            
              onChange = {(e) => this.onChangeHandler(e,true,"confirmPassword","confirm password",this.state.confirmPassword)}
              className={(this.state.error.password.valid === false) ? stylesForms["error"]  : ""}
              pattern="[A-Za-z]\w{7,14}$"
              required
            />
            <label htmlFor="password" className={((this.state.error.password.msg.length !== 0) ? stylesForms["show-label"] : "")}>{this.state.error.password.msg}</label> 

            <input 
              type="password" 
              id="confirmPassword"
              name="confirmPassword"
              data-name="confirm password" 
              placeholder="confirm password"            
              onChange = {(e) => this.onChangeHandler(e,true,"password","password",this.state.password)}
              className={(this.state.error.confirmPassword.valid === false) ? stylesForms["error"]  : ""}
              pattern="[A-Za-z]\w{7,14}$"
              required
            />
            <label htmlFor="confirmPassword" className={((this.state.error.confirmPassword.msg.length !== 0) ? stylesForms["show-label"] : "")}>{this.state.error.confirmPassword.msg}</label> 

            <input 
              type="text" 
              id="firstName"
              name="firstName"
              data-name="first name"  
              placeholder="first name"            
              onChange = {(e) => this.onChangeHandler(e)}
              className={(this.state.error.firstName.valid === false) ? stylesForms["error"]  : ""}
              required
            />
            <label htmlFor="firstName" className={((this.state.error.firstName.msg.length !== 0) ? stylesForms["show-label"] : "")}>{this.state.error.firstName.msg}</label> 

            <input 
              type="text" 
              id="lastName"
              name="lastName" 
              data-name="last name"  
              placeholder="last name"            
              onChange = {(e) => this.onChangeHandler(e)}
              className={(this.state.error.lastName.valid === false) ? stylesForms["error"]  : ""}
              required
            />
            <label htmlFor="lastName" className={((this.state.error.lastName.msg.length !== 0) ? stylesForms["show-label"] : "")}>{this.state.error.lastName.msg}</label> 

            <ListDropDown
                id={"gender"} 
                name={"gender"} 
                data={GenderDropDown} 
                placeholder="select gender"
                required
                disabled = "disabled"
                parent = {this}
                // readonly conflict name with react 
                // readonly = "readonly" 
              /> 

            <input 
              type="submit" 
              value="SAVE"
              className = {(this.state.submitProgress) ? stylesForms["progress"]  : ""}
              disabled = {!this.state.submitButton}
            />

          </form>
        </main>
        {
            this.state.modalOpen === true 
            ?                            
              <ConfirmAccountModal callback={this.updateStatus} modalOpen={this.state.modalOpen} modalHeader={"Confirm Account"} modalBody={"Please enter confirmation number"} />
            :
              null  
        }
      </React.Fragment>  
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

export default connect(mapStateToProps,mapDispatchToProps)(AccountView);