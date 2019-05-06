// core
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

// actions
import { ROUTE_ACTIONS } from '../../../redux/actions/route/RoutesActions';

//
import { validate } from '../../../utils/FormValidations';

// css
import stylesViews from '../../../styles/global/globalView.module.scss';
import stylesForms from '../../../styles/global/globalForm.module.scss';
import styles from './LogInView.module.scss';

export class LogInView extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
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
    let error = this.checkError();
    if (error.length === 0) {
      //proceed post
      console.log("Posting...",error)
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
        validate(element).then((bool) => {
            that.setState({ 
                error: Object.assign(
                    {}, 
                    that.state.error, 
                    { [element["name"]] : { valid : bool }}
                )                      
            }); 
        }).then(() => {
          if (that.state.username.length !== 0 && that.state.password.length !== 0 && that.checkError().length === 0) {
            that.setState({ 
              submitButton : true
            });
          } else {
            that.setState({ 
              submitButton : false
            });
          }
        });   
      }
    });
  }

  render() {
    // console.log("render",this.state.submitButton,this.state.username.length,this.state.password.length);
    return (
      <main className={stylesViews['page'] + " " + stylesViews['view'] + " " + styles['log-in-view']}>        
        <form noValidate onSubmit={(e) => this.onSubmitHandler(e)}>
          <h1>User Login</h1>
          <input 
            type="text" 
            name="username" 
            placeholder="username"            
            onChange = {(e) => this.onChangeHandler(e)}
            className={(!this.state.error.username.valid) ? stylesForms['error']  : ''}
            required
          />
          <input 
            type="password" 
            name="password" 
            placeholder="password"
            onChange = {(e) => this.onChangeHandler(e)}
            className={(!this.state.error.password.valid) ? stylesForms['error']  : ''}
            required
          />
          <input 
            type="submit" 
            value="LOG IN"
            disabled={!this.state.submitButton}
          />     
          <Link to="/register/" className={stylesForms['link-button']}>REGISTER</Link>
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