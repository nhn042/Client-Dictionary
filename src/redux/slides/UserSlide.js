import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  avatar: "",
  access_token: "",
  id: "",
  isAdmin: false,
  city: "",
  refreshToken: "",
};

export const userSlide = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      console.log("action", action);
      console.log("state", state);
      const {
        fullname = "",
        email = "",
        access_token = "",
        dob = "",
        address = "",
        number = "",
        _id = "",
        isAdmin,
        refreshToken = "",
        gender = "",
      } = action.payload;
      state.fullname = fullname ? fullname : state.fullname;
      state.email = email ? email : state.email;
      state.address = address ? address : state.address;
      state.number = number ? number : state.number;
      state.gender = gender ? gender : state.gender;
      state.dob = dob ? dob : state.dob;
      state.id = _id ? _id : state.id;
      state.access_token = access_token ? access_token : state.access_token;
      state.isAdmin = isAdmin ? isAdmin : state.isAdmin;
      state.refreshToken = refreshToken ? refreshToken : state.refreshToken;
    },
    resetUser: (state) => {
      state.name = "";
      state.email = "";
      state.address = "";
      state.phone = "";
      state.avatar = "";
      state.gender = "";
      state.dob = "";
      state.id = "";
      state.access_token = "";
      state.isAdmin = false;
      state.refreshToken = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlide.actions;

export default userSlide.reducer;
