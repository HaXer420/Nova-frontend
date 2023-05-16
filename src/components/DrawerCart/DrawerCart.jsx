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

function DrawerCart({ open, setOpen }) {
  const navigate = useNavigate();
  const [isloading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [productArr, setProductArr] = useState([]);
  const [services, setServices] = useState([]);

  const selectProduct = (item, index) => {
    let arr = [...productArr];
    // console.log("item", item);
    arr[index].select = !arr[index].select;
    setProductArr(arr);
    if (arr[index].select) {
      setAmount(amount + item?.amount);
    } else {
      setAmount(amount - item?.amount);
    }
  };

  const selectService = (item, index) => {
    let arr = [...services];
    // console.log("item", item);
    arr[index].select = !arr[index].select;
    setServices(arr);
    if (arr[index].select) {
      setAmount(amount + item?.amount);
    } else {
      setAmount(amount - item?.amount);
    }
  };

  const updateCart = () => {
    let finalService = services
      .filter((item) => item.select == true)
      .map((item) => {
        return { ...item, select: undefined };
      });
    let finalProduct = productArr
      .filter((item) => item.select == true)
      .map((item) => {
        return { ...item, select: undefined };
      });
    console.log("final cart", finalService, finalProduct);
    navigate("/checkout");
    // let body = {
    //   services: finalService,
    //   products: finalProduct,
    // };
    // let getRes = (res) => {
    //   console.log("res of update cart", res);
    // };
    // callApi(
    //   "POST",
    //   routes.createCart,
    //   body,
    //   setIsLoading,
    //   getRes,
    //   (error) => {}
    // );
  };

  const getMyCart = () => {
    let getRes = (res) => {
      // console.log("res of my cart", res);
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
  }, []);

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
      {productArr?.length != 0 ? (
        productArr?.map((item, index) => (
          <ProductInCart
            qty={true}
            mainStyle={{ padding: 0 }}
            textWidth={{ width: "25rem" }}
            item={item}
            onSelect={() => selectProduct(item, index)}
          />
        ))
      ) : (
        <h2 style={{ color: "red" }}>No item Available</h2>
      )}
      <div className="cart-product-information-heading">
        <h2>Service Information</h2>
      </div>
      {services?.map((item, index) => (
        <ServiceInCart
          index={index}
          item={item}
          onSelect={() => selectService(item, index)}
        />
      ))}
      <div className="nova-checkout-btn-container">
        <Button onClick={() => updateCart()}>CheckOut</Button>
      </div>
    </div>
  );
  return (
    <div>
      <Drawer open={open} onClose={() => setOpen(false)} anchor={"right"}>
        {getList()}
      </Drawer>
    </div>
  );
}

export default DrawerCart;
