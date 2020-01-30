import { connect } from "react-redux";
import ListTable from "./listTable";

const mapStateToProps = state => ({
  authorsData: state.authors
});

export default connect(mapStateToProps)(ListTable);
