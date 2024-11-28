import "./style.scss";
import banner from "../../../component/img/banner.jpg";
import { Pagination, Breadcrumb } from "antd";
import { Link, NavLink } from "react-router-dom";
import Product from "../../../component/product";
import { ChangeHeader } from "../../../layout/layoutDefault/changeHeader";
import { useEffect, useState } from "react";
import { getProductList } from "../../../Services/productService";

function ShopPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await getProductList();
      setProducts(result.products); // Hiển thị toàn bộ sản phẩm
    };

    fetchProducts();
  }, []);

  ChangeHeader();

  return (
    <>
      <div className="shop__page">
        <div className="banner">
          <img src={banner} alt="banner" />
          <div className="banner__content">
            <h1 className="banner__title">SHOP PAGE</h1>
          </div>
          <Breadcrumb
            items={[
              {
                title: <Link to="/">Home</Link>,
              },
              {
                title: <Link to="/shoppage">Shop Page</Link>,
              },
            ]}
          className="breadcrumb"/>
        </div>
        <div className="list">
          <div className="container">
            <Product  products={products}/>
          </div>
        </div>
        <Pagination align="center" defaultCurrent={1} total={50} className="panigation" />
      </div>
    </>
  );
}
export default ShopPage;
