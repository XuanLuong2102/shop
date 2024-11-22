import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Button, Col, Row } from "antd";
import "./style.scss";
import Footer from "./footer";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { useSelector } from "react-redux";
import { IoBagHandleSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Login from "./login";
import MiniCartHeader from "./cart"

function LayoutDefault() {
  const [login, setLogin] = useState(false);
  const [search, setSearch] = useState(false);
  const [cartMini, setCart] = useState(false);
  const [stateLogin, setState] = useState("LOGIN");
  const [windowLogin, setWindowLogin] = useState(false);

  const handlClick = (e) => {
    setState(e);
    setWindowLogin(true);
  };

  const cart = useSelector((state) => state.cartReducer);
  const total = cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".layout-default__header");
      if (window.scrollY > 30) {
        header.classList.add("shrink");
        header.classList.remove("sticky");
      } else {
        header.classList.remove("shrink");
        header.classList.add("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="layout-default">
      <header className="layout-default__header sticky">
        <div className="container">
          <Row>
            <Col xl={7} lg={7} md={12} sm={12} xs={12} className="logo">
              <NavLink to="/" className="colorO">
                <span className="colorB">ONLINE</span>SHOP
              </NavLink>
            </Col>
            <Col xl={10} lg={10} sm={0} xs={0} className="menu">
              <ul className="menu__list">
                <li>
                  <NavLink to="/" className="menu__item">
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/shoppage" className="menu__item">
                    SHOP
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="menu__item">
                    COLLECTIONS
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="menu__item">
                    ABOUT US
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="menu__item">
                    BLOG
                  </NavLink>
                </li>
              </ul>
            </Col>
            <Col xl={7} lg={7} md={12} sm={12} xs={12}>
              <ul className="account__header">
                <li className="account__header__item">
                  <div
                    className="account__header__search"
                    onClick={() => setSearch(true)}
                  >
                    <FaSearch />
                  </div>
                </li>
                <li
                  className="account__header__item header_cart"
                  onClick={() => setCart(true)}
                >
                  <IoBagHandleSharp />
                  {total > 0 ? (
                    <span className="cart__quantity">{total}</span>
                  ) : (
                    <></>
                  )}
                </li>

                {login ? (
                  <>
                    <li className="account__header__item">
                      <div className="account__header__user">
                        <MdAccountCircle />
                      </div>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="account__header__item">
                      <Button
                        className="login btn colorW"
                        onClick={() => handlClick("LOGIN")}
                      >
                        LOGIN
                      </Button>
                    </li>
                    <li className="account__header__item">
                      <Button
                        type="primary"
                        className="colorW btn"
                        onClick={() => handlClick("SIGNUP")}
                      >
                        SIGNUP
                      </Button>
                    </li>
                  </>
                )}
              </ul>
            </Col>
          </Row>
        </div>
      </header>
      <main className="layout-default__main">
        <Outlet />
      </main>
      <footer class="footer">
        <Footer />
      </footer>
      <div
        className={`searchform__popup ${search ? "open" : ""}`}
        id="searchForm"
      >
        <div class="btn-close" onClick={() => setSearch(false)}>
          <IoClose />
        </div>
        <div class="searchform__body">
          <p>Start typing and press Enter to search</p>
          <form class="searchform__form">
            <input
              type="text"
              name="search"
              id="search"
              class="searchform__input"
              placeholder="Search Entire Store..."
            />
            <button type="submit" class="searchform__submit">
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
      <div className={`login__area  ${windowLogin ? "open animate-top" : ""}`}>
        
        <Login StateLogin={stateLogin} SetState={setState} SetWindow={setWindowLogin}/>
      </div>
      <aside class={`mini-cart ${cartMini ? "open" : ""}`} id="miniCart">
        <div class="mini-cart-wrapper">
          <div class="btn-close" onClick={() => setCart(false)}>
            <IoClose />
          </div>
          <MiniCartHeader />
        </div>
      </aside>
    </div>
  );
}

export default LayoutDefault;
