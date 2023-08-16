import React, { useState } from "react";
import "./navbar.css";
import { close, menu, logo, profileIcon, shoppingCart, tiktok, twitter, facebook,instagram } from "../../assets";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DrawerCart from "../DrawerCart/DrawerCart";
import {
  accessToken,
  cartProducts,
  cartServices,
  refreshToken,
  storId,
  userData,
} from "../../redux/userDataSlice";
import { callApi } from "../../api/apiCaller";
import routes from "../../api/routes";
import { GreenNotify, RedNotify } from "../../helper/utility";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const productsInCart = useSelector((data) => data?.userDataSlice?.cart);
  const productsStore = useSelector((data) => data.userDataSlice.products);
  const serviceStore = useSelector((data) => data.userDataSlice.services);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const showProfile = useSelector((data) => data.userDataSlice.userData);
  // console.log("kkk", showProfile);
  let productsInCart = productsStore?.length + serviceStore?.length;
  const logOut = () => {
    // localStorage.clear();
    let getRes = (res) => {
      if (res.status == 200) {
        GreenNotify(res?.message);
        dispatch(cartProducts([]));
        dispatch(cartServices([]));
        dispatch(userData(null));
        dispatch(refreshToken(""));
        dispatch(accessToken(""));
        dispatch(storId(""));
      } else {
        RedNotify(res?.message);
      }
    };

    let body = {
      device: {
        id: localStorage.getItem("deviceId"),
        deviceToken: "angg",
      },
    };

    callApi("POST", routes.logOut, body, setIsLoading, getRes, (error) => {
      console.log("error", error);
    });
  };
  // console.log("productsInCart", productsInCart);
  const Menu = () => (
    <>
      <div className="nova__navbar-links_text_view">
        <h1
          onClick={() => navigate("/")}
          style={{
            borderBottomStyle:
              window.location.href === "http://localhost:3000/"
                ? "solid"
                : "none",
          }}
        >
          Home
        </h1>
      </div>
      <div className="nova__navbar-links_text_view">
        <h1
          onClick={() => navigate("/aboutus")}
          style={{
            borderBottomStyle:
              window.location.href === "http://localhost:3000/aboutus"
                ? "solid"
                : "none",
          }}
        >
          About Us
        </h1>
      </div>
      <div className="nova__navbar-links_text_view">
        <h1
          onClick={() => navigate("/locationpage")}
          style={{
            borderBottomStyle:
              window.location.href === "http://localhost:3000/locationpage"
                ? "solid"
                : "none",
          }}
        >
          Locations
        </h1>
      </div>
      <div className="nova__navbar-links_text_view">
        <h1
          onClick={() => navigate("/services")}
          style={{
            borderBottomStyle:
              window.location.href === "http://localhost:3000/services"
                ? "solid"
                : "none",
          }}
        >
          Services
        </h1>
      </div>
      <div className="nova__navbar-links_text_view">
        <h1
          onClick={() => navigate("/specials")}
          style={{
            borderBottomStyle:
              window.location.href === "http://localhost:3000/specials"
                ? "solid"
                : "none",
          }}
        >
          Specials
        </h1>
      </div>
      <div className="nova__navbar-links_text_view">
        <h1
          onClick={() => navigate("/gallery")}
          style={{
            borderBottomStyle:
              window.location.href === "http://localhost:3000/gallery"
                ? "solid"
                : "none",
          }}
        >
          Gallery
        </h1>
      </div>
      <div className="nova__navbar-links_text_view">
        <h1
          onClick={() => navigate("/products")}
          style={{
            borderBottomStyle:
              window.location.href === "http://localhost:3000/products"
                ? "solid"
                : "none",
          }}
        >
          Products
        </h1>
      </div>
      <div className="nova__navbar-links_text_view">
        <h1
          onClick={() => navigate("/reviewspage")}
          style={{
            borderBottomStyle:
              window.location.href === "http://localhost:3000/reviewspage"
                ? "solid"
                : "none",
          }}
        >
          Reviews
        </h1>
      </div>
      <div
        style={{
          backgroundColor:
            window.location.href === "http://localhost:3000/bookingpage"
              ? "#ffffff"
              : "#292929",
        }}
        className="nova__navbar-links_book_now_button"
      >
        <h2
          style={{
            color:
              window.location.href === "http://localhost:3000/bookingpage"
                ? "#EE509C"
                : "#ffffff",
          }}
          onClick={() => navigate("/bookingpage")}
        >
          Book Now
        </h2>
      </div>
      <div className="nova__navbar-links_text_view">
        <h1
          onClick={() => navigate("/contactpage")}
          style={{
            borderBottomStyle:
              window.location.href === "http://localhost:3000/contactpage"
                ? "solid"
                : "none",
          }}
        >
          Contact Us
        </h1>
      </div>
      <div className="nova__navbar-links_text_view">
          <h2 className="nova__navbar-links-insta_text_view">
            <a href="https://www.instagram.com/novawaxing1/" target="_blank">
            <img src={instagram} alt="" />
            </a>
          </h2>

          <h2>
            <a
              href="https://www.facebook.com/profile.php?id=100092507547391&mibextid=ZbWKwL"
              target="_blank"
            >
            <img src={facebook} alt="" />
            </a>
          </h2>

          <h2>
            <a href="https://twitter.com/novawaxing1" target="_blank">
            <img src={twitter} alt="" />
            {/* twitter */}
            </a>
          </h2>
          <h2>
            <a href="https://www.tiktok.com/@novawaxing1" target="_blank">
            <img src={tiktok} alt="" />
            </a>
          </h2>
        </div>
    </>
  );

  return (
    <div className="nova__navbar">
      <DrawerCart open={open} setOpen={setOpen} />
      <div className="nova__navbar-links">
        <div className="nova_navbar-links_container">
          <Menu />
        </div>

        <div className="nova_navbar-Profile-main-container">
          {showProfile && (
            <div
              onClick={() => navigate("/profile")}
              className="nova_navbar-profile_view"
            >
              <img alt="" src={showProfile?.image} />
            </div>
          )}
          {/* <div
            onClick={() => setOpen(true)}
            className="nova_navbar-cart-container"
          >
            <img src={shoppingCart} alt="icon" />
            <div className="nova_navbar-cart-item">
              <p> {isNaN(productsInCart) ? 0 : productsInCart}</p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="nova__navbar-menu">
        {toggleMenu ? (
          <img
            alt="Close"
            onClick={() => setToggleMenu(!toggleMenu)}
            src={close}
            className="nova__navbar_closeIcon"
          />
        ) : (
          <img
            alt="Menu"
            onClick={() => setToggleMenu(!toggleMenu)}
            src={menu}
            className="nova__navbar_menuIcon"
          />
        )}
        {toggleMenu && (
          <div className="nova__navbar-menu_container scale-up-center">
            <div className="nova__navbar-menu_container_links">
              <Menu />
            </div>
            <h5>Mon - Sat 10 Am to 8 Pm</h5>
            <h5>Sun 11 Am to 6 Pm</h5>
            <h5>+1 5654 4658 23</h5>

            {showProfile ? (
              <div onClick={() => logOut()} className="nova-navBar_button">
                <h6>LogOut</h6>
              </div>
            ) : (
              <div
                onClick={() => navigate("/login")}
                className="nova-navBar_button"
              >
                <h6>Login</h6>
              </div>
            )}

            <div className="nova-navBar_button">
              <h6>Sign Up</h6>
            </div>
          </div>
        )}
        <div className="nova_navbar-logo_view">
          <img alt="" src={logo} />
        </div>
        <div className="nova_navbar-Profile-main-container">
          {showProfile && (
            <div
              onClick={() => navigate("/profile")}
              className="nova_navbar-profile_view"
            >
              <img alt="" src={showProfile?.image} />
            </div>
          )}
          {/* <div
            onClick={() => setOpen(true)}
            className="nova_navbar-cart-container"
          >
            <img src={shoppingCart} alt="icon" />
            <div className="nova_navbar-cart-item">
              <p>{isNaN(productsInCart) ? 0 : productsInCart}</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
