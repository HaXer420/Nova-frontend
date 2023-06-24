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
import { useDispatch } from "react-redux";
import { productInCart } from "../../redux/userDataSlice";
import Loader from "../loader/loader";
import { RedNotify } from "../../helper/utility";

function DrawerCart({ open, setOpen }) {
  const navigate = useNavigate();
  const [isloading, setIsLoading] = useState(false);
  const [updateMyCart, setUpdateMyCart] = useState(false);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [productArr, setProductArr] = useState([]);
  const [deleteProduct, setDeleteProduct] = useState([]);
  const [deleteService, setDeleteService] = useState([]);
  const [services, setServices] = useState([]);
  const [response, setResponse] = useState(null);

  const selectProduct = (item, index) => {
    setUpdateMyCart(false);
    let body = {
      services: [],
      products: [item?._id],
    };
    let getRes = (res) => {
      setUpdateMyCart(true);

      console.log("res of update cart", res);
    };

    callApi("PATCH", routes.updateCart, body, setIsLoading, getRes, (error) => {
      console.log("error", error);
    });

    // let arr = [...productArr];
    // console.log("item", item);
    // arr[index].select = !arr[index].select;
    // setProductArr(arr);
    // if (arr[index].select) {
    //   setAmount(amount + item?.amount);
    // } else {
    //   setAmount(amount - item?.amount);
    // }
    // setDeleteProduct((val) =>
    //   val.includes(item?._id)
    //     ? val.filter((val) => val !== item?._id)
    //     : [item._id, ...deleteProduct]
    // );
  };

  const selectService = (item, index) => {
    setUpdateMyCart(false);
    let body = {
      services: [item?._id],
      products: [],
    };
    let getRes = (res) => {
      setUpdateMyCart(true);

      console.log("res of update cart", res);
    };

    callApi("PATCH", routes.updateCart, body, setIsLoading, getRes, (error) => {
      console.log("error", error);
    });

    // let arr = [...services];
    // console.log("item", item);
    // arr[index].select = !arr[index].select;
    // setServices(arr);
    // if (arr[index].select) {
    //   setAmount(amount + item?.amount);
    // } else {
    //   setAmount(amount - item?.amount);
    // }
    // setDeleteService((val) =>
    //   val.includes(item?._id)
    //     ? val.filter((val) => val !== item?._id)
    //     : [item?._id, ...deleteService]
    // );
  };

  const updateCart = () => {
    if (response?.message == "Empty Cart")
      return RedNotify("Your Cart is empty");
    navigate("/checkout");
    //console.log("final cart", deleteProduct, deleteService);
    // if (
    //   services.length == deleteService.length &&
    //   productArr.length == deleteProduct.length
    // )
    //   return RedNotify("For Checkout select atleast one product or services. ");
    // if (services == undefined && productArr == undefined)
    //   return RedNotify("You can not checkout , your cart is empty");
    // let body = {
    //   services: deleteService,
    //   products: deleteProduct,
    // };
    // let getRes = (res) => {
    //   navigate("/checkout");
    //   console.log("res of update cart", res);
    // };
    // callApi("PATCH", routes.updateCart, body, setIsLoading, getRes, (error) => {
    //   console.log("error", error);
    // });
  };

  const getMyCart = () => {
    let getRes = (res) => {
      console.log("res of my cart", res);
      setResponse(res);
      setProductArr(
        res?.data?.mycart?.products?.map((item) => {
          return { ...item, select: true };
        })
      );
      dispatch(
        productInCart(
          res?.data?.mycart?.products?.length +
            res?.data?.mycart?.services?.length
        )
      );
      setAmount(res?.data?.mycart?.amount);
      setServices(
        res?.data?.mycart?.services?.map((item) => {
          return { ...item, select: true };
        })
      );
    };
    callApi("GET", routes.myCart, null, setIsLoading, getRes, (error) => {});
  };

  useEffect(() => {
    getMyCart();
  }, [open, updateMyCart]);

  const getList = () => (
    <div
      // onClick={() => setOpen(true)}
      className="nova-bucket-container"
      // style={{ width: 670 }}
    >
      <div onClick={() => setOpen(false)} className="close-icon-drawer">
        <img src={closeIconPink} alt="close-icon-pink" />
      </div>
      <div className="nova-bucket-total-cart">
        <h1>Your Cart</h1>
        <p>${amount}</p>
      </div>
      <div className="cart-product-information-heading">
        <h2>Product Information</h2>
      </div>
      {productArr?.length == 0 || response?.message == "Empty Cart" ? (
        <div className="empty-data-message">
          <h2>No Product add to cart </h2>
        </div>
      ) : (
        productArr?.map((item, index) => (
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
      {services?.length == 0 || response?.message == "Empty Cart" ? (
        <div className="empty-data-message">
          <h2>No Service is selected </h2>
        </div>
      ) : (
        services?.map((item, index) => (
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
