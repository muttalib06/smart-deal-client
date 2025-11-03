import React, { useState } from "react";
import { useLoaderData } from "react-router";

const ProductDetail = () => {
  const [showModal, setShowModal] = useState(false);
  const product = useLoaderData();

  const handleShowModal = () => {
    setShowModal(true);
  };
  const {
    image,
    title,
    price_min,
    price_max,
    usage,
    condition,
    seller_image,
    _id,
    created_at,
    description,
    seller_name,
    location,
    status,
    category,
    email,
  } = product;

  return (
    <div className="max-w-[80%] mx-auto mt-10">
      {/* product detail */}
      <div className="flex gap-8">
        <div className="flex-1 space-y-4">
          <img src={image} alt="" />
          <div className="shadow p-4 space-y-3">
            <h3>Product Description</h3>
            <div className="flex justify-between items-center">
              <p>
                <span className="text-primary font-semibold">Condition:</span>
                {condition}
              </p>
              <p>
                <span className="text-primary font-semibold">Usage Time:</span>
                {usage}
              </p>
            </div>
            <hr />
            <p>{description}</p>
          </div>
        </div>

        <div className="flex-1 space-y-5">
          <h2 className="text-5xl font-bold">{title}</h2>

          <p className="py-1 px-2 rounded-2xl bg-primary/50 w-[20%] flex justify-center items-center">
            {category}
          </p>

          <div className="shadow p-5 rounded space-y-3">
            <h4 className="text-green-500 font-bold text">
              {price_min}Tk-{price_max}Tk
            </h4>
            <p>Price starts from</p>
          </div>
          <div className="shadow p-5 rounded space-y-3">
            <h4 className="text-2xl">Product details</h4>
            <p>Product Id: {_id}</p>
            <p>Posted:{created_at}</p>
          </div>
          <div className="shadow p-5 rounded space-y-3">
            <h4 className="text-2xl">Seller Information</h4>
            <div className="flex gap-3">
              <img src={seller_image} alt="" />
              <div>
                <p>{seller_name}</p>
                <p>{email}</p>
              </div>
            </div>
            <div className="space-y-3">
              <p>
                <span className="font-semibold">Location</span>
                {location}
              </p>
              <p>
                <span className="font-semibold">Contact:</span>
                {email}
              </p>
              <p>
                status:{" "}
                <span className="py-1 px-2 bg-amber-500 rounded-2xl">
                  {status}
                </span>
              </p>
            </div>
          </div>
          <button
            onClick={handleShowModal}
            className="primary-btn btn w-full text-white"
          >
            I want to buy this product
          </button>
        </div>
        <div></div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className={`modal ${showModal ? "modal-open" : ""}`}
          role="dialog"
          id="my_modal_8"
        >
          <div className="modal-box">
            <h3 className="text-lg font-bold text-center">
              Give seller your offered price
            </h3>
            <div className="mt-5">
              <form>
                <div className="flex gap-2">
                  <div>
                    <label>Buyer Name</label> <br />
                    <input
                      type="text"
                      className="input"
                      placeholder="Buyer Name"
                    />{" "}
                    <br />
                  </div>
                  <div>
                    {" "}
                    <label>Seller Name</label> <br />
                    <input
                      type="text"
                      className="input"
                      placeholder="Seller Name"
                    />
                  </div>
                </div>
                <label>Buyer Image URL</label> <br />
                <input type="text" className="input w-full" placeholder="URL" />
                <label>Place your price</label> <br />
                <input
                  type="text"
                  className="input w-full"
                  placeholder="price"
                />{" "}
                <br />
                <label>contact info</label> <br />
                <input
                  type="text"
                  className="input w-full"
                  placeholder="contact info"
                />
                <div className="modal-action">
                  <button type="button" onClick={() => setShowModal(false)} className="btn">
                    Cancel
                  </button>
                  <button type="submit" className="primary-btn text-white btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <div></div>
    </div>
  );
};

export default ProductDetail;
