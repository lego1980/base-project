// core
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

// actions
import { ROUTE_ACTIONS } from '../../../redux/actions/route/RoutesActions';

//
import { requiredField } from '../../../utils/FormValidations';

// css
import stylesViews from '../../../styles/global/globalView.module.scss';
import stylesForms from '../../../styles/global/globalForm.module.scss';
import styles from './LogInView.module.scss';



export class LogInView extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  submitHandler = (e) => {
    requiredField(e);
    e.preventDefault();
  }

  onBlurHandler = (e) => {
    let elm = e.target || null;
    requiredField(elm).then(function(bool) {
      console.log("bool",bool);
    });
    e.preventDefault();
  }

  onChangeHandler = (e) => {
    
    // this.setState({
    //   inputValue: e.target.value
    // });
  }


  render() {
    return (
      <main className={stylesViews['page'] + " " + stylesViews['view'] + " " + styles['log-in-view']}>        
        <form noValidate>
          <h1>User Login</h1>
          <input 
            type="text" 
            name="username" 
            placeholder="username" 
            onBlur={(e) => this.onBlurHandler(e)} 
            onChange = {(e) => this.onChangeHandler(e)}
            required 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="password"
            onBlur={(e) => this.onBlurHandler(e)} 
            onChange = {(e) => this.onChangeHandler(e)}
             
          />
          <input type="submit" value="LOG IN" onClick={(e) => this.onSubmitHandler(e)}/>
          {/* <input type="reset" value="CLEAR" /> */}
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