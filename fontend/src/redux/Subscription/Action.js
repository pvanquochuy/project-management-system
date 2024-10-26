import api from "@/config/app";
import * as actionTypes from "./ActionTypes";

export const getUserSubcription = (jwt) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.GET_USER_SUBCRIPTION_REQUEST });
    try {
      const response = await api.get("/api/subscription/user", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({
        type: actionTypes.GET_USER_SUBCRIPTION_SUCCESS,
        payload: response.data,
      });
      console.log("user sub: ", response.data);
    } catch (error) {
      console.log(error);
      dispatch({
        type: actionTypes.GET_USER_SUBCRIPTION_FAILURE,
        error: error.message,
      });
    }
  };
};

export const upgradeSubscription = ({ planType }) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.UPGRADE_SUBCRIPTION_REQUEST });
    try {
      const response = await api.patch("/api/subscriptions/upgrade", null, {
        params: {
          planType: planType,
        },
      });
      console.log("fetch issue by id : ", response.data);
      dispatch({
        type: actionTypes.UPGRADE_SUBCRIPTION_SUCCESS,
        payload: response.data,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
      dispatch({
        type: actionTypes.UPGRADE_SUBCRIPTION_FAILURE,
        error: error.message,
      });
    }
  };
};

export const updateIssuesStatus = (id, status) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_ISSUES_STATUS_REQUEST });
    try {
      const response = await api.put(`/api/issues/status/${status}`);
      console.log("update status ", response.data);
      dispatch({
        type: actionTypes.UPDATE_ISSUES_STATUS_SUCCESS,
        issues: response.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: actionTypes.UPDATE_ISSUES_STATUS_FAILURE,
        error: error.message,
      });
    }
  };
};

export const assignedUserToIssue = (issueId, userId) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.ASSIGNED_ISSUE_TO_USER_REQUEST });
    try {
      const response = await api.put(
        `/api/issues/${issueId}/assignee/${userId}`
      );
      console.log("assignee issue: ", response.data);
      dispatch({
        type: actionTypes.ASSIGNED_ISSUE_TO_USER_SUCCESS,
        issue: response.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: actionTypes.ASSIGNED_ISSUE_TO_USER_FAILURE,
        error: error.message,
      });
    }
  };
};
