import getData from "../../components/Api";
import { getSelectData } from "../../components/Api";
export const GET_DATA = "GET_DATA";
export const SELECT = "SELECT";

export const getDataAction = () => async (dispatch, getState) => {
  const data = await getData("regions");
  dispatch({
    type: GET_DATA,
    payload: data.data,
  });
};

export const selectAction = (name) => async (dispatch, getState) => {
  const report = await getSelectData(name);

  let arr = report.data.filter((word) => word.region.iso === name);

  dispatch({
    type: SELECT,
    payload: arr,
  });
  // return {
  //   type: SELECT,
  //   payload: arr,
  // };
};
