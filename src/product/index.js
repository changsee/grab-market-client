import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";

function ProductPage() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    React.useEffect(function () {
        axios
          .get(
            `https://94af9350-4725-4e13-a890-8d5871251137.mock.pstmn.io/products/${id}`
          )
          .then(function (result) {
            setProduct(result.data);
          })
          .catch(function (error) {
            console.error("error: " + error);
          });
      }, []);
    
    if (product === null) {
        return <h1>상품정보를 받고 있습니다...</h1>;
    }

    return (
        <div>
            <div id="image-box">
                <img src={product.imageUrl} />
            </div>
            <div id="profile-box">
                <img src={`/images/icons/avatar.png`} />
                <span>{product.seller}</span>
            </div>
            <div id="contents-box">
                <div id="name">{product.name}</div>
                <div id="price">{product.price}</div>
                <div id="createdAt">2023년 4월 15일</div>
                <div id="description">{product.description}</div>
            </div>
        </div>
    );
}

export default ProductPage;