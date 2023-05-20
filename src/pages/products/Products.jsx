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
  const productArray = [
    {
      id: 1,
      title: "Product Name",
      offValue: "50%OFF",
      des: "Waxing is a method of hair removal that involves applying hot.",
      oldPrice: "$50.00",
      price: "$25.00",
      image: productOne,
    },
    {
      id: 2,
      title: "Product Name",
      offValue: "50%OFF",
      des: "Waxing is a method of hair removal that involves applying hot.",
      oldPrice: "$50.00",
      price: "$25.00",
      image: productTwo,
    },
    {
      id: 3,
      title: "Product Name",
      offValue: "50%OFF",
      des: "Waxing is a method of hair removal that involves applying hot.",
      oldPrice: "$50.00",
      price: "$25.00",
      image: productThree,
    },
    {
      id: 4,
      title: "Product Name",
      offValue: "50%OFF",
      des: "Waxing is a method of hair removal that involves applying hot.",
      oldPrice: "$50.00",
      price: "$25.00",
      image: productThree,
    },
    {
      id: 5,
      title: "Product Name",
      offValue: "50%OFF",
      des: "Waxing is a method of hair removal that involves applying hot.",
      oldPrice: "$50.00",
      price: "$25.00",
      image: productTwo,
    },
    {
      id: 6,
      title: "Product Name",
      offValue: "50%OFF",
      des: "Waxing is a method of hair removal that involves applying hot.",
      oldPrice: "$50.00",
      price: "$25.00",
      image: productOne,
    },
  ];

  const getAllProducts = () => {
    let getRes = (res) => {
      console.log("res of get product", res);
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
                  <img alt="" src={item.image} />
                  <div className="nova-services-single_service_title_view">
                    <h2>{item.title}</h2>
                    <h3>{item.offValue}</h3>
                  </div>
                  <h4>
                    {item?.description}
                    <span style={{ color: "#EE509C", fontWeight: "bold" }}>
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
