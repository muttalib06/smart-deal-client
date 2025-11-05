import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const ProductDetail = () => {
  const [showModal, setShowModal] = useState(false);
  const [bids, setBids] = useState([]);
  const product = useLoaderData();

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    const buyerName = e.target.buyerName.value;
    const email = e.target.email.value;
    // const sellerName = e.target.sellerName.value;
    const imgUrl = e.target.imgUrl.value;
    const bidPrice = e.target.bidPrice.value;
    const contactInfo = e.target.contactInfo.value;
    const newBid = {
      product: product._id,
      buyer_image: imgUrl,
      buyer_name: buyerName,
      buyer_contact: contactInfo,

      buyer_email: email,
      bid_price: bidPrice,
      status: "pending",
    };

    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after save data to mongodb", data);
        const insertedId = data.insertedId;
        if (insertedId) {
          const newBids = [...bids, newBid].sort(
            (a, b) => b.bid_price - a.bid_price
          );
          setBids(newBids);
          Swal.fire({
            title: "You have submitted successfully",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  useEffect(() => {
    fetch(`http://localhost:3000/products/bids/${product._id}`)
      .then((res) => res.json())
      .then((data) => setBids(data));
  }, [product._id]);
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
              <form onSubmit={handleSubmit}>
                <div className="flex gap-2">
                  <div>
                    <label>Buyer Name</label> <br />
                    <input
                      type="text"
                      name="buyerName"
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
                      name="sellerName"
                      className="input"
                      placeholder="Seller Name"
                    />
                  </div>
                </div>
                <label>Email</label> <br />
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Email"
                />{" "}
                <br />
                <label>Buyer Image URL</label> <br />
                <input
                  type="text"
                  name="imgUrl"
                  className="input w-full"
                  placeholder="URL"
                />
                <label>Place your price</label> <br />
                <input
                  type="text"
                  name="bidPrice"
                  className="input w-full"
                  placeholder="price"
                />{" "}
                <br />
                <label>contact info</label> <br />
                <input
                  type="text"
                  name="contactInfo"
                  className="input w-full"
                  placeholder="contact info"
                />
                <div className="modal-action">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="btn"
                  >
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

      <div className="mt-10">
        <h2 className="font-bold text-3xl">
          Bids for this product:{" "}
          <span className="text-primary">{bids.length}</span>
        </h2>
        {/* Table */}

        <div className="mt-10">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="py-3 px-4 text-left font-semibold">SL No</th>
                <th className="py-3 px-4 text-left font-semibold">Product</th>
                <th className="py-3 px-4 text-left font-semibold">Buyer</th>
                <th className="py-3 px-4 text-left font-semibold">Bid Price</th>
                <th className="py-3 px-4 text-center font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bids?.map((bid, index) => (
                <tr
                  key={bid._id || index}
                  className="border-t hover:bg-gray-50 transition-colors"
                >
                  {/* SL */}
                  <td className="py-3 px-4">{index + 1}</td>

                  {/* Product */}
                  <td className="py-3 px-4 flex items-center gap-3">
                    <img
                      src={image}
                      alt="image"
                      className="w-10 h-10 rounded-md object-cover border"
                    />
                    <div>
                      <p className="font-medium text-gray-800">{title}</p>
                      <p className="text-gray-500 text-sm">
                        ${price_min}- {price_max}
                      </p>
                    </div>
                  </td>

                  {/* buyer */}
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      {" "}
                      <img
                        className="w-8 h-8 rounded-full bg-gray-200"
                        src={bid.buyer_image}
                        alt=""
                      />
                      <div>
                        <p className="font-medium text-gray-800">
                          {bid.buyer_name}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {bid.buyer_email}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Bid Price */}
                  <td className="py-3 px-4 font-semibold text-gray-700">
                    ${bid.bid_price}
                  </td>

                  {/* Actions */}
                  <td className="py-3 px-4 text-center">
                    <button className="bg-green-100 hover:bg-green-200 text-green-700 px-3 py-1 rounded-lg mr-2 transition">
                      Accept Offer
                    </button>
                    <button className="bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 rounded-lg transition">
                      Reject Offer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
