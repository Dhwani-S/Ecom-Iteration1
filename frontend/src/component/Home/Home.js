import React, { Fragment, useEffect } from "react";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  const categoryLink = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />
          <main>

            {/* ------------------ Banner ---------------------- */}
            <div class="banner">

              <div class="container">

                <div class="slider-container has-scrollbar">

                  <div class="slider-item">

                    <img src="../../../images/banner-1.jpg" alt="women's latest fashion sale" class="banner-img" />

                    <div class="banner-content">

                      <p class="banner-subtitle">New Products Every Week!</p>

                      <h2 class="banner-title">Women's latest fashion</h2>

                      <p class="banner-text">
                        at the best price
                      </p>

                      <a href="/products" class="banner-btn">Shop now</a>

                    </div>

                  </div>

                  <div class="slider-item">

                    <img src="../../../images/banner-2.jpg" alt="modern sunglasses" class="banner-img" />

                    <div class="banner-content">

                      <p class="banner-subtitle">Trending accessories</p>

                      <h2 class="banner-title">Vast Collection</h2>

                      <p class="banner-text">
                        starting at just <b>30</b>/-
                      </p>

                      <a href="/products" class="banner-btn">Shop now</a>

                    </div>

                  </div>

                  <div class="slider-item">

                    <img src="../../../images/banner-3.jpg" alt="new fashion summer sale" class="banner-img" />

                    <div class="banner-content">

                      <p class="banner-subtitle">Happy Customers</p>

                      <h2 class="banner-title">Read what people have to say about us!</h2>

                      <p class="banner-text">
                        Read here
                      </p>

                      <a href="/about" class="banner-btn">Testimoties</a>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* ---------------- Category ------------------- */}

            <div class="category">

              <div class="container">

                <div class="category-item-container has-scrollbar">

                  <div class="category-item">

                    <div class="category-img-box">
                      <img src="../../../images/icons/dress.svg" alt="frock" width="30" />
                    </div>

                    <div class="category-content-box">

                      <div class="category-content-flex">
                        <h3 class="category-item-title">Dress & frock</h3>

                        {/* <p class="category-item-amount">(53)</p> */}
                      </div>

                      <a href="/products/frock" class="category-btn">Show all</a>

                    </div>

                  </div>

                  <div class="category-item">

                    <div class="category-img-box">
                      <img src="../../../images/icons/shorts.svg" alt="shorts & jeans" width="30" />
                    </div>

                    <div class="category-content-box">

                      <div class="category-content-flex">
                        <h3 class="category-item-title">Shorts & jeans</h3>

                        {/* <p class="category-item-amount">(84)</p> */}
                      </div>

                      <a href="/products/jeans" class="category-btn">Show all</a>

                    </div>

                  </div>

                  <div class="category-item">

                    <div class="category-img-box">
                      <img src="../../../images/icons/tee.svg" alt="t-shirts" width="30" />
                    </div>

                    <div class="category-content-box">

                      <div class="category-content-flex">
                        <h3 class="category-item-title">T-shirts</h3>

                        {/* <p class="category-item-amount">(35)</p> */}
                      </div>

                      <a href="/products/tshirt" class="category-btn">Show all</a>

                    </div>

                  </div>

                  <div class="category-item">

                    <div class="category-img-box">
                      {/* <a target="_blank" href="https://icons8.com/icon/Euh7KJO4xRh6/accesory">Accesory</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                      <img src="../../../images/icons/accessories.png" alt="jacket" width="30" />
                    </div>

                    <div class="category-content-box">

                      <div class="category-content-flex">
                        <h3 class="category-item-title">Accessories</h3>

                        {/* <p class="category-item-amount">(16)</p> */}
                      </div>

                      <a href="/products/earrings" class="category-btn">Show all</a>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* --------------------- Products ------------------------ */}

            <div class="product-container">

              <div class="container">

                {/* Sidebar */}
                <div class="sidebar  has-scrollbar" data-mobile-menu>

                  <div class="sidebar-category">

                    <div class="sidebar-top">
                      <h2 class="sidebar-title">Category</h2>
                    </div>

                    <ul class="sidebar-menu-category-list">

                      <li class="sidebar-menu-category">

                        <button class="sidebar-accordion-menu" data-accordion-btn onClick={() => categoryLink('/products/frocks')}> 

                          <div class="menu-title-flex">
                            <img src="../../../images/icons/dress.svg" alt="clothes" width="20" height="20"
                              class="menu-title-img" />

                            <p class="menu-title">Dresses & Frocks</p>
                          </div>

                        </button>


                      </li>

                      <li class="sidebar-menu-category">

                        <button class="sidebar-accordion-menu" data-accordion-btn onClick={() => categoryLink('/products/jeans')}>

                          <div class="menu-title-flex">
                            <img src="../../../images/icons/shorts.svg" alt="footwear" class="menu-title-img" width="20"
                              height="20" />

                            <p class="menu-title">Jeans</p>
                          </div>

                        </button>
                      </li>

                      <li class="sidebar-menu-category">

                        <button class="sidebar-accordion-menu" data-accordion-btn onClick={() => categoryLink('/products/kurti')}>

                          <div class="menu-title-flex">
                            <img src="../../../images/icons/kurti.png" alt="glasses" class="menu-title-img" width="20"
                              height="20" />

                            <p class="menu-title">Kurti</p>
                          </div>

                        </button>

                      </li>

                      <li class="sidebar-menu-category">

                        <button class="sidebar-accordion-menu" data-accordion-btn onClick={() => categoryLink('/products/kurti')}>

                          <div class="menu-title-flex">
                            <img src="../../../images/icons/tee.svg" alt="perfume" class="menu-title-img" width="20"
                              height="20" />

                            <p class="menu-title">T-Shirts</p>
                          </div>

                        </button>

                      </li>

                      <li class="sidebar-menu-category">

                        <button class="sidebar-accordion-menu" data-accordion-btn onClick={() => categoryLink('/products/necklace')}>

                          <div class="menu-title-flex">
                            <img src="../../../images/icons/necklace.png" alt="cosmetics" class="menu-title-img" width="20"
                              height="20" />

                            <p class="menu-title">Necklace</p>
                          </div>

                        </button>

                      </li>

                      <li class="sidebar-menu-category">

                        <button class="sidebar-accordion-menu" data-accordion-btn onClick={() => categoryLink('/products/ring')}>

                          <div class="menu-title-flex">
                            <img src="../../../images/icons/jewelry.svg" alt="clothes" class="menu-title-img" width="20"
                              height="20" />

                            <p class="menu-title">Rings</p>
                          </div>

                        </button>

                      </li>

                      <li class="sidebar-menu-category">

                        <button class="sidebar-accordion-menu" data-accordion-btn onClick={() => categoryLink('/products/earring')}>

                          <div class="menu-title-flex">
                            <img src="../../../images/icons/accessories.png" alt="bags" class="menu-title-img" width="20" height="20" />

                            <p class="menu-title">Earrings</p>
                          </div>

                        </button>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Featured Products */}
                <div class="product-box">

                  {/* Product Grid */}

                  <div class="product-main">

                    <h2 class="title">Featured Products</h2>

                    <div class="product-grid">

                      {/*  start */}
                      {products &&
                        products.map((product) => (
                          <ProductCard key={product._id} product={product} />
                        ))}
                      {/* end */}

                    </div>

                  </div>

                </div>

              </div>
            </div>
          </main>

        </Fragment >
      )}
    </Fragment >
  );
};

export default Home;
