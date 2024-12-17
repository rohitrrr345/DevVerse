import axios from "axios";
import { IUser } from "../types/user";
import { AppDispatch } from "../store";
 
export const registerUser = (formdata: IUser) => async (dispatch: AppDispatch) => {
  try {
    dispatch({
      type: "RegisterRequest",
    });

    // Making the API call with 'withCredentials' flag
    const { data } = await axios.post(`${import.meta.env.VITE_SERVER}/api/v1/register`, formdata, {
      headers: {
        "Content-type": "multipart/form-data",
      },
      withCredentials: true,  // Ensure credentials (like cookies) are sent
    });

    dispatch({
      type: "RegisterSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "RegisterFailure",
      payload: error.response?.data?.message || "Registration failed",
    });
  }
};









export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });

    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER}/api/v1/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: "LoginSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });
  }
};
// export const loadUser = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: "LoadUserRequest",
//     });

//     const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/api/v1/me`, {
//       withCredentials: true,
//     });

//     dispatch({
//       type: "LoadUserSuccess",
//       payload: data.user,
//     });
//   } catch (error) {
//     dispatch({
//       type: "LoadUserFailure",
//       payload: error.response.data.message,
//     });
//   }
// };



export const getAllUsers =
  (name = "") =>
  async (dispatch) => {
    try {
      dispatch({
        type: "allUsersRequest",
      });

      const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/api/v1/users?name=${name}`, {
        withCredentials: true, 
      });

      dispatch({
        type: "allUsersSuccess",
        payload: data.users,
      });
    } catch (error) {
      dispatch({
        type: "allUsersFailure",
        payload: error.response ? error.response.data.message : error.message,
      });
    }
  };




export const updatePassword =
  (oldPassword, newPassword) => async (dispatch) => {
    try {
      dispatch({
        type: "updatePasswordRequest",
      });

      const { data } = await axios.put(
        `${process.env.REACT_APP_SERVER}/api/v1/update/password`,
        { oldPassword, newPassword },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Include this if authentication is needed
        }
      );

      dispatch({
        type: "updatePasswordSuccess",
        payload: data.message,
      });
    } catch (error) {
      console.error("Error updating password:", error); // Log for debugging
      dispatch({
        type: "updatePasswordFailure",
        payload: error.response ? error.response.data.message : error.message,
      });
    }
  };




