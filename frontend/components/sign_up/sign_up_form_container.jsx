import {connect} from 'react-redux';
import {signup, login, clearErrors} from "../../actions/session_actions.js";
import SignUpForm from "./sign_up_form";



const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    user: {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      email: "",
    },
   
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    clearErrors: ()=> dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);