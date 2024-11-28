import { useSelector, useDispatch } from "react-redux";
import { addToCart, updateQuantity } from "../../actions/cart";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Rate } from "antd";
import { Link, NavLink } from "react-router-dom";

function ProductItem(props) {
  const { item } = props;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);

  const handleAddToCart = (e) => {
    let target_parent = e.target.closest(".product__item");

    // Lấy vị trí giỏ hàng (SVG hoặc nút trong giỏ)
    let header_cart = document.querySelector(".header_cart svg");
    let img = target_parent.querySelector("img"); // Lấy ảnh sản phẩm

  
    // Tạo bản sao của ảnh
    let flying_img = img.cloneNode();
    flying_img.classList.add("fly-to-cart"); // Thêm lớp CSS hiệu ứng
  
    // Gắn ảnh vào phần tử cha
    target_parent.appendChild(flying_img);
  
    // Lấy vị trí hiện tại của ảnh sản phẩm và giỏ hàng
    const imgRect = img.getBoundingClientRect();
    const cartRect = header_cart.getBoundingClientRect();
  
    // Gắn giá trị vị trí vào CSS thông qua custom properties
    flying_img.style.setProperty("--left", `${(imgRect.left).toFixed(2)}px`);
    flying_img.style.setProperty("--top", `${(imgRect.top).toFixed(2)}px`);
    flying_img.style.setProperty("--height", `${(imgRect.height).toFixed(2)}px`);
    flying_img.style.setProperty("--width", `${(imgRect.width).toFixed(2)}px`);
    flying_img.style.setProperty("--topcart", `${(cartRect.top - (cartRect.height/2 + imgRect.height/2)).toFixed(2)}px`);
    flying_img.style.setProperty("--leftcart", `${(cartRect.left + cartRect.width*2 -  imgRect.width/2).toFixed(2)}px`);
    
  
    // Hiệu ứng bay
    setTimeout(() => {
      flying_img.remove(); // Xóa ảnh sau khi hoàn thành hiệu ứng
    }, 1000);
  
    // Cập nhật giỏ hàng
    if (cart.some((itemCart) => itemCart.id === item.id)) {
      setTimeout(() => {
        dispatch(updateQuantity(item.id));
      }, 1100);
    } else {
      setTimeout(() => {
        dispatch(addToCart(item.id, item));
      }, 1100);
    }
};
  return (
    <>
      <div className="product__item">
        <div>
          <div className="product__image">
          <img  src={item.thumbnail} />
          <Link to={`product-detail/${item.id}`} className="product__view">View</Link>
          </div>
        
        <h3 className="product__title">{item.title}</h3>
        <div className="product__infor">
          <div className="price">
            <div className="price-new">
              {((item.price * (100 - item.discountPercentage)) / 100).toFixed(2)}
              $
            </div>
            <div className="price-old ">{item.price}$</div>
          </div>
          <button onClick={handleAddToCart}>
            {" "}
            <HiOutlineShoppingCart />
          </button>
        </div>
        <div className="rate">
          <Rate disabled allowHalf value={item.rating} /> ({item.rating.toFixed(1)})
        </div>
        </div>
      </div>
    </>
  );
}
export default ProductItem;
