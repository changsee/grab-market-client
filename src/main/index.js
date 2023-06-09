import React from "react";
import "./index.css"
import axios from "axios";
import { Link } from "react-router-dom";

function mainPage() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(function () {
    axios
      .get(
        "https://94af9350-4725-4e13-a890-8d5871251137.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("error: " + error);
      });
  }, []);

  return (
    <div>
        <div id="banner">
          <img src="./images/banners/banner1.png" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {
            products.map(function (product, index) {
              return (
                <div className="product-card" key={index}>
                  <Link className="product-link" to={`/products/${product.id}`}>
                    <div>
                      <img className="product-image" src={product.imageUrl} />
                    </div>
                    <div className="product-contents">
                      <span className="product-name">{product.name}</span>
                      <span className="product-price">{product.price}원</span>
                      <div className="product-seller">
                        <img className="product-avatar" src="./images/icons/avatar.png" />
                        <span>{product.seller}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })
          }
        </div>
    </div>
  );
}

export default mainPage;
