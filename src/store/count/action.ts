import { Dispatch } from "redux";
import { createAsyncAction, RootAction, RootState } from "typesafe-actions";
import { Error } from "./type";
import { fetchRestaurant } from "./api";

export const fetchAsync = createAsyncAction(
  "FETCH_REQUEST",
  "FETCH_SUCCESS",
  "FETCH_FAILURE"
)<undefined, number, Error>();

export const fetch = (): any => async (
  dispatch: Dispatch<RootAction>,
  getState: () => RootState
) => {
  dispatch(fetchAsync.request());
  const res = await fetchRestaurant();
  console.log(res);
  //dispatch(fetchAsync.success(res));
};
