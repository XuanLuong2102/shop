import { useDispatch, useSelector } from "react-redux";
import { deleteItem, updateQuantity } from "../../../actions/cart";
import { useRef } from "react";
import { Col, Row } from "antd";

function CartList() {
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const inputRef = useRef([]);

  const total = cart.reduce((sum, item) => {
    const price = (
      (item.info.price * (100 - item.info.discountPercentage)) /
      100
    ).toFixed(2);
    return sum + price * item.quantity;
  }, 0);

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
      <div className="container">
        <Row className="view-cart__main">
          <Col
            className="view-cart__list"
            xl={16}
            lg={16}
            md={24}
            sm={24}
            xs={24}
          >
            <Row className="view-cart__list__header">
              <Col
                className="view-cart__list__header__item"
                xl={15}
                lg={15}
                md={15}
                sm={15}
                xs={15}
              >
                {" "}
                Product
              </Col>
              <Col
                className="view-cart__list__header__item"
                xl={3}
                lg={3}
                md={3}
                sm={3}
                xs={3}
              >
                {" "}
                price
              </Col>
              <Col
                className="view-cart__list__header__item"
                xl={3}
                lg={3}
                md={3}
                sm={3}
                xs={3}
              >
                {" "}
                quantity
              </Col>
              <Col
                className="view-cart__list__header__item"
                xl={3}
                lg={3}
                md={3}
                sm={3}
                xs={3}
              >
                {" "}
                total
              </Col>
            </Row>
            {cart.map((item) => (
              <Row className="view-cart__product">
                <Col
                  className="view-cart__product__image"
                  xl={2}
                  lg={2}
                  md={2}
                  sm={2}
                  xs={2}
                ></Col>
                <Col
                  className="view-cart__product__image"
                  xl={3}
                  lg={3}
                  md={3}
                  sm={3}
                  xs={3}
                >
                  <img src={item.info.thumbnail} alt={item.info.title} />
                </Col>

                <Col
                  className="view-cart__product__title"
                  xl={10}
                  lg={10}
                  md={10}
                  sm={10}
                  xs={10}
                >
                  {item.info.title}
                </Col>
                <Col
                  className="view-cart__product__price"
                  xl={3}
                  lg={3}
                  md={3}
                  sm={3}
                  xs={3}
                >
                  {(
                    (item.info.price * (100 - item.info.discountPercentage)) /
                    100
                  ).toFixed(2)}
                  $
                </Col>

                <Col
                  className="view-cart__product__quantity"
                  xl={3}
                  lg={3}
                  md={3}
                  sm={3}
                  xs={3}
                >
                  <button
                    className="button"
                    onClick={() => {
                      handleDown(item);
                    }}
                  >
                    -
                  </button>
                  <input
                    ref={(el) => (inputRef.current[item.id] = el)}
                    className="view-cart__product__quantity--input"
                    defaultValue={item.quantity}
                  />
                  <button
                    className="button"
                    onClick={() => {
                      handleUp(item);
                    }}
                  >
                    +
                  </button>
                </Col>
                <Col
                  className="view-cart__product__total"
                  xl={3}
                  lg={3}
                  md={3}
                  sm={3}
                  xs={3}
                >
                  {(
                    (item.info.price * (100 - item.info.discountPercentage)) /
                    100 * item.quantity
                  ).toFixed(2)}
                  $
                </Col>
                {/* <button
                  className="button button--delete"
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  Xóa
                </button> */}
              </Row>
            ))}
          </Col>
          <Col
            className="view-cart__checkout"
            xl={8}
            lg={8}
            md={8}
            sm={24}
            xs={24}
          >
            <div className="view-cart__total">
              Tổng tiền: <span>{total.toFixed(2)}$</span>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default CartList;
