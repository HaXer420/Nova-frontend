import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteProduct,
  productOne,
  productThree,
  productTwo,
  crossPrice
} from "../../assets";
import { Footer, NavBar, TopBar } from "../../components";
import "./products.css";
import { setParam } from "../../api/params";
import { callApi } from "../../api/apiCaller";
import routes from "../../api/routes";
import Loader from "../../components/loader/loader";

export default function Products() {
  const navigate = useNavigate();
  const [isloading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    let getRes = (res) => {
      //console.log("res of get product", res);
      setProducts(res?.data);
    };
    callApi(
      "GET",
      `${routes.getProducts}100`,
      null,
      setIsLoading,
      getRes,
      (error) => {}
    );
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="nova-dashboard-main_container">
      <TopBar />
      <NavBar />
      <Loader loading={isloading} />
      <div className="nova-dashboard-container">
        <div className="nova-services-main_view">
          <h1>Products</h1>
          <div className="nova-services-top_view">
            {products?.map((item) => {
              console.log('products',products);
              return (
                <div
                  key={item.id}
                  className="nova-services-single_service_view"
                >
                  <img
                    onClick={() =>
                      navigate(
                        `/product?${setParam({
                          product: JSON.stringify(item),
                        })}`
                      )
                    }
                    alt=""
                    src={item.image}
                  />

                  <div className="nova-services-single_service_title_view">
                    {
                      console.log('item',item)
                    }
                    <h2>{item.title}</h2>
                    <h3>{item.offValue}</h3>
                    <div className="nova-product-off-container">
                    <p style={item?.price ? { marginLeft: '20px' } : {marginLeft: '0px'}}>
                      {!item?.price ? <></> : `${item?.salepercentage}% OFF`}
                    </p>
                  </div>
                  </div>

                  <h4>
                    {item?.description.length > 30
                      ? item?.description.substring(0, 30) + "..."
                      : item?.description}{" "}
                    <span
                      onClick={() =>
                        navigate(
                          `/product?${setParam({
                            product: JSON.stringify(item),
                          })}`
                        )
                      }
                      style={{ color: "#EE509C", fontWeight: "bold" }}
                    >
                      Read more
                    </span>
                  </h4>
                  <div className="nova-products-single_product_price_view">
                    {
                      console.log(item?.salePrice)
                    }
                  {item?.price ? (
                    <div className="nova-product-cross-price-container">
                      <img src={crossPrice} alt="cross-icon" />
                      <p>${item?.price}.00</p>
                    </div>
                  ) : <></>}
                    <div className="nova-product-price-product">
                    <p>${item?.salePrice}</p>
                  </div>
                    <div
                      onClick={() =>
                        navigate(
                          `/product?${setParam({
                            product: JSON.stringify(item),
                          })}`
                        )
                      }
                      className="add_to-cart-btn"
                    >
                      <p>Add to Cart</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
