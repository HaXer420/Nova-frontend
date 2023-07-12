import React, { useState, useEffect } from "react";
import { Drawer } from "@material-ui/core";
import "./drawerCart.css";
import ProductInCart from "../productInCart/productInCart";
import { closeIconPink, productOne, productTwo } from "../../assets";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import routes from "../../api/routes";
import { callApi } from "../../api/apiCaller";
import ServiceInCart from "../serviceInCart/serviceInCart";
import { useDispatch, useSelector } from "react-redux";
import {
  cartProducts,
  cartServices,
  productInCart,
} from "../../redux/userDataSlice";
import Loader from "../loader/loader";
import { RedNotify } from "../../helper/utility";
import GuestModal from "../guestModal/guestModal";

function DrawerCart({ open, setOpen }) {
  const navigate = useNavigate();
  const productsStore = useSelector((data) => data.userDataSlice.products);
  const serviceStore = useSelector((data) => data.userDataSlice.services);
  const [showModal, setShowModal] = useState(false);
  const [openM, setOpenM] = React.useState(false);

  const auth = useSelector((data) => data.userDataSlice.userData);
  const [isloading, setIsLoading] = useState(false);
  const [updateMyCart, setUpdateMyCart] = useState(false);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [productArr, setProductArr] = useState([]);
  const [deleteProduct, setDeleteProduct] = useState([]);
  const [deleteService, setDeleteService] = useState([]);
  const [services, setServices] = useState([]);
  const [response, setResponse] = useState(null);

  let productTotalPrice = productsStore
    ?.map((ob) => ob.price)
    ?.reduce((a, b) => a + b, 0);
  let servicesTotalPrice = serviceStore
    ?.map((obj) => obj.amount)
    ?.reduce((a, b) => a + b, 0);

  let totalPrice = productTotalPrice + servicesTotalPrice;
  // console.log("serviceStore", serviceStore);

  const selectProduct = (item, index) => {
    let newArr = productsStore.filter((obj, i) => i !== index);

    dispatch(cartProducts(newArr));
  };

  const selectService = (item, index) => {
    let newArr = serviceStore.filter((obj, i) => i !== index);

    dispatch(cartServices(newArr));
  };

  const asGuest = () => {
    let getRes = (res) => {
      setOpenM(false);
      setOpen(false);
      navigate("/checkout");
      // console.log("res", res);
    };
    callApi(
      "POST",
      routes.guestUser,
      null,
      setIsLoading,
      getRes,
      (error) => {}
    );
  };

  const updateCart = () => {
    if (serviceStore?.length == 0 && productsStore?.length == 0)
      return RedNotify("Your Cart is empty");

    navigate("/checkout");
    setOpen(false);
  };
  const handleOpen = () => {
    setOpenM(true);
    // setOpen(false);
  };
  const handleClose = () => setOpenM(false);

  let loginForCheckOut = true;

  const login = () => {
    handleClose();
    navigate("/login", {
      state: {
        loginForCheckOut: true,
      },
    });
  };

  const getList = () => (
    <div
      // onClick={() => setOpen(true)}
      className="nova-bucket-container"
      // style={{ width: 670 }}
    >
      <GuestModal
        open={openM}
        login={login}
        handleClose={handleClose}
        asGuest={asGuest}
      />
      <div onClick={() => setOpen(false)} className="close-icon-drawer">
        <img src={closeIconPink} alt="close-icon-pink" />
      </div>
      <div className="nova-bucket-total-cart">
        <h1>Your Cart</h1>
        <p>${totalPrice}</p>
      </div>
      <div className="cart-product-information-heading">
        <h2>Product Information</h2>
      </div>
      {productsStore?.length == 0 ? (
        <div className="empty-data-message">
          <h2>No Product add to cart </h2>
        </div>
      ) : (
        productsStore?.map((item, index) => (
          <ProductInCart
            check={true}
            qty={true}
            mainStyle={{ padding: 0 }}
            textWidth={{ width: "25rem" }}
            item={item}
            onSelect={() => selectProduct(item, index)}
          />
        ))
      )}
      <div className="cart-product-information-heading">
        <h2>Service Information</h2>
      </div>
      {serviceStore?.length == 0 ? (
        <div className="empty-data-message">
          <h2>No Service is selected </h2>
        </div>
      ) : (
        serviceStore?.map((item, index) => (
          <ServiceInCart
            check={true}
            index={index}
            item={item}
            onSelect={() => selectService(item, index)}
          />
        ))
      )}
      <div className="nova-checkout-btn-container">
        <Button onClick={() => updateCart()}>CheckOut</Button>
      </div>
    </div>
  );
  return (
    <div>
      <Drawer open={open} onClose={() => setOpen(false)} anchor={"right"}>
        <Loader
          mainContainer={{
            minHeight: "100%",
            position: "fixed",
            width: "100vh",
          }}
          loading={isloading}
        />
        {getList()}
      </Drawer>
    </div>
  );
}

export default DrawerCart;
