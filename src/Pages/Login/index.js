import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Login from "./Login";

import { setDataFormAction, signInAction } from "../../Store/Login/Actions";

const mapStateToProps = (state) => ({
  loginReducer: state.loginReducer,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setDataFormAction, signInAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
