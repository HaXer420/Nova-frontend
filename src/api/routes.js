export const BASE_URL = "https://nova.herokuapp.com/api/v1";

export default {
  // -----AUTH------//
  signUp: BASE_URL + "/user/signup",
  signIn: BASE_URL + "/user/login",
  sendOTP: BASE_URL + "/user/sendOTP",
  verifyOTP: BASE_URL + "/user/verify",
  forgotPassword: BASE_URL + "/user/forgotPassword",
  resetPassword: BASE_URL + "/user/resetPassword",
  verifyOTPresetPassword: BASE_URL + "/user/verifyOTPResetPassword",
  logOut: BASE_URL + "/user/logout",
  updateUser: BASE_URL + "/user",

  // -----------Dashboard--------------//
  contactUs: BASE_URL + "/contactus/create",
  getFAQ: BASE_URL + "/faq/getall",
  // -------------AboutUs--------------//
  getAboutUs: BASE_URL + "/aboutus/get",
  // -------------storeLocation--------------//
  getStoreLocation: BASE_URL + "/store/getAll?limit=",
  // -------------services--------------//
  getallServices: BASE_URL + "/service/getall",
  // -------------services--------------//
  postReview: BASE_URL + "/globalReviews/create",
  getallReviews: BASE_URL + "/globalReviews/getall?limit=1000&sort=-createdAt",
};
