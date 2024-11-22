import "./style.scss";
import banner from "../../../component/img/banner.jpg";
import { Pagination, Breadcrumb } from "antd";
import { NavLink } from "react-router-dom";
import Product from "../../../component/product";

function ShopPage() {
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
                title: <NavLink to="/">Home</NavLink>,
              },
              {
                title: <NavLink to="/shoppage">Shop Page</NavLink>,
              },
            ]}
          />
        </div>
        <div className="list">
          <div className="container">
            <Product />
          </div>
        </div>
        <Pagination align="center" defaultCurrent={1} total={50} className="panigation" />
      </div>
    </>
  );
}
export default ShopPage;
