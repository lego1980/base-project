// core
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";

// actions
import { ROUTE_ACTIONS } from '../../../redux/actions/route/RoutesActions';
import { USERS_ACTIONS } from'../../../redux/actions/users/UsersActions';

// transition group plugin
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// css
import './BaseApp.scss';
import '../../../styles/fonts/base.css';
import '../../../styles/pageSlider/pageSlider.scss';
import '../../../styles/keyframes/slideY.css';

// mudules - components
import HeaderModule from '../../modules/header/HeaderModule';

// views - components
//import HomeView from '../../views/home/HomeView';
import ParallaxView from '../../views/parallax/ParallaxView.2';
import RegisterView from '../../views/register/RegisterView';
import LogInView from '../../views/login/LogInView';
import AccountView from '../../views/account/AccountView.1';
import ItemsView from '../../views/items/ItemsView';
import ItemView from '../../views/item/ItemView';
import PeopleView from '../../views/items/PeopleView';
import AboutView from '../../views/about/AboutView';
import ContactView from '../../views/contact/ContactView';
import FaqView from '../../views/faq/FaqView';
import TermsView from '../../views/terms/TermsView';
import PrivacyView from '../../views/privacy/PrivacyView';
import ErrorView from '../../views/error/ErrorView';

export class BaseApp extends React.Component {
  componentWillMount() {
    //console.log("componentWillMount this.props BaseApp",this.props);   
    let usersOptions = { page : 2 }; 
    this.props.getUsers(usersOptions);
    return true;
  }

  componentDidMount() {    
    //console.log("componentDidMount this.props BaseApp",this.props); 
  }  
  
  render() {
    return (     
      <Router> 
        <div>
          <HeaderModule/>
          <Route render={(props) => (
              // parallax <TransitionGroup className="wrapper">
              <TransitionGroup>
                <CSSTransition
                  key={props.location.key}
                  timeout={450}
                  classNames={"pageSlider"}
                >
                  <Switch location={props.location}>
                    <Route
                      path='/'
                      exact
                      render={(props) => <ParallaxView {...props} />}
                    />
                    <Route
                      path='/register/'
                      exact
                      render={(props) => <RegisterView {...props} />}
                    />
                    <Route
                      path='/login/'
                      exact                      
                      render={(props) => <LogInView {...props} />}
                    />
                    <Route
                      path='/account/'
                      exact
                      render={(props) => <AccountView {...props} />}
                    />
                    <Route
                      path='/items/'
                      exact
                      render={(props) => <ItemsView {...props} />}
                    />
                    <Route
                      path='/item/:id'
                      exact
                      render={(props) => <ItemView {...props} />}
                    />
                    <Route
                      path='/people/'
                      exact
                      render={(props) => <PeopleView {...props} />}
                    />
                    <Route
                      path='/about/'
                      exact
                      render={(props) => <AboutView {...props} />}
                    />
                    <Route
                      path='/contact/'
                      exact                      
                      render={(props) => <ContactView {...props} />}
                    />
                    <Route
                      path='/faq/'
                      exact                      
                      render={(props) => <FaqView {...props} />}
                    />
                    <Route
                      path='/terms/'
                      exact                      
                      render={(props) => <TermsView {...props} />}
                    />
                    <Route
                      path='/privacy/'
                      exact                      
                      render={(props) => <PrivacyView {...props} />}
                    />
                    <Route               
                      render={(props) => <ErrorView {...props} />}
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
          )} /> 
        </div>
      </Router> 
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

export default connect(mapStateToProps,mapDispatchToProps)(BaseApp);