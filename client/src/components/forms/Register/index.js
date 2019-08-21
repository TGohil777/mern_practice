import { connect } from 'react-redux';
import  { Register } from './Register';
import { register, registerReset } from '../../../reducer/registration';
import { withRouter } from 'react-router-dom';


function mapStateToProps(state) {
    return {
        message: state.registration.message,
        error: state.registration.error
    }
}

export default withRouter(connect(mapStateToProps, { register, registerReset })(Register));