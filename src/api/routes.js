export const BASE_URL = "https://rxje2xzpme.us-east-1.awsapprunner.com/api/v1";
// export const BASE_URL = "http://localhost:4500/api/v1";

export default {
  // -----AUTH------//
  signUp: BASE_URL + "/user/signup",
  signIn: BASE_URL + "/user/testLogin",
  sendOTP: BASE_URL + "/user/sendOTP",
  verifyOTP: BASE_URL + "/user/verify",
  forgotPassword: BASE_URL + "/user/forgotPassword",
  resetPassword: BASE_URL + "/user/resetPassword",
  verifyOTPresetPassword: BASE_URL + "/user/verifyOTPResetPassword",
  logOut: BASE_URL + "/user/logout",
  updateUser: BASE_URL + "/user",
  guestUser: BASE_URL + "/user/guest",

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
  getallGallery: BASE_URL + "/gallery/getall",
  // -------------Reviews--------------//
  postReview: BASE_URL + "/globalReviews/create",
  getallReviews: BASE_URL + "/globalReviews/getall?limit=1000&sort=-createdAt",
  // -------------create-cart----------------//
  createCart: BASE_URL + "/cart/create",
  getProducts: BASE_URL + "/product/getAll?limit=",
  myCart: BASE_URL + "/cart/mycart",
  updateCart: BASE_URL + "/cart/update",
  // ------------booking-create-----------
  booking: BASE_URL + "/booking/create",
  myServices: BASE_URL + "/booking/myservices",
  bookingRefund: BASE_URL + "/booking/refund",
  // --------------my-rewards--------------
  myRewards: BASE_URL + "/user/myrewards",
  // -------------get-card----------
  getMyCards: BASE_URL + "/card/mycards",
  deleteCard: BASE_URL + "/card/delete",
};
