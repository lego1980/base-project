// core
import React from 'react';
import { connect } from "react-redux";

// actions
import { ROUTE_ACTIONS } from '../../../redux/actions/route/RoutesActions';
import { USERS_ACTIONS } from'../../../redux/actions/users/UsersActions';

// components
import ListDropDownEdit from '../../dropdowns/ListDropDownEdit';
import InputEdit from '../../inputs/InputEdit';
import BarLoader from '../../loaders/BarLoader';
import BarsLoader from '../../loaders/BarsLoader';

import DefaultModal from '../../modals/defaultModal/DefaultModal';

// static data
import { GenderDropDown } from '../../../data/lists/FormData';

// css
import stylesViews from '../../../styles/global/globalView.module.scss';
import stylesForms from '../../../styles/global/globalForm.module.scss';
import './AccountView.css';

export class AccountView extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          modalOpen: this.props.modalOpen || false, 
          header: this.props.modalHeader || "",
          body:  this.props.modalBody || ""
      }
  }

  updateStatus = (bool) => {
      console.log("updateStatus",bool);
      this.setState({
        modalOpen:  bool      
      })
  }

  render() {
    let props = this.props;
    let complete = (props.users.fetched && !props.users.fetching) ? true : false;

    return (
      <div>
        <BarLoader done={(complete) ? "done" : ""} /> 
        <div className={stylesViews['page'] + " " + stylesViews['view']}>         
          <BarsLoader done={(complete) ? "done" : ""} /> 
          <form className={stylesForms['form']}>
            <h1>Account</h1>
            
            <InputEdit 
              classes =""
              inputType ="text"
              inputId = "firstname"
              inputName = "firstname" 
              inputValue = ""
              inputPlaceholder = "Enter first name"
              required = "required"
              readOnly = ""
              disabled = ""
            />

            <InputEdit 
              classes =""
              inputType ="text"
              inputId = "lastname"
              inputName = "lastname" 
              inputValue = ""
              inputPlaceholder = "Enter last name"
              required = "required"
              readOnly = ""
              disabled = ""
            />

            <InputEdit 
              classes =""
              inputType ="text"
              inputId = "age"
              inputName = "age" 
              inputValue = ""
              inputPlaceholder = "Enter age"
              required = ""
              readOnly = ""
              disabled = ""
            />

            <ListDropDownEdit
              id={"gender"} 
              name={"gender"} 
              data={GenderDropDown} 
              placeholder="select gender"
              required = ""
              disabled = "disabled"
              // readonly conflict name with react 
              // readonly = "readonly" 
            /> 

            <InputEdit 
              classes =""
              inputType ="text"
              inputId = "username"
              inputName = "username" 
              inputValue = ""
              inputPlaceholder = "Enter username"
              required = "required"
              readOnly = ""
              disabled = ""
            />

            <InputEdit 
              classes =""
              inputType ="email"
              inputId = "email"
              inputName = "email" 
              inputValue = ""
              inputPlaceholder = "Enter email"
              required = "required"
              readOnly = ""
              disabled = ""
            />           

            <InputEdit 
              classes =""
              inputType ="password"
              inputId = "password"
              inputName = "password" 
              inputValue = ""
              inputPlaceholder = "Enter password"
              required = "required"
              readOnly = ""
              disabled = ""
            />

            <InputEdit 
              classes =""
              inputType ="password"
              inputId = "confirmPassword"
              inputName = "confirmPassword" 
              inputValue = ""
              inputPlaceholder = "Confirm password"
              required = "required"
              readOnly = ""
              disabled = ""
            />

            <input type="submit" value="UPDATE" />
          </form>
        </div>
        <button type="button" onClick={(e) => this.updateStatus(true,e)}>Open Modal</button>
        {
            this.state.modalOpen === true 
            ?         
                <DefaultModal callback={this.state.updateStatus} modalOpen={this.state.modalOpen} modalHeader={"This is header modal"} modalBody={"This is body modal"} />
            :
                null  
        }        
      </div>
    );
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