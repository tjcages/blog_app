import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isSignedIn: false,
        userData: null,
        seachInput: "tech",
        blogData: null,
    },
    reducers: {
        setSignedIn: (state, action) => {
            state.isSignedIn = action.payload;
        },
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
        setInput: (state, action) => {
            state.seachInput = action.payload;
        },
        setBlogData: (state, action) => {
            state.blogData = action.payload;
        }
    }
})