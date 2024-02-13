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

export const upload = (cb, setIsLoading) => (evt) => {
  const files = evt.target.files;
  const file = files[0];

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "");

  var formdata = new FormData();
  formdata.append("file", file);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };
  setIsLoading(true);
  fetch(
    "ec2-34-228-62-195.compute-1.amazonaws.com/api/v1/user/upload",
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      const url = data.url;
      setIsLoading(false);
      cb(url);
    })
    .catch((error) => {
      setIsLoading(false);
      console.log("error", error);
    });
};
