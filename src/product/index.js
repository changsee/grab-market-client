import React from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
    const {id} = useParams();
    return <h1>제품 상세 {id} 화면</h1>;
}

export default ProductPage;