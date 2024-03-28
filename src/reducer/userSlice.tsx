import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        email: "",
        token: "",
        tokenExpiredTime: "",
        refreshToken: "",
        refreshTokenExpiredTime: "",
        nickname:"",
        fireId:0
    },
    reducers: {
        // login 성공 시
        loginUser: (state, action) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.tokenExpiredTime = action.payload.tokenExpiredTime;
            state.refreshToken = action.payload.refreshToken;
            state.refreshTokenExpiredTime = action.payload.refreshTokenExpiredTime;
            state.nickname = action.payload.nickname;
            return state;
        },
        logoutUser: (state) => {
            state.email = "";
            state.token = "";
            state.nickname="";
        },
        NicknameUser:(state,action) => {
            state.nickname = action.payload.nickname;
            return state;
        },
        ProfileUser:(state,action) => {
            state.fireId = action.payload.fireId;
            return state;
        }
    },
});

export const { loginUser, logoutUser ,NicknameUser,ProfileUser } = userSlice.actions;
export default userSlice.reducer;

