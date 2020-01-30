import { connect } from "react-redux";
import Search from "./search";
import { findAuthor } from "../../actions";
import { bindActionCreators } from "redux";

const mapDispatchToProps = dispatch => ({
  actions: {
    findAuthor: bindActionCreators(findAuthor, dispatch)
  }
});

export default connect(null, mapDispatchToProps)(Search);
