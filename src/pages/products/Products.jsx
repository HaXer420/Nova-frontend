import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteProduct,
  productOne,
  productThree,
  productTwo,
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
                    <h2>{item.title}</h2>
                    <h3>{item.offValue}</h3>
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
                    {item?.salePrice && (
                      <div className="nova-products-single_product_cross_price_view">
                        <img src={deleteProduct} />
                        <h5>${item?.price}.00</h5>
                      </div>
                    )}
                    <h5>${item?.salePrice ? item?.salePrice : item?.price}</h5>
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
                      <p>Details</p>
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
