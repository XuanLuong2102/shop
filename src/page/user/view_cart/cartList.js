import { useDispatch, useSelector } from "react-redux";
import { deleteAllItem, deleteItem, updateQuantity } from "../../actions/cart"
import { useRef } from "react";

function CartList() {
    const cart = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    const inputRef = useRef([]);

    
    const handleDown = (item) => {

        if (item.quantity > 1) {
            dispatch(updateQuantity(item.id, -1));
            inputRef.current[item.id].value = parseInt(inputRef.current[item.id].value) - 1;

        }
    }
    const handleUp = (item) => {
        
        dispatch(updateQuantity(item.id));  
        inputRef.current[item.id].value = parseInt(inputRef.current[item.id].value)  + 1;
    }
    const handleDelete = (id) => {
        dispatch(deleteItem(id));
    }
    
    return (
        <>
            <div className="cart__product__list">
                {cart.map(item => (
                    <div className="cart__product__item">
                        <div className="cart__product__image">
                            <img src={item.info.thumbnail} alt={item.info.title} />
                        </div>
                        <div className="cart__product__content">
                            <h4 className="cart__product__title">{item.info.title}</h4>
                            <div className="cart__product__price">{((item.info.price * (100 - item.info.discountPercentage) / 100).toFixed(2))}$
                            </div>

                        </div>
                        <div className="cart__product__quantity">
                            <button className="button" onClick={() => {
                                handleDown(item);
                            }} >-</button>
                            <input ref={el => inputRef.current[item.id] = el} className="cart__product__quantity--input" defaultValue={item.quantity} />
                            <button className="button" onClick={() => {
                                handleUp(item);
                            }}>+</button>
                        </div>
                        <button className="button button--delete" onClick={()=>{handleDelete(item.id);}} >Xóa</button>
                    </div>
                ))}

            </div>
        </>
    )
}
export default CartList;