// core
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// components
import BarLoader from "../../loaders/BarLoader";
import BarsOverlayLoader from "../../loaders/BarsOverlayLoader";

// actions
import { ROUTE_ACTIONS } from "../../../redux/actions/route/RoutesActions";

// utils
import { validate, checkError } from "../../../utils/FormValidations";

// css
import stylesViews from "../../../styles/global/globalView.module.scss";
import stylesForms from "../../../styles/global/globalForm.module.scss";
import styles from "./LogInView.module.scss";

export class LogInView extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      submitProgress: false,
      submitButton: false,
      username: "",
      password: "",
      error: {
        username: { 
          valid : null,
          msg: "" 
        },
        password: {
          valid : null,
          msg: ""  
        }
      }       
    };
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
    let that = this;    
    let element = e.target || null;
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
          return true;    
        });
      }
          
    });
  }

  render() {
    let submitProgress = this.state.submitProgress;
    return (
      <main className={stylesViews["page"] + " " + stylesViews["view"] + " " + styles["log-in-view"]}>  
        <BarLoader done={(submitProgress) ? "" : "done"} />  
        <BarsOverlayLoader done={(submitProgress) ? "" : "done"} />      
        
        <form noValidate onSubmit={(e) => this.onSubmitHandler(e)}>
          <h1>User Login</h1>
                   
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
            type="password" 
            id="password"
            name="password" 
            placeholder="password"            
            onChange = {(e) => this.onChangeHandler(e)}
            className={(this.state.error.password.valid === false) ? stylesForms["error"]  : ""}
            required
          />
          <label htmlFor="password" className={((this.state.error.password.msg.length !== 0) ? stylesForms["show-label"] : "")}>{this.state.error.password.msg}</label> 

          <input 
            type="submit" 
            value="LOG IN"
            className = {(this.state.submitProgress) ? stylesForms["progress"]  : ""}
            disabled = {!this.state.submitButton}
          />

          <Link to="/register/" className={stylesForms["link-button"]}>REGISTER</Link>
        </form>
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

export default connect(mapStateToProps,mapDispatchToProps)(LogInView);