import React from "react";
import "./product.css";
import { Footer, NavBar, TopBar } from "../../components";
import { getAllParams } from "../../api/params";
import { crossPrice, deleteProduct } from "../../assets";
import AddToCartBtn from "../../components/addTocartBtn/addToCartBtn";

const Product = () => {
  const { product } = getAllParams();
  let item = JSON.parse(product);
  console.log("product of item", item);
  return (
    <div className="nova-dashboard-main_container">
      <TopBar />
      <NavBar />
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
                    <p>Product Name</p>
                  </div>
                  <div className="nova-product-off-container">
                    <p>50% OFF</p>
                  </div>
                </div>
                <div className="nova-product-description">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Imperdiet faucibus
                    et tristique molestie auctor. Lobortis in mauris viverra
                    mauris cum. Arcu quis placerat quisque fermentum id quam
                    vitae phasellus augue. Risus neque urna in morbi mi
                    sollicitudin a.
                  </p>
                </div>
                <div className="nova-product-price-container">
                  <div className="nova-product-cross-price-container">
                    <img src={crossPrice} alt="cross-icon" />
                    <p>$50.00</p>
                  </div>
                  <div className="nova-product-price-product">
                    <p>$25.00</p>
                  </div>
                </div>
                <div className="nova-product-qty-main-container">
                  <div className="nova-product-qty-count-container">
                    <p>-</p>
                  </div>
                  <div className="nova-product-qty-container">
                    <p>1</p>
                  </div>
                  <div className="nova-product-qty-count-container">
                    <p>+</p>
                  </div>
                </div>
                <div className="nova-product-add_to_cart-btn">
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
