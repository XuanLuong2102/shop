import { NavLink, useParams } from "react-router-dom";
import { HeaderShrink } from "../../../layout/layoutDefault/changeHeader";
import { Breadcrumb, Rate, Carousel } from "antd";
import "./style.scss";
import { useEffect, useRef, useState } from "react";
import { getProductbyID } from "../../../Services/productService";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../../actions/cart";

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  HeaderShrink();
  const { id } = useParams(); // Lấy id từ URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const carouselRef = useRef(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);

  const handleImageClick = (index) => {
    carouselRef.current.goTo(index); 
  };
  useEffect(() => {
    const fetchProduct = async () => {
      const result = await getProductbyID(id);
      if (result) {
        setProduct(result);
      } else {
        setError(`Product with ID ${id} not found.`);
      }
    };

    fetchProduct();
  }, [id]);
  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  const handleDown = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleUp = () => {
    setQuantity(quantity + 1);
  };
  const handleAddToCart = (e) => {
    let target_parent = e.target.closest(".product-detail__main");
    let header_cart = document.querySelector(".header_cart svg");
    let img = target_parent.querySelector("img");
    let flying_img = img.cloneNode();
    flying_img.classList.add("fly-to-cart");
    target_parent.appendChild(flying_img);
    const imgRect = img.getBoundingClientRect();
    const cartRect = header_cart.getBoundingClientRect();
    flying_img.style.setProperty("--left", `${imgRect.left.toFixed(2)}px`);
    flying_img.style.setProperty("--top", `${imgRect.top.toFixed(2)}px`);
    flying_img.style.setProperty("--height", `${imgRect.height.toFixed(2)}px`);
    flying_img.style.setProperty("--width", `${imgRect.width.toFixed(2)}px`);
    flying_img.style.setProperty(
      "--topcart",
      `${(cartRect.top - (cartRect.height / 2 + imgRect.height / 3)).toFixed(
        2
      )}px`
    );
    flying_img.style.setProperty(
      "--leftcart",
      `${(cartRect.left - cartRect.width * 2 - imgRect.width).toFixed(2)}px`
    );

    // Hiệu ứng bay
    setTimeout(() => {
      flying_img.remove(); // Xóa ảnh sau khi hoàn thành hiệu ứng
    }, 1000);
    if (cart.some((itemCart) => itemCart.id === id)) {
      setTimeout(() => {
        dispatch(updateQuantity(id, quantity));
      }, 1100);
    } else {
      setTimeout(() => {
        dispatch(addToCart(id, product));
        dispatch(updateQuantity(id, quantity - 1));
      }, 1100);
    }
  };
  return (
    <>
      <div className="product-detail">
        <Breadcrumb
          items={[
            {
              title: <NavLink to="/">Home</NavLink>,
            },
            {
              title: <NavLink to="/shoppage">Shop Page</NavLink>,
            },
            {
              title: <NavLink to="/product-detail">Product Detail</NavLink>,
            },
          ]}
          className="breadcrumb"
        />
        <div className="container">
          <div className="product-detail__main">
            <div className="product-detail__list__image">
              {product.images.map((image, index) => (
                <img
                  src={image}
                  loading="lazy"
                  key={index}
                  onClick={() => handleImageClick(index)}
                  className={`${
                    activeImageIndex === index ? "active" : ""
                  }`}
                />
              ))}
            </div>

            <div className="product-detail__image">
              <Carousel speed={1500} ref={carouselRef} arrows dots={false} beforeChange={(from,to)=>{setActiveImageIndex(to)}}>
              {product.images.map((image, index) => (
                <img src={image} loading="lazy" key={index}/>
            ))}
              </Carousel>
            </div>
            <div className="product-detail__content">
              <div className="rate">
                <Rate
                  disabled
                  allowHalf
                  value={product.rating}
                  className="rate"
                />
                ({product.rating.toFixed(1)})
              </div>
              <h1 className="product-detail__name">{product.title}</h1>
              <div className="price">
                <div className="price-new">
                  {(
                    (product.price * (100 - product.discountPercentage)) /
                    100
                  ).toFixed(2)}
                  $
                </div>
                <div className="price-old ">{product.price}$</div>
              </div>
              <div className="product-detail__stock">
                Stock: {product.stock}
              </div>
              <div className="product-detail__description">
                {product.description}
              </div>
              <div className="product-detail__add-cart">
                <div class="product-detail__quantity">
                  <button
                    className="button"
                    onClick={() => {
                      handleDown();
                    }}
                  >
                    -
                  </button>
                  <input
                    className="product-detail__quantity--input"
                    value={quantity}
                  />
                  <button
                    className="button"
                    onClick={() => {
                      handleUp();
                    }}
                  >
                    +
                  </button>
                </div>
                <button
                  className="button product-detail__add-to-cart"
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
              </div>
              <p className="tag">Category: {product.category}</p>
              <p className="tag product-detail__tags ">
                Tags:{" "}
                {product.tags.map((tag) => (
                  <span>{tag}</span>
                ))}
              </p>
            </div>
            <div className="product-detail__review">
              <h1 className="product-detail__review__title">Review</h1>
              <div className="product-detail__review__total">
                {product.reviews.length} review for product
              </div>
              <div className="product-detail__review__list">
                {product.reviews.map((review) => (
                  <div className="review">
                    <div className="review__info">
                      <p className="reviewer__name">{review.reviewerName}</p>
                      <p>-</p>
                      <p className="reviewer__date">
                        {new Date(review.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "2-digit",
                        })}
                      </p>
                    </div>
                    <Rate
                      disabled
                      value={review.rating}
                      className="review__rate"
                    />
                    <div className="review__content">{review.comment}</div>
                  </div>
                ))}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductDetail;
