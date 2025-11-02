import React, { Suspense, useEffect, useState } from "react";
import Banner from "../components/Banner";
import Spinner from "../components/Spinner";
import RecentProducts from "../components/RecentProducts";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/recent-products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  //   console.log(products)
  if (loading) {
    return <Spinner></Spinner>;
  }
  if(error){
    return  <p className="text-2xl text-gray-400 flex justify-center items-center h-screen">{error}</p>
  }
  return (
    <div>
      <Banner></Banner>

      <RecentProducts products={products}></RecentProducts>
    </div>
  );
};

export default Home;
