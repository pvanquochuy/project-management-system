import api from "@/config/app";
import * as actionTypes from "./ActionTypes";

export const fetchIssues = (id) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_ISSUES_REQUEST });
    try {
      const response = await api.get(`/api/issues/project/${id}`);
      console.log("fetch issues : ", response.data);
      dispatch({
        type: actionTypes.FETCH_ISSUES_SUCCESS,
        issuess: response.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: actionTypes.FETCH_ISSUES_FAILURE,
        error: error.message,
      });
    }
  };
};

export const fetchIssueById = (id) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_ISSUES_BY_ID_REQUEST });
    try {
      const response = await api.get(`/api/issues/${id}`);
      console.log("fetch issue by id : ", response.data);
      dispatch({
        type: actionTypes.FETCH_ISSUES_BY_ID_SUCCESS,
        issues: response.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: actionTypes.FETCH_ISSUES_BY_ID_FAILURE,
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
