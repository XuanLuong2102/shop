import { Carousel, Col, Row } from "antd";
import banner1 from "../../../component/img/banner1.jpg";
import banner2 from "../../../component/img/banner2.jpg";
import banner3 from "../../../component/img/banner3.jpg";
import sale__banner1 from "../../../component/img/section1-banner1.jpg";
import sale__banner2 from "../../../component/img/section1-banner2.jpg";
import "./style.scss";
import { useState } from "react";
import Product from "../../../component/product";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BsCoin } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import { SiSpringsecurity } from "react-icons/si";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBeforeChange = (from, to) => {
    // Set the current slide to the one that will be active
    setCurrentSlide(to);
  };
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
            <div className="banner__content text-right">
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
              <a class="btn shopnow__button" href="">
                    Shop Now
                  </a>
            </div>
          </div>
        </div>
        <div className="banner">
          <img src={banner2} alt="banner" />
          <div className="banner__caption">
            <div className="banner__content text-center ">
              <h1 className={` ${currentSlide === 1 ? "animate-left" : ""}`}>
                Big Summer
              </h1>
              <p
                className={`colorP  ${
                  currentSlide === 1 ? "animate-bottom" : ""
                }`}
              >
                Sale
              </p>
              <a class="btn shopnow__button" href="">
                    Shop Now
                  </a>
            </div>
          </div>
        </div>
        <div className="banner">
          <img src={banner3} alt="banner" />
          <div className="banner__caption">
            <div className="banner__content margin-left-150">
              <h1 className={` ${currentSlide === 2 ? "animate-zoom" : ""}`}>
                
              Men Blazer 
              </h1>
              <p
                className={`colorW  ${
                  currentSlide === 2 ? "animate-bottom" : ""
                }`}
              >
                New Now
              </p>
              <a class="btn shopnow__button" href="">
                    Shop Now
                  </a>
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
                  <a class="btn shopnow__button" href="">
                    Shop Now
                  </a>
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
                  <a class="btn shopnow__button" href="">
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
          <h1 className="product__home__title">
            New Arrival
          </h1>
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
            <Product />
          </div>
          <div className="product__viewAll">
            <p>View All</p>
          </div>
        </div>
      </section>
      <section className="service__area">
        <div className="container">
          <h1 className="service__title">
            Our Service
          </h1>
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
