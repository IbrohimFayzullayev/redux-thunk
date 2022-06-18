import { connect } from "react-redux";
import Statistics from "../../components/Statistics";
// import UserList from "../../components/UserList";

// import { selectAction } from "../actions/action";
const getMyState = (state) => {
  return state;
};
const SelectListContainer = connect(getMyState, null)(Statistics);
export default SelectListContainer;
