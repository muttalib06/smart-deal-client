import React from "react";
import { NavLink } from "react-router";

const Product = ({ singleProduct }) => {
  const { image, price_min, price_max, title, _id } = singleProduct;
  return (
    <div className="card bg-base-100 w-96 shadow-sm ">
      <figure className="px-10 pt-10 h-full">
        <img src={image} alt="Shoes" className="rounded-xl w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div>
          <p className="text-primary">
            $ {price_min}-{price_max}
          </p>
        </div>
        <div className="card-actions">
          <NavLink
            to={`/product-detail/${_id}`}
            className="btn border-primary text-primary w-full"
          >
            View Detail
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Product;
