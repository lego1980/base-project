// core
import React from 'react';
import { connect } from "react-redux";

// actions
import { ROUTE_ACTIONS } from '../../../redux/actions/route/RoutesActions';
import { USERS_ACTIONS } from'../../../redux/actions/users/UsersActions';


// css
import '../../styles/views/defaultView.css';
import './HomeView.css';

export class HomeView extends React.Component {
  componentWillMount() {
  }

  componentDidMount() {    
    console.log("this.props HomeView",this.props);     
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log("nextProps HomeView", nextProps);
    console.log("nextState HomeView", nextState);
    return true;
  }
  
  render() {
    return (
      <div className={"page view home-view"}>
        HOME VIEW<br/>
        <p>HOME VIEW p</p>
        <div>HOME VIEW div</div>
        <span>HOME VIEW span</span>
        <h1>HOME VIEW</h1>
        <h2>HOME VIEW</h2>
        <h3>HOME VIEW</h3>
        <h4>HOME VIEW</h4>
        <h5>HOME VIEW</h5>
        <h6>HOME VIEW</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Aliquet porttitor lacus luctus accumsan tortor. Vitae et leo duis ut diam quam nulla porttitor massa. Dictum sit amet justo donec enim diam vulputate. Quisque id diam vel quam elementum pulvinar etiam non. Sit amet tellus cras adipiscing enim. In nisl nisi scelerisque eu ultrices vitae auctor eu. Proin sed libero enim sed faucibus turpis in eu mi. Velit dignissim sodales ut eu sem. Velit dignissim sodales ut eu sem integer vitae. In nibh mauris cursus mattis molestie a iaculis at. Consectetur libero id faucibus nisl tincidunt eget nullam non. Quisque sagittis purus sit amet.</p>
        <p>Nec ullamcorper sit amet risus nullam eget. Velit ut tortor pretium viverra suspendisse potenti. Eu non diam phasellus vestibulum. Vitae congue eu consequat ac felis donec et. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Bibendum ut tristique et egestas quis. Massa tincidunt nunc pulvinar sapien. Nisi est sit amet facilisis. Sapien et ligula ullamcorper malesuada. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Nulla aliquet enim tortor at auctor urna nunc id cursus. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Dui faucibus in ornare quam viverra. Eget nunc lobortis mattis aliquam faucibus purus in massa tempor. Sed nisi lacus sed viverra tellus in hac. Lobortis scelerisque fermentum dui faucibus in ornare quam. Tincidunt tortor aliquam nulla facilisi cras. Bibendum neque egestas congue quisque egestas diam in.</p>
        <p>Sagittis orci a scelerisque purus semper eget duis at tellus. Dolor sit amet consectetur adipiscing elit ut aliquam. Lectus urna duis convallis convallis. Volutpat est velit egestas dui id ornare. Id aliquet risus feugiat in ante metus. Integer feugiat scelerisque varius morbi enim nunc. Scelerisque in dictum non consectetur a erat nam at. Faucibus vitae aliquet nec ullamcorper sit amet. Elementum tempus egestas sed sed risus pretium quam vulputate. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.</p>
        <p>Vitae suscipit tellus mauris a diam maecenas sed enim. Netus et malesuada fames ac. Rutrum quisque non tellus orci ac auctor. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Bibendum arcu vitae elementum curabitur vitae nunc sed. Morbi tincidunt ornare massa eget egestas purus. Amet risus nullam eget felis. Penatibus et magnis dis parturient. Magna fermentum iaculis eu non. Dolor purus non enim praesent elementum. Elementum nibh tellus molestie nunc non blandit.</p>
        <p>Leo urna molestie at elementum. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Eget magna fermentum iaculis eu. Elit eget gravida cum sociis natoque. Nulla facilisi etiam dignissim diam quis. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Dis parturient montes nascetur ridiculus mus mauris. Imperdiet sed euismod nisi porta lorem mollis aliquam. Purus semper eget duis at tellus at urna. Quisque sagittis purus sit amet volutpat consequat mauris nunc. Nisl tincidunt eget nullam non nisi est. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Id faucibus nisl tincidunt eget nullam non. Diam quam nulla porttitor massa id. Ultrices neque ornare aenean euismod elementum nisi. Eu sem integer vitae justo eget magna fermentum iaculis eu.</p>
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

export default connect(mapStateToProps,mapDispatchToProps)(HomeView);
