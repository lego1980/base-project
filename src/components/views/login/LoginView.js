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
import { validate } from "../../../utils/FormValidations";

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
          valid : true,
          msg: "" 
        },
        password: {
          valid : true,
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

    let error = that.checkError();
    if (error.length === 0) {
      //proceed post
      console.log("Posting...",error);
    } else {
      that.setState({ 
        submitButton : true,
        submitProgress : false
      });
    }
    e.preventDefault();
  }

  checkError = () => {
    let that = this;  
    let error = Object
      .values(that.state.error)
      .filter((item) => {
        return item.valid === false;
      });
    return error;  
  }

  onChangeHandler = (e) => {   
    let that = this;
    let element = e.target || null;
    that.setState({ 
      [element["name"]] : element.value
    }, () => {
      if (element) {
        validate(element).then((obj) => {
            that.setState({ 
                error: Object.assign(
                    {}, 
                    that.state.error, 
                    { [element["name"]] : { valid : obj.bool, msg : obj.msg }}
                )                      
            }); 
        }).then(() => {
          if (that.state.username.length !== 0 && that.state.password.length !== 0 && that.checkError().length === 0) {
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
      }
    });
  }

  render() {
    // console.log("render",this.state.submitButton,this.state.username.length,this.state.password.length);
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
            className={(!this.state.error.username.valid) ? stylesForms["error"]  : ""}
            // pattern="[A-Za-z]{3}"
            required
          />
          <label htmlFor="username" className={((this.state.error.username.msg.length !== 0) ? stylesForms["show-label"] : "")}>{this.state.error.username.msg}</label> 

          <input 
            type="password"
            id="password"  
            name="password" 
            placeholder="password"
            onChange = {(e) => this.onChangeHandler(e)}
            className={(!this.state.error.password.valid) ? stylesForms["error"]  : ""}
            required
          />
          <label htmlFor="password" className={((this.state.error.password.msg.length !== 0) ? stylesForms["show-label"] : "")}>{this.state.error.password.msg}</label>

          <input 
            type="submit" 
            value="LOG IN"
            className ={(this.state.submitProgress) ? stylesForms["progress"]  : ""}
            disabled={!this.state.submitButton}
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