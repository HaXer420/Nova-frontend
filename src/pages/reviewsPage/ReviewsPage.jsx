import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { callApi } from "../../api/apiCaller";
import routes from "../../api/routes";
import { Button, Footer, NavBar, TopBar } from "../../components";
import Loader from "../../components/loader/loader";
import "./reviewsPage.css";
import { errorIcon } from "../../assets";
import { GreenNotify, RedNotify } from "../../helper/utility";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ReviewsPage() {
  const [isloading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [reviewUpdate, setReviewUpdate] = useState(false);
  const auth = useSelector((data) => data.userDataSlice.userData);
  const [reviewValue, setReviewValue] = useState("");
  const reviewArray = [
    {
      id: 1,
      name: "Wali Khan",
      message:
        "The cheapest Sugar Wax Brazilian you can get in the Atlanta area! The location is also very convenient in the Publix shopping center. No need to worry about parking! Both times, I had Tina, who was great! I have also gotten my eyebrows & upper lip threaded here. You truly can’t beat the service and price. I also recommend their sugar scrubs. It’s all organic & homemade. My favorite is the peach scrub. The wait time is also not long at all!",
    },
    {
      id: 2,
      name: "Nilofar",
      message:
        "This was the first threading place I discovered near my apartment when I first moved here. Growing up, I only went to my Indian neighbors’ in-house salons to thread my eyebrows. I was initially scared to try out a salon, but let out a huge sigh of relief when I walked in here and noticed all South Asian women running this place!",
    },
    {
      id: 3,
      name: "Yasmeen",
      message:
        "This was the first threading place I discovered near my apartment when I first moved here. Growing up, I only went to my Indian neighbors’ in-house salons to thread my eyebrows. I was initially scared to try out a salon, but let out a huge sigh of relief when I walked in here and noticed all South Asian women running this place!",
    },
    {
      id: 4,
      name: "Sadia",
      message:
        "Prompt, professional and precise. Everything you want in eyebrow threading! I was impressed with Tina, I got my eyebrows tinted for the first time and it looks AWESOME! I then added upper lip to the threading services. Since everything was going so well, I got a henna tattoo by Aarzoo to cover up some surgical scars on my foot.",
    },
    {
      id: 5,
      name: "Shabana",
      message:
        "Unique does a wonderful job with threading of eye brows and lips. I refuse to go elsewhere. Tina always does a wonderful job, exactly what i want!! Tina also does a 5/5 job for sugaring /Brazilian. It was my first time, and she was very professional and comforting.",
    },
    {
      id: 6,
      name: "Muskaan",
      message:
        "So the first woman who serviced me was Sonya, who is now on medical leave. Since Sonya is out, Tina was more than accommodating and really cared to make me comfortable while performing services. These girls are the best!",
    },
  ];

  const getServices = () => {
    let getRes = (res) => {
      setReviews(res?.data?.data);
    };
    callApi(
      "GET",
      routes.getallReviews,
      null,
      setIsLoading,
      getRes,
      (error) => {}
    );
  };

  const reviewSubmit = (name) => {
    if (!auth) return navigate("/login");
    if (reviewValue == "") {
      return RedNotify("Write your review");
    }
    setReviewUpdate(false);
    let getRes = (res) => {
      setReviewUpdate(true);
      if (res?.status == 201) {
        setReviewValue("");
        GreenNotify("Review is Submitted successfully");
      } else {
        RedNotify(res.message);
      }
    };
    callApi(
      "POST",
      routes.postReview,
      {
        name: name,
        review: reviewValue,
      },
      setIsLoading,
      getRes,
      (error) => {}
    );
  };

  useEffect(() => {
    getServices();
  }, [reviewUpdate]);

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(30, "Must be long 30 characters or less")
        .min(3, "Should not accept less than 3 characters")
        .required("Name is required."),
    }),
    onSubmit: (val) => {
      reviewSubmit(val.name);
    },
  });

  return (
    <div className="nova-dashboard-main_container">
      <Loader loading={isloading} />
      <TopBar />
      <NavBar />
      <div className="nova-dashboard-container">
        <div className="nova-reviews-banner_view">
          <div>
            <h1>
              Customer <br />
              <span style={{ color: "#292929" }}>Reviews</span>
            </h1>
          </div>
        </div>
        <div className="nova-reviews-reviews_list_top_view">
          {reviews?.map((item) => {
            return (
              <div key={item.id} className="nova-reviews-single_review_item">
                <h1>{item.name}</h1>
                <div>
                  <h2>{item.review}</h2>
                </div>
              </div>
            );
          })}
        </div>
        <div className="nova-reviews-divider" />

        <form onSubmit={formik.handleSubmit}>
          <div className="nova-reviews-write_review_view">
            <h1>Write Review</h1>
            <div style={{ marginBottom: "5rem" }}>
              <div className="nova-reviews-input_view">
                <input
                  type={"text"}
                  placeholder="Name"
                  id="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
              </div>
              {formik.touched.name && formik.errors.name ? (
                <div className="nova-input-error-container">
                  <img src={errorIcon} alt="error" />
                  <h5>{formik.errors.name}</h5>
                </div>
              ) : null}
            </div>

            <div style={{ marginBottom: "5rem" }}>
              <div className="nova-reviews-textarea_view">
                <textarea
                  placeholder="Type here..."
                  id="review"
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // value={formik.values.message}
                  value={reviewValue}
                  onChange={(e) => setReviewValue(e.target.value)}
                />
              </div>
              {formik.touched.message && formik.errors.message ? (
                <div className="nova-input-error-container">
                  <img src={errorIcon} alt="error" />
                  <h5>{formik.errors.message}</h5>
                </div>
              ) : null}
            </div>

            <Button>Submit</Button>
          </div>
        </form>
        <Footer />
      </div>
    </div>
  );
}
