import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ListarNotas from "./ListarNotas";

const mapStateToProps = (state) => ({
  loginReducer: state.loginReducer,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListarNotas);
