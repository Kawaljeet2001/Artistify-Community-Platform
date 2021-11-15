import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : "isUserLoggedIn",
    initialState : {value : false},
    reducers : {
        setUserLogin : (state , action) => {
            state.value = action.payload;
        }
    }//functions that we will use to manipulate the states mentioned above
});

 export const {setUserLogin} = userSlice.actions;
  export default userSlice.reducer;