
import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
   isAuthenticated: false,
};

const authSlice = createSlice({
    initialState: initialAuthState,
    name: "authentication",
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
            },
    },
});

export const authActions = authSlice.actions
export default authSlice.reducer;