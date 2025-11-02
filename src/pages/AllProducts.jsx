import React from "react";
import { useLoaderData, useNavigation } from "react-router";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const AllProducts = () => {
  const products = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Spinner></Spinner>;
  }
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-400 text-2xl">No products available</p>
      </div>
    );
  }

  return (
    <div className="mt-10 max-w-4/5 mx-auto">
      <h2 className="text-center font-bold text-4xl">All Products</h2>
      <div className=" grid grid-cols-3 gap-3">
        {products.map((singleProduct) => (
          <Product
            key={singleProduct._id}
            singleProduct={singleProduct}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
