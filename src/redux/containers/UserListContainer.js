import { connect } from "react-redux";

import UserList from "../../components/UserList";

import { getDataAction, selectAction } from "../actions/action";
const getMyState = (state) => {
  return state;
};
const UserListContainer = connect(getMyState, { getDataAction, selectAction })(
  UserList
);
export default UserListContainer;
