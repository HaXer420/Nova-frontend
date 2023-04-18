import React, { useState } from "react";
import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";
import "./drawerCart.css";
import ProductInCart from "../productInCart/productInCart";
import { productOne, productTwo } from "../../assets";

function DrawerCart({ open, setOpen }) {
  const [productArr, setProductArr] = useState([
    {
      image: productOne,
      title: "Wax",
      des: "Waxing is a method of hair removal that involves applying hot",
      price: "$25",
      select: false,
    },
    {
      image: productTwo,
      title: "Wax",
      des: "Waxing is a method of hair removal that involves applying hot",
      price: "$25",
      select: true,
    },
  ]);

  const selectProduct = (index) => {
    let arr = [...productArr];
    arr[index].select = !arr[index].select;
    setProductArr(arr);
  };

  const getList = () => (
    <div
      // onClick={() => setOpen(true)}
      className="nova-bucket-container"
      style={{ width: 670 }}
    >
      <div className="nova-bucket-total-cart">
        <h1>Your Cart</h1>
        <p>Total $50</p>
      </div>
      {productArr.map((item, index) => (
        <ProductInCart
          qty={true}
          mainStyle={{ padding: 0 }}
          textWidth={{ width: "25rem" }}
          item={item}
          onSelect={() => selectProduct(index)}
        />
      ))}
      <div className="nova-checkout-btn-container">
        <Button>Checkout</Button>
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
