import { NavLink, useParams } from "react-router-dom";
import { HeaderShrink } from "../../../layout/layoutDefault/changeHeader";
import { Breadcrumb, Rate, Carousel } from "antd";
import "./style.scss";
import { useEffect, useState } from "react";
import { getProductbyID } from "../../../Services/productService";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../../actions/cart";

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  HeaderShrink();
  const { id } = useParams(); // Lấy id từ URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);

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
      setQuantity(quantity-1)
    }
  };
  const handleUp = () => {
    setQuantity(quantity+1)
  };
  const handleAddToCart = (e) => {
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
  }
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
            <div className="product-detail__image">
              <Carousel arrows infinite={false}>
                {product.images.map((image) => (
                  <img src={image} />
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
                <button className="button product-detail__add-to-cart" onClick={handleAddToCart}>
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
                    <Rate disabled value={review.rating} className="review__rate"/>
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
