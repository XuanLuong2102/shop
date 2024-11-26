import { useDispatch, useSelector } from "react-redux";
import CartList from "./cartList";
import "./style.scss"
import {  HeaderShrink } from "../../../layout/layoutDefault/changeHeader";
import banner from "../../../component/img/leaf.png"
import { Breadcrumb } from "antd";
import { NavLink } from "react-router-dom";

function ViewCart() {
 
  HeaderShrink();
 
  return (
    <>
      <div className="view-cart">
        <div className="view-cart__title">
        <img src={banner} />
          <h2 >Cart </h2>
          <Breadcrumb
          items={[
            {
              title: <NavLink to="/">Home</NavLink>,
            },
            {
              title: <NavLink to="/view-cart">Cart</NavLink>,
            },
           
          ]}
          className="breadcrumb"
        />
        </div>

        <CartList />
        
      </div>
    </>
  );
}
export default ViewCart;
