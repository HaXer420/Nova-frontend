import React from "react";

const AddToCartBtn = ({ onClick }) => {
  return (
    <div onClick={onClick} className="add_to-cart-btn">
      <p>Add to Cart</p>
    </div>
  );
};

export default AddToCartBtn;
