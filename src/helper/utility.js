import { toast } from "react-toastify";

export const GreenNotify = (text) => {
  toast.success(text, {
    position: toast.POSITION.TOP_CENTER,
  });

  // toast.error("Error Notification !", {
  //   position: toast.POSITION.TOP_LEFT,
  // });

  // toast.warn("Warning Notification !", {
  //   position: toast.POSITION.BOTTOM_LEFT,
  // });

  // toast.info("Info Notification !", {
  //   position: toast.POSITION.BOTTOM_CENTER,
  // });

  // toast("Custom Style Notification with css class!", {
  //   position: toast.POSITION.BOTTOM_RIGHT,
  //   className: "foo-bar",
  // });
};

export const RedNotify = (text) => {
  toast.error(text, {
    position: toast.POSITION.TOP_CENTER,
  });
};
