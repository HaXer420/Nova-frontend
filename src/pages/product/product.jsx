import React, { useState } from "react";
import "./product.css";
import { Footer, NavBar, TopBar } from "../../components";
import { getAllParams } from "../../api/params";
import { crossPrice, deleteProduct } from "../../assets";
import AddToCartBtn from "../../components/addTocartBtn/addToCartBtn";
import { GreenNotify, RedNotify } from "../../helper/utility";
import routes from "../../api/routes";
import { callApi } from "../../api/apiCaller";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/loader";
import { cartProducts, productInCart } from "../../redux/userDataSlice";
import { json, useNavigate } from "react-router-dom";

const Product = () => {
  const { product } = getAllParams();
  let item = JSON.parse(product);

  let setPrice = item?.salePrice ? item?.salePrice : item?.price;
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(setPrice);
  const auth = useSelector((data) => data.userDataSlice.userData);
  const productsStore = useSelector((data) => data.userDataSlice.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isloading, setIsLoading] = useState(false);

  const handleCountChange = (change) => {
    const newCount = count + change;
    if (newCount >= 1 && newCount <= 20) {
      setCount(newCount);

      setTotalPrice(newCount * setPrice);
    }
  };

  const addToCartProduct = () => {
    let arr = JSON.parse(JSON.stringify([...productsStore]));

    let product = {
      product: item,
      quantity: count,
      price: totalPrice,
    };
    // arr.push(product);
    let p = arr.find((p) => {
      return p.product.title == item.title;
    });
    if (p) {
      p.quantity = count == 1 ? p.quantity + 1 : p.quantity + count;
      p.price = !p?.product?.isSale
        ? p.product.price * p.quantity
        : p.product.salePrice * p.quantity;
      GreenNotify("Product quantity is update in Cart");
    } else {
      arr.push(product);
      GreenNotify("Product is added to Cart");
    }

    // console.log("product arr", arr);
    dispatch(cartProducts(arr));

    // if (!auth) return navigate("/login");
    // let arr = [];
    // let product = {
    //   product: item?._id,
    //   quantity: count,
    //   price: totalPrice,
    // };
    // arr.push(product);
    // let body = {
    //   products: arr,
    // };
    // let getRes = (res) => {
    //   if (res?.status == 201) {
    //     console.log("res of product", res?.data);
    //     GreenNotify("Your Product is add to Cart");
    //     dispatch(productInCart(res?.size));
    //   } else {
    //     RedNotify(res?.message);
    //   }
    //   //console.log("res of create cart", es);
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

  return (
    <div className="nova-dashboard-main_container">
      <TopBar />
      <NavBar />
      <Loader loading={isloading} />
      <div className="nova-dashboard-container">
        <div className="nova-services-main_view">
          <h1>Product</h1>
          <div className="nova-product-main-container">
            <div className="nova-product-container">
              <div className="nova-product-main-img-container">
                <img src={item.image} alt="" />
              </div>
              <div className="nova-product-details-main-container">
                <div className="nova-product-name-main-container">
                  <div className="nova-product-nam-container">
                    <p>{item?.title}</p>
                  </div>
                  <div className="nova-product-off-container">
                    <p>{item?.salepercentage?.toFixed(2)}% OFF</p>
                  </div>
                </div>
                <div className="nova-product-description">
                  <p>{item?.description}</p>
                </div>
                <div className="nova-product-price-container">
                  {item?.salePrice && (
                    <div className="nova-product-cross-price-container">
                      <img src={crossPrice} alt="cross-icon" />
                      <p>${item?.price}.00</p>
                    </div>
                  )}
                  <div className="nova-product-price-product">
                    <p>${totalPrice}</p>
                  </div>
                </div>
                <div className="nova-product-qty-main-container">
                  <div
                    onClick={() => handleCountChange(-1)}
                    className="nova-product-qty-count-container"
                  >
                    <p>-</p>
                  </div>
                  <div className="nova-product-qty-container">
                    <p>{count}</p>
                  </div>
                  <div
                    onClick={() => handleCountChange(1)}
                    className="nova-product-qty-count-container"
                  >
                    <p>+</p>
                  </div>
                </div>
                <div
                  onClick={addToCartProduct}
                  className="nova-product-add_to_cart-btn"
                >
                  <p>Add to Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Product;
