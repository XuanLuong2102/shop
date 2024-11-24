import { useEffect, useState } from "react";
import { getProductList } from "../../Services/productService";
import "./product.scss";
import ProductItem from "./productItem";
function Product({ products }) {
  return (
    <>
      <div className="product">
        {products.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}
export default Product;
