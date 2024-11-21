import "./style.css";
import { FaFacebookSquare } from "react-icons/fa";

function Footer(){
  return(
    <>
    <div class="container">
      <div className="footer-content">
        <div class="footer-column">
          <h3>CONTACT US</h3>
          <p>Address: 227 Au Co, Hoa Khanh Bac, Da Nang</p>
          <p>Email: lexuanluongllhh@gmail.com</p>
          <p>Phone: 0961195409</p>
          <div class="social-icons">
            <a href="https://www.facebook.com/XuanLuong.it"><FaFacebookSquare /></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-google-plus"></i></a>
            <a href="#"><i class="fa fa-rss"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
          </div>
        </div>
        <div class="footer-column">
          <h3>USEFUL LINKS</h3>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Car Listing</a></li>
            <li><a href="#">Car Grid</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Car Details</a></li>
          </ul>
        </div>
        {/* <div class="footer-column">
          <h3>RECENT POSTS</h3>
          <div class="recent-post">
            <img src={img1} alt="Car Image"/>
            <div>
              <a href="#">2016 Audi S5 Coupe</a>
              <p>February 27, 2022</p>
              <p>$245,000</p>
            </div>
          </div>
          <div class="recent-post">
            <img src={img2} alt="Car Image"/>
            <div>
              <a href="#">2016 Audi R8</a>
              <p>February 27, 2022</p>
              <p>$245,000</p>
            </div>
          </div>
          <div class="recent-post">
            <img src={img3} alt="Car Image"/>
            <div>
              <a href="#">Read Audi A7 TDI</a>
              <p>February 27, 2022</p>
              <p>$245,000</p>
            </div>
          </div>
        </div> */}
        <div class="footer-column">
          <h3>SUBSCRIBE</h3>
          <p>Exceptuer sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
          <form class="subscribe-form">
            <input type="email" placeholder="Enter Address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
export default Footer;