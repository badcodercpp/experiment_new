import {connect} from 'react-redux'

import * as Actions from '../actions/actionCreator';
import {bindActionCreators} from 'redux';
import ProfilePage from '../component/profile_m/index';

const mapStateToProps = (state) =>{
    return {
    profileData:state["demoReducer"].profileData
}}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(ProfilePage)