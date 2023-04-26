import { publicRequest } from "../requestMethod";

import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
} from "./adminSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const result = await publicRequest.post("/api/auth/login", user);
    dispatch(loginSuccess(result.data));
    window.location.href = "/dashboard";
  } catch (error) {
    dispatch(loginFailure());
  }
};
