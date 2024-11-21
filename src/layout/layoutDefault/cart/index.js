import "./style.scss";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import {
  deleteAllItem,
  deleteItem,
  updateQuantity,
} from "../../../actions/cart";

function MiniCartHeader() {
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => {
    const price = (
      (item.info.price * (100 - item.info.discountPercentage)) /
      100
    ).toFixed(2);
    return sum + price * item.quantity;
  }, 0);

  const inputRef = useRef([]);

  const handleDown = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity(item.id, -1));
      inputRef.current[item.id].value =
        parseInt(inputRef.current[item.id].value) - 1;
    }
  };
  const handleUp = (item) => {
    dispatch(updateQuantity(item.id));
    inputRef.current[item.id].value =
      parseInt(inputRef.current[item.id].value) + 1;
  };
  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };
  
  return (
    <>
      <div class="mini-cart-inner">
        <h5 class="mini-cart__heading">Shopping Cart</h5>
        <div class="mini-cart__content">
          <ul class="mini-cart__list">
            {cart.map((item) => (
              <li class="mini-cart__product">
                <div
                  class="remove-from-cart remove"
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  <IoClose />
                </div>
                <div class="mini-cart__product__image">
                  <img src={item.info.thumbnail} alt={item.info.title} />
                </div>
                <div class="mini-cart__product__content">
                  <h5 class="mini-cart__product__title" href="">
                    {item.info.title}
                  </h5>
                  <span class="mini-cart__product__quantity">
                    <button className="button" onClick={() => {handleDown(item)}}>
                      -
                    </button>
                    <input ref={(el) => (inputRef.current[item.id] = el)} className="cart__product__quantity--input"
                      value={item.quantity}
                    />
                    <button className="button" onClick={() => { handleUp(item); }} >
                      +
                    </button>
                    {" "}x{" "}
                    {((item.info.price * (100 - item.info.discountPercentage)) / 100).toFixed(2)}$
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div class="mini-cart__total">
            <span>Subtotal</span>
            <span class="ammount">{total.toFixed(2)}$</span>
          </div>
          <div class="mini-cart__buttons">
            <div class="btn btn-fullwidth btn-style-1">
              View Cart
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MiniCartHeader;
