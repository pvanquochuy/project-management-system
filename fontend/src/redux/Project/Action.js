import api from "@/config/app";
import {
  ACCEPT_INVITATION_PROJECTS_REQUEST,
  ACCEPT_INVITATION_PROJECTS_SUCCESS,
  CREATE_PROJECTS_FAILURE,
  CREATE_PROJECTS_REQUEST,
  CREATE_PROJECTS_SUCCESS,
  DELETE_PROJECTS_REQUEST,
  DELETE_PROJECTS_SUCCESS,
  FETCH_PROJECTS_BY_ID_REQUEST,
  FETCH_PROJECTS_BY_ID_SUCCESS,
  FETCH_PROJECTS_FAILURE,
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  INVITE_TO_PROJECTS_REQUEST,
  INVITE_TO_PROJECTS_SUCCESS,
  SEARCH_PROJECTS_REQUEST,
  SEARCH_PROJECTS_SUCCESS,
} from "./ActionTypes";

export const fetchProjects =
  ({ category, tag }) =>
  async (dispatch) => {
    dispatch({ type: FETCH_PROJECTS_REQUEST });
    try {
      const { data } = await api.get("/api/projects", {
        params: { category, tag },
      });
      console.log("all projects", data);
      dispatch({ type: FETCH_PROJECTS_SUCCESS, projects: data });
    } catch (error) {
      dispatch({ type: FETCH_PROJECTS_FAILURE, error: error.message }); // Đảm bảo action này cũng có type
      console.log(error);
      console.error("Error fetching projects:", error.message, error);
    }
  };

export const searchProjects = (keyword) => async (dispatch) => {
  dispatch({ type: SEARCH_PROJECTS_REQUEST });
  try {
    const { data } = await api.get("/api/projects/search?keyword=" + keyword);
    console.log("search projects", data);
    dispatch({ type: SEARCH_PROJECTS_SUCCESS, projects: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchProjectsById =
  ({ id }) =>
  async (dispatch) => {
    dispatch({ type: FETCH_PROJECTS_BY_ID_REQUEST });
    try {
      const { data } = await api.get("/api/projects/" + id);
      console.log("projects by id", data);
      dispatch({ type: FETCH_PROJECTS_BY_ID_SUCCESS, project: data });
    } catch (error) {
      console.log(error);
    }
  };

export const createProject = (projectData) => async (dispatch) => {
  dispatch({ type: CREATE_PROJECTS_REQUEST });

  try {
    const { data } = await api.post("/api/projects", projectData);
    console.log("create projects", data);
    console.log("project data:", projectData);
    dispatch({ type: CREATE_PROJECTS_SUCCESS, project: data });
  } catch (error) {
    dispatch({ type: CREATE_PROJECTS_FAILURE, error: error.message }); // Đảm bảo action này cũng có type

    console.log(error);
  }
};

export const deleteProject =
  ({ projectId }) =>
  async (dispatch) => {
    dispatch({ type: DELETE_PROJECTS_REQUEST });
    try {
      const { data } = await api.delete("/api/projects/" + projectId);
      console.log("delete projects", data);
      dispatch({ type: DELETE_PROJECTS_SUCCESS, projectId });
    } catch (error) {
      console.log(error);
    }
  };

export const inviteToProject =
  ({ email, projectId }) =>
  async (dispatch) => {
    dispatch({ type: INVITE_TO_PROJECTS_REQUEST });
    try {
      const { data } = await api.post(
        "/api/projects/invite/" + { email, projectId }
      );
      console.log("invite projects", data);
      dispatch({ type: INVITE_TO_PROJECTS_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const acceptInvitation =
  ({ invitationToken, navigate }) =>
  async (dispatch) => {
    dispatch({ type: ACCEPT_INVITATION_PROJECTS_REQUEST });
    try {
      const { data } = await api.delete(
        "/api/projects/accept_invitation" +
          {
            params: {
              token: invitationToken,
            },
          }
      );
      navigate("/project" + data.projectId);
      console.log("accept invitation", data);
      dispatch({ type: ACCEPT_INVITATION_PROJECTS_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
