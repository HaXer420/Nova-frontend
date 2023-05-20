const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  userData: null,
  token: "",
  refreshToken: "",
  myInfo: null,
  cart: 0,
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
    myInfo: (state, action) => {
      state.myInfo = action.payload;
    },
    productInCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { userData, accessToken, refreshToken, myInfo, productInCart } =
  userDataSlice.actions;

export default userDataSlice.reducer;
