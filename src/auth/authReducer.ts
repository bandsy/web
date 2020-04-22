import Cookies from "universal-cookie";
const cookies = new Cookies();

const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      cookies.set("token", action.payload, { path: "/" });
      return true;
    case "REMOVE_TOKEN":
      cookies.remove("token");
      return false;
    default:
      throw new Error();
  }
};

export default authReducer;
