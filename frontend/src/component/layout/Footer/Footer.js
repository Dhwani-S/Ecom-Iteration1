import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>

      <div class="footer-category">

        <div class="container">

          <h2 class="footer-category-title">Brand directory</h2>

          <div class="footer-category-box">

            <h3 class="category-box-title">Fashion :</h3>

            <a href="/products/tshirt" class="footer-category-link">T-shirt</a>
            <a href="/products/shirt" class="footer-category-link">Shirts</a>
            <a href="/products/jeans" class="footer-category-link">shorts & jeans</a>
            <a href="/products/kurti" class="footer-category-link">Kurti</a>
            <a href="/products/frock" class="footer-category-link">dress & frock</a>

          </div>


          <div class="footer-category-box">
            <h3 class="category-box-title">jewellery :</h3>

            <a href="/products/necklace" class="footer-category-link">Necklace</a>
            <a href="/products/earring" class="footer-category-link">Earrings</a>
            <a href="/products/ring" class="footer-category-link">Rings</a>
            <a href="/products/bracelet" class="footer-category-link">bracelets</a>
            <a href="/products/anklet" class="footer-category-link">Anklets</a>
          </div>
        </div>

      </div>

      <div class="footer-nav">

        <div class="container">

          <ul class="footer-nav-list">

            <li class="footer-nav-item">
              <h2 class="nav-title">Popular Categories - Clothing</h2>
            </li>

            <li class="footer-nav-item">
              <a href="/products/kurti" class="footer-nav-link">Kurti</a>
            </li>

            <li class="footer-nav-item">
              <a href="/products/frock" class="footer-nav-link">Dresses & Frock</a>
            </li>

            <li class="footer-nav-item">
              <a href="/products/jeans" class="footer-nav-link">Jeans</a>
            </li>

            <li class="footer-nav-item">
              <a href="/product/shirt" class="footer-nav-link">Shirts</a>
            </li>

          </ul>

          <ul class="footer-nav-list">

            <li class="footer-nav-item">
              <h2 class="nav-title">PPopular Categories - Jewelry</h2>
            </li>

            <li class="footer-nav-item">
              <a href="/products/earring" class="footer-nav-link">Earrings</a>
            </li>

            <li class="footer-nav-item">
              <a href="/products/necklace" class="footer-nav-link">Necklace</a>
            </li>

            <li class="footer-nav-item">
              <a href="/products/ring" class="footer-nav-link">Rings</a>
            </li>

            <li class="footer-nav-item">
              <a href="/products/anklet" class="footer-nav-link">Anklets</a>
            </li>

            <li class="footer-nav-item">
              <a href="/products/bracelet" class="footer-nav-link">Bracelets</a>
            </li>

          </ul>

          <ul class="footer-nav-list">

            <li class="footer-nav-item">
              <h2 class="nav-title">Our Company</h2>
            </li>

            <li class="footer-nav-item">
              <a href="/faqs" class="footer-nav-link">FAQs</a>
            </li>

            <li class="footer-nav-item">
              <a href="/contact" class="footer-nav-link">Contact Us</a>
            </li>

            <li class="footer-nav-item">
              <a href="/tandc" class="footer-nav-link">Terms and conditions</a>
            </li>

            <li class="footer-nav-item">
              <a href="/about" class="footer-nav-link">About us</a>
            </li>

          </ul>

          <ul class="footer-nav-list">

            <li class="footer-nav-item flex">
              <div class="icon-box">
                <ion-icon name="call-outline"></ion-icon>
              </div>

              <a href="tel:+607936-8058" class="footer-nav-link">(607) 936-8058</a>
            </li>

            <li class="footer-nav-item flex">
              <div class="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <a href="mailto:example@gmail.com" class="footer-nav-link">example@gmail.com</a>
            </li>

          </ul>

        </div>

      </div>

      <div class="footer-bottom">

        <div class="container">

          <p class="copyright">
            Copyright &copy; <a href="/tandc">Missori</a> all rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
