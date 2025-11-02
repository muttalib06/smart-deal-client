import React, { use } from "react";
import Product from "./Product";

const RecentProducts = ({ products }) => {
  return (
    <div className="mt-10 max-w-4/5 mx-auto">
      <h2 className="text-center font-bold text-4xl">Recent Products</h2>
      <div className=" grid grid-cols-3 gap-3">
        {
          products.map(singleProduct => <Product key={singleProduct._id} singleProduct={singleProduct}></Product>)
        }

      </div>
    </div>
  );
};

export default RecentProducts;
