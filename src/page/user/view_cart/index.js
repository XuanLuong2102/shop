import { useDispatch, useSelector } from "react-redux";
import CartList from "./cartList";

function ViewCart() {
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => {
    const price = (
      (item.info.price * (100 - item.info.discountPercentage)) /
      100
    ).toFixed(2);
    return sum + price * item.quantity;
  }, 0);
  return (
    <>
      <div className="cart">
        <div className="cart__title">
          <h2>Giỏ hàng </h2>
        </div>

        <CartList />
        <div className="cart__total">
          Tổng tiền: <span>{total.toFixed(2)}$</span>
        </div>
      </div>
    </>
  );
}
export default ViewCart;
