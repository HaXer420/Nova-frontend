import React, { useState, useEffect } from "react";
import "./serviceSelectModal.css";
import { callApi } from "../../api/apiCaller";
import routes from "../../api/routes";
import ServiceInCart from "../serviceInCart/serviceInCart";
import { useDispatch } from "react-redux";
import { productInCart } from "../../redux/userDataSlice";
import Loader from "../loader/loader";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { RedNotify } from "../../helper/utility";

const ServiceSelectModal = ({ setServiceModal }) => {
  const [isloading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [serviceAmount, setServiceAmount] = useState(0);
  const [deleteService, setDeleteService] = useState([]);

  const selectService = (item, index) => {
    let arr = [...services];
    //console.log("item", item);
    arr[index].select = !arr[index].select;
    setServices(arr);
    if (arr[index].select) {
      setServiceAmount(serviceAmount + item?.amount);
    } else {
      setServiceAmount(serviceAmount - item?.amount);
    }
    setDeleteService((val) =>
      val.includes(item?._id)
        ? val.filter((val) => val !== item?._id)
        : [item?._id, ...deleteService]
    );
  };

  const updateCart = () => {
    if (deleteService.length == services.length)
      return RedNotify("Select services for checkout");
    let body = {
      services: deleteService,
      products: [],
    };

    let getRes = (res) => {
      console.log("res of update cart", res);
      setServiceModal(false);
      navigate("/checkout");
    };
    callApi("PATCH", routes.updateCart, body, setIsLoading, getRes, (error) => {
      console.log("error", error);
    });
  };

  const getMyCart = () => {
    let getRes = (res) => {
      console.log("res of my cart", res);

      dispatch(
        productInCart(
          res?.data?.mycart?.products?.length +
            res?.data?.mycart?.services?.length
        )
      );
      setServiceAmount(res?.data?.mycart?.servicesamount);

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

  return (
    <div className="nova-after-confirm-modal-mainContainer">
      <Loader loading={isloading} />

      <div className="nova-select-service-container">
        <div className="service-amount-container">
          <div className="service-amount-sub-container">
            <h3>Total Prices Of Services:</h3>
            <p style={{ marginLeft: "2rem" }}>${serviceAmount}</p>
          </div>
          <div></div>
        </div>
        {services?.length !== 0 ? (
          services?.map((item, index) => (
            <ServiceInCart
              check={true}
              index={index}
              item={item}
              onSelect={() => selectService(item, index)}
            />
          ))
        ) : (
          <div className="empty-data-message">
            <h2>No Service is selected </h2>
          </div>
        )}
        <div className="service-in-modal-btn-container">
          <Button onClick={updateCart}>CheckOut</Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSelectModal;
