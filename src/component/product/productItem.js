import { useSelector, useDispatch } from "react-redux";
import { addToCart, updateQuantity } from "../../actions/cart";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Rate } from "antd";

function ProductItem(props) {
  const { item } = props;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);

  const handleAddToCart = (e) => {
    let target_parent = e.target.closest(".product__item");

    // Lấy vị trí giỏ hàng (SVG hoặc nút trong giỏ)
    let header_cart = document.querySelector(".header_cart ");
    let img = target_parent.querySelector("img"); // Lấy ảnh sản phẩm
    let svg = header_cart.querySelector("svg"); // Lấy ảnh sản phẩm
  
    // Tạo bản sao của ảnh
    let flying_img = img.cloneNode();
    flying_img.classList.add("fly-to-cart"); // Thêm lớp CSS hiệu ứng
  
    // Gắn ảnh vào phần tử cha
    target_parent.appendChild(flying_img);
  
    // Lấy vị trí hiện tại của ảnh sản phẩm và giỏ hàng
    const imgRect = img.getBoundingClientRect();
    const cartRect = svg.getBoundingClientRect();
    console.log(imgRect,cartRect);
    console.log(svg);
  
    // Gắn giá trị vị trí vào CSS thông qua custom properties
    flying_img.style.setProperty("--left", `${(imgRect.left - 480).toFixed(2)}px`);
    flying_img.style.setProperty("--top", `${(imgRect.top - 350 ).toFixed(2)}px`);
    
  
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
        <img className="product__image" src={item.thumbnail} />
        <h3 className="product__title">{item.title}</h3>
        <div className="product__infor">
          <div className="product__price">
            <div className="product__price-new">
              {((item.price * (100 - item.discountPercentage)) / 100).toFixed(
                2
              )}
              $
            </div>
            <div className="product__price-old ">{item.price}$</div>
          </div>
          <button onClick={handleAddToCart}>
            {" "}
            <HiOutlineShoppingCart />
          </button>
        </div>
        <div className="rate">
          <Rate disabled allowHalf value={item.rating} /> {item.rating}
        </div>
        </div>
      </div>
    </>
  );
}
export default ProductItem;
