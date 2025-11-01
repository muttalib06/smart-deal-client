import React from "react";
import bannerImgLeft from "../assets/bg-hero-left.png";
import bannerImgRight from "../assets/bg-hero-right.png";

const Banner = () => {
  return (
    <div className="bg-linear-to-r from-[#fee8fd] to-[#e3f7f6] flex justify-between items-center">
      <img src={bannerImgLeft} alt="" />
      <div className="text-center space-y-3">
        <h1 className="font-bold text-5xl">Deal your Products <br /> in a Smart way !</h1>
        <p>
          SmartDeals helps you sell, resell, and shop from trusted local sellers
          — all in one place!
        </p>
        <div>
          <input type="text" name="" id="" className="input" placeholder="Search for product" />
          <button className="btn primary-btn rounded-r-full text-white">Search</button>
        </div>

        <div className="space-x-3">
          <button className="btn primary-btn text-white">Watch All Products</button>
          <button className="btn">Post an Products</button>
        </div>
      </div>
      <img src={bannerImgRight} alt="" />
    </div>
  );
};

export default Banner;
