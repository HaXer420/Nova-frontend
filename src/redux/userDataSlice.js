const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  userData: null,
  token: "",
  refreshToken: "",
};

export const userDataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userData: (state, action) => {
      state.userData = action.payload;
    },
    accessToken: (state, action) => {
      state.token = action.payload;
    },
    refreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
  },
});

export const { userData, accessToken, refreshToken } = userDataSlice.actions;

export default userDataSlice.reducer;
