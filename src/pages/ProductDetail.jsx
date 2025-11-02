import React from "react";
import { useLoaderData } from "react-router";

const ProductDetail = () => {
  const product = useLoaderData();

  console.log(product);
  return (
    <div>
      <h2>Product Detail</h2>
    </div>
  );
};

export default ProductDetail;
