import { connect } from 'react-redux';
import  { Login } from './Login';
import { userlogin , loginReset } from '../../../reducer/login';
import { withRouter } from 'react-router-dom';


function mapStateToProps(state) {
    return {
        authenticated: state.login.authenticated,
        error: state.login.error
    }
}

export default withRouter(connect(mapStateToProps, { userlogin, loginReset })(Login));