import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyBids = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [bids, setBids] = useState([]);
  const userEmail = user?.email;

  const handleRemove = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:3000/bids/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
                const remainingBid = bids.filter((bid) => bid._id !== id);
                setBids(remainingBid);
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  useEffect(() => {
    if (userEmail) {
      axiosSecure
        .get(`http://localhost:3000/bids?email=liam@gmail.com`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")} `,
          },
        })
        .then((res) => {
          console.log(res.data);
          setBids(res.data);
        });
    }
  }, [userEmail]);

  // useEffect(() => {
  //   if (userEmail) {
  //     fetch(`http://localhost:3000/bids?email=${userEmail}`,{
  //       headers:{
  //         authorization:`Bearer ${localStorage.getItem("accessToken")}`
  //       }
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setBids(data);
  //       });
  //   }
  // }, [userEmail]);

  return (
    <div className="mt-10 max-w-[80%] mx-auto">
      <h3 className="text-3xl font-bold text-center">
        My bids: <span className="text-primary">{bids.length}</span>{" "}
      </h3>

      {/* table of bids */}

      <div className="mt-10">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left font-semibold">SL No</th>
              <th className="py-3 px-4 text-left font-semibold">Product</th>
              <th className="py-3 px-4 text-left font-semibold">Buyer</th>
              <th className="py-3 px-4 text-left font-semibold">Bid Price</th>
              <th className="py-3 px-4 text-left font-semibold">Status</th>
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
                    src={bid.product_image}
                    alt="image"
                    className="w-10 h-10 rounded-md object-cover border"
                  />
                  <div>
                    <p className="font-medium text-gray-800">
                      {bid.product_title}
                    </p>
                    <p className="text-gray-500 text-sm">
                      ${bid.product_min_price}- {bid.product_max_price}
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
                      <p className="text-gray-500 text-sm">{bid.buyer_email}</p>
                    </div>
                  </div>
                </td>

                {/* Bid Price */}
                <td className="py-3 px-4 font-semibold text-gray-700">
                  ${bid.bid_price}
                </td>

                {/* Actions */}
                <td className="py-3 px-4 text-center">
                  <p className="bg-[#FFC107] px-3 py-1 rounded-lg">pending</p>
                </td>
                <td className="py-3 px-4 text-center">
                  <button
                    onClick={() => handleRemove(bid._id)}
                    className="bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 rounded-lg"
                  >
                    Remove Bid
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBids;
