import React from "react";
import "./Header.css";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { useSelector } from "react-redux";

const Header = () => {
  
  const orderLink = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const { cartItems } = useSelector((state) => state.cart);
  
  return <>

    <header>
      <div class="overlay" data-overlay></div>
      <div class="header-main">

        <div class="container">

          <a href="/" className="header-logo">
            <img src="" alt="logo" width="120" height="36" />
          </a>

          <div class="header-search-container">

            <input type="search" name="search" className="search-field" placeholder="Search" />

            <button class="search-btn">
              <SearchOutlinedIcon fontSize="small" />
            </button>

          </div>

          <div class="header-user-actions">

            <button class="action-btn">

              <PersonOutlineOutlinedIcon  onClick={() => orderLink('/account')}/>
            </button>

            <button class="action-btn" onClick={() => orderLink('/orders')}>
              <LocalMallOutlinedIcon  />
              <span class="count">{cartItems.length}</span>
            </button>

          </div>

        </div>

      </div>

      <nav class="desktop-navigation-menu">

        <div class="container">

          <ul class="desktop-menu-category-list">

            <li class="menu-category">
              <a href="/" class="menu-title">Home</a>
            </li>

            <li class="menu-category">
              <a href="/products" class="menu-title">Categories</a>

              <div class="dropdown-panel">

                <ul class="dropdown-panel-list">

                  <li class="menu-title">
                    <a href="/products/kurti">Casuals</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="/products/frocks">Frocks</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="/products/tshirts">T-Shirt</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="/products/shirts">Shirt</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="/products/pants">Pants</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="/products/tops">Tops</a>
                  </li>
                  <li></li>

                </ul>

                <ul class="dropdown-panel-list">

                  <li class="menu-title">
                    <a href="/products/kurti">Traditional</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="/products/kurti">Kurti</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="/products/saree">Saree</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="/products/dmaterial">Dress Material</a>
                  </li>

                  <li>
                  </li>

                </ul>

                <ul class="dropdown-panel-list">

                  <li class="menu-title">
                    <a href="/products">Western Jewelry</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="/products/earrings">Earrings</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="/products/necklace">Necklace</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="/products/bracelets">Bracelets</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="/products/rings">Rings</a>
                  </li>

                  <li>
                  </li>

                </ul>

                <ul class="dropdown-panel-list">

                  <li class="menu-title">
                    <a href="/products">Oxidised</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="/products/anklets">Anklets</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="/products/earrings">Earrings</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="/products/necklace">Necklace</a>
                  </li>
                  <li>
                  </li>
                </ul>
              </div>
            </li>

            <li class="menu-category">
              <a href="/faqs" class="menu-title">FAQs</a>
            </li>

            <li class="menu-category">
              <a href="/about" class="menu-title">About</a>
            </li>

            <li class="menu-category">
              <a href="/contact" class="menu-title">Contact</a>
            </li>

            <li class="menu-category">
              <a href="/cart" class="menu-title">Cart</a>
            </li>

            <li class="menu-category">
              <a href="/orders" class="menu-title">Orders</a>
            </li>


          </ul>

        </div>

      </nav>

      <div class="mobile-bottom-navigation">

        <button class="action-btn" data-mobile-menu-open-btn>
          <MenuOutlinedIcon />
        </button>

        <button class="action-btn">
          <LocalMallOutlinedIcon />

          <span class="count">{cartItems.length}</span>
        </button>

        <button class="action-btn">
          <HomeOutlinedIcon fontSize="medium"/>
        </button>

      </div>


    </header>


  </>;

};

export default Header;
