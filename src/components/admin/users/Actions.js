import { getAllUser, deleteUser } from "./fetchApi";

export const fetchData = async (dispatch) => {
  dispatch({ type: "loading", payload: true });
  let responseData = await getAllUser();
  setTimeout(() => {
    if (responseData && responseData.Users) {
      dispatch({
        type: "fetchOrderAndChangeState",
        payload: responseData.Users,
      });
      dispatch({ type: "loading", payload: false });
    }
  }, 1000);
};

/* This method call the editmodal & dispatch category context */


export const deleteUserReq = async (oId, dispatch) => {
  let responseData = await deleteUser(oId);
  console.log(responseData);
  if (responseData && responseData.success) {
    fetchData(dispatch);
  }
};