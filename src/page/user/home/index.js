import { Carousel, Col, Row } from "antd";
import banner1 from "../../../component/img/banner1.webp";
import banner2 from "../../../component/img/banner2.webp";
import banner3 from "../../../component/img/banner3.webp";
import sale__banner1 from "../../../component/img/section1-banner1.jpg";
import sale__banner2 from "../../../component/img/section1-banner2.jpg";
import "./style.scss";
import { useEffect, useState } from "react";
import Product from "../../../component/product";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BsCoin } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import { SiSpringsecurity } from "react-icons/si";
import { ChangeHeader, HeaderSticky } from "../../../layout/layoutDefault/changeHeader";
import { getProductList } from "../../../Services/productService";
import { Link } from "react-router-dom";
import 'animate.css';
import { useAnimateOnScroll } from "../../../component/use_animate";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await getProductList();
      setProducts(result.products.slice(0, 12)); // Lấy 12 sản phẩm đầu tiên
    };
    fetchProducts();
    HeaderSticky(); 
  }, []);

  ChangeHeader();
  const handleBeforeChange = (from, to) => {
    // Set the current slide to the one that will be active
    setCurrentSlide(to);
  };
  useAnimateOnScroll({classname:"sale__banner", addClass:"animate-bottom", Scroll : 70});
  useAnimateOnScroll({classname:"product__home__title", addClass:"animate-left", Scroll : 500});
  useAnimateOnScroll({classname:"product__tab", addClass:"animate-left", Scroll : 500});
  useAnimateOnScroll({classname:"service__title", addClass:"animate-left", Scroll : 2000});
  useAnimateOnScroll({classname:"service__list", addClass:"animate-right", Scroll : 2000});
  
  return (
    <>
      <Carousel
        autoplay
        autoplaySpeed={3000}
        speed={2000}
        arrows
        beforeChange={handleBeforeChange}
      >
        <div className="banner">
          <img src={banner1} alt="banner" />
          <div className="banner__caption ">
            <div className="banner__content text-center right">
              <h1 className={` ${currentSlide === 0 ? "animate-top" : ""}`}>
                New Summer
              </h1>
              <p
                className={`colorW  ${
                  currentSlide === 0 ? "animate-bottom" : ""
                }`}
              >
                Off 30%
              </p>
              <a class="btn shopnow__button">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="banner">
          <img src={banner2} alt="banner" />
          <div className="banner__caption">
            <div className="banner__content text-center center">
              <h1 className={` ${currentSlide === 1 ? "animate-zoom" : ""}`}>
                Big Summer
              </h1>
              <p
                className={`colorP  ${
                  currentSlide === 1 ? "animate-bottom" : ""
                }`}
              >
                Sale
              </p>
              <a class="btn shopnow__button">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="banner">
          <img src={banner3} alt="banner" />
          <div className="banner__caption">
            <div className="banner__content margin-left-150 overflow">
              <h1 className={` ${currentSlide === 2 ? "text-animate" : ""}`}>
                Men Blazer
              </h1>
              <p
                className={`colorW  ${
                  currentSlide === 2 ? "animate-bottom" : ""
                }`}
              >
                New Now
              </p>
              <a class="btn shopnow__button">Shop Now</a>
            </div>
          </div>
        </div>
      </Carousel>
      <section className="section__sale__area">
        <div className="container">
          <Row className="sale__banner ">
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <div className="sale__banner__inner">
                <div className="sale__banner__image">
                  <img src={sale__banner1} alt="Banner" />
                </div>
                <div class="sale__banner__info">
                  <div class="sale__banner__info__inner">
                    <p class="sale__banner__info__title">CHECKED SHIRT</p>
                    <p class="sale__banner__info__sale">
                      <span>Sale</span>
                      <span>50%</span>
                    </p>
                    <p class="sale__banner__info__decrip">
                      Don't Miss This Chance
                    </p>
                  </div>
                  <a class="btn shopnow__button">Shop Now</a>
                </div>
              </div>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <div className="sale__banner__inner">
                <div className="sale__banner__image">
                  <img src={sale__banner2} alt="Banner" />
                </div>
                <div class="sale__banner__info">
                  <div class="sale__banner__info__inner">
                    <p class="sale__banner__info__title title-2">
                      Woman Dress 2018
                    </p>
                    <p class="sale__banner__info__sale sale-2">Sale 30%</p>
                    <p class="sale__banner__info__decrip decrip-2">
                      Don't Miss This Chance
                    </p>
                  </div>
                  <a class="btn shopnow__button" s>
                    Shop Now
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="product__area">
        <div className="container">
          <h1 className="product__home__title">New Arrival</h1>
          <div className="product__tab">
            <ul className="product__tab__list">
              <li className="product__tab__item">All</li>
              <li className="product__tab__item">Men</li>
              <li className="product__tab__item">Women</li>
              <li className="product__tab__item">Kids</li>
              <li className="product__tab__item">Accesories</li>
              <li className="product__tab__item">Bags & Shoes</li>
            </ul>
          </div>
          <div className="product__list">
            <Product products={products}/>
          </div>
          <Link className="product__viewAll" to="/shoppage">
            <p>View All</p>
          </Link>
        </div>
      </section>
      <section className="service__area">
        <div className="container">
          <h1 className="service__title">Our Service</h1>
          <ul className="service__list">
            <li className="service__item">
              <HiOutlineShoppingCart />
              <h3 className="service__item__name">FREESHIPPING WORLD WIDE</h3>
              <p className="service__item__decrip">Freeship over oder $100</p>
            </li>
            <li className="service__item">
              <BsCoin />
              <h3 className="service__item__name">30 DAYS MONEY RETURNS</h3>
              <p className="service__item__decrip">Derabitur eget vehicula</p>
            </li>
            <li className="service__item">
              <MdSupportAgent />
              <h3 className="service__item__name">SUPPORT 24/7</h3>
              <p className="service__item__decrip">Dedicated Support</p>
            </li>
            <li className="service__item">
              <SiSpringsecurity />
              <h3 className="service__item__name">100% SECURE CHECKOUT</h3>
              <p className="service__item__decrip">Protect buyer & Security</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
export default Home;
