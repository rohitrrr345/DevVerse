import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser, MessageResponse } from "../types/user";


export const userAPI = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
      baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/user/`,
    }),
    tagTypes: ["users"],
    endpoints: (builder) => ({
        login: builder.mutation<MessageResponse, IUser>({
            query: (user) => ({
              url: "register",
              method: "POST",
              body: user,
            }),
            invalidatesTags: ["users"],
          }),



    }),
  });