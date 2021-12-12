import axios from "axios";

export const logoutCall = async (dispatch) => {
  dispatch({ type: "LOGOUT_START" });
  try {
    const res = await axios.get("/logout",);
    console.log(res)
    dispatch({ type: "LOGOUT_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGOUT_FAILURE", payload: err });
  }
};