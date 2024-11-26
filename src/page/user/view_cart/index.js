import { useDispatch, useSelector } from "react-redux";
import CartList from "./cartList";
import "./style.scss";
import { HeaderShrink } from "../../../layout/layoutDefault/changeHeader";
import banner from "../../../component/img/leaf.png";
import { Breadcrumb } from "antd";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function ViewCart() {
  const cart = useSelector(state => state.cartReducer);
  useEffect(() => {
    HeaderShrink();
  }, []);

  return (
    <>
      <div className="view-cart">
        <div className="view-cart__title">
          <img src={banner} />
          <h2>Cart </h2>
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
        {cart.length > 0 ? (
          <>
            <CartList />
          </>
        ) : (
          <>
            <div>Giỏ hàng trống</div>
          </>
        )}
      </div>
    </>
  );
}
export default ViewCart;
