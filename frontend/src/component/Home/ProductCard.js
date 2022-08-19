import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <div class="showcase">
      <div class="showcase-banner">
        <Link to={`/product/${product._id}`}>
          <img src={product.images[0].url} alt={product.name} width="300" className="product-img default" />
          {product.images.length > 1 && (
            <img src={product.images[1].url} alt={product.name} width="300" className="product-img hover" />
          )}
          <div className="showcase-content">
            <a href="/products" className="showcase-category">{product.category}</a>
            <a href="/products">
              <h3 class="showcase-title">{product.name}</h3>
            </a>
            <br />
            <div>
              <div className="showcaseRating">
                <Rating {...options} />
              </div>{" "}
            </div>
            <div class="price-box">
              <p class="price">{`₹${product.price}`}</p>
              {/* <del>₹75.00</del> */}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
