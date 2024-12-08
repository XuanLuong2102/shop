import "./style.scss";
import banner from "../../../component/img/banner.webp";
import { Pagination, Breadcrumb, Row, Col, Select, Flex, Tag } from "antd";
import { Link, NavLink } from "react-router-dom";
import Product from "../../../component/product";
import {
  ChangeHeader,
  HeaderSticky,
} from "../../../layout/layoutDefault/changeHeader";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getProductList } from "../../../Services/productService";

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [pageSize] = useState(12);
  const [selectedTags, setSelectedTags] = useState([""]);
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProductList();
      setProducts(products.products); // Hiển thị toàn bộ sản phẩm
    };
    const fetchCategorys = async () => {
      const result = await getProductList();
      const category = result.products.flatMap((product) => product.tags);
      const uniqueCategorys = Array.from(new Set(category));
      setCategorys(uniqueCategorys); // Hiển thị toàn bộ category
    };
    fetchCategorys();
    fetchProducts();
  }, []);
  console.log(categorys);
  const handlePageChange = (page) => {
    setCurrentPage(page); // Cập nhật trang hiện tại
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Hiệu ứng cuộn mượt
    });
  };
  // Tính toán sản phẩm hiển thị dựa trên trang hiện tại và số lượng sản phẩm mỗi trang
  const startIndex = (currentPage - 1) * pageSize;
  const currentProducts = products.slice(startIndex, startIndex + pageSize);

  useEffect(() => {
    HeaderSticky();
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
            className="breadcrumb"
          />
        </div>
        <div className="container">
          <Row className="shop__page__top">
            <Col span={5}>
              <h1>Category</h1>
            </Col>
            <Col span={19} className="select">
              <Select
                
                defaultValue="Sort by"
                style={{
                  width: 150,
                }}
                options={[
                  {
                    value: "pricelowhight",
                    label: "Price: low to hight",
                  },
                  {
                    value: "pricehightlow",
                    label: "Price: hight to low",
                  },
                  {
                    value: "discount",
                    label: "Big Sale",
                  },
                ]}
              />
            </Col>
          </Row>
          <div className="shop__page__main">
            <div className="sidebar">
              <form class="searchform__form">
                <input
                  type="text"
                  name="search"
                  id="search"
                  class="searchform__input sidebar__input"
                  placeholder="Search..."
                />
                <button
                  type="submit"
                  class="searchform__submit sidebar__submit"
                >
                  <FaSearch />
                </button>
              </form>
              <Flex gap={8} wrap >
                <span>Categories:</span>
                {categorys.map((tag) => (
                  <Tag.CheckableTag
                    key={tag}
                    checked={selectedTags.includes(tag)}
                    onChange={(checked) => handleChange(tag, checked)}
                  >
                    {tag}
                  </Tag.CheckableTag>
                ))}
              </Flex>
            </div>
            <div className="list">
              <Product products={currentProducts} />
            </div>
          </div>
          <Pagination
            align="center"
            defaultCurrent={1}
            total={products.length}
            pageSize={pageSize}
            className="panigation"
            onChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
}
export default ShopPage;
