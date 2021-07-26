import { createSlice } from '@reduxjs/toolkit'
const initAuthState = { isAutenticated: false }

const authSlice = createSlice({
    name: 'auth_Z',
    initialState: initAuthState,
    reducers: {
        login(state){
            state.isAutenticated = true;
        },
        logout(state){
            state.isAutenticated = false;
        },
    }
})


export const authActions = authSlice.actions;

export default authSlice.reducer;