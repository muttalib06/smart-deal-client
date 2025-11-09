
import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";


const CreateProduct = () => {
//   const axiosInstance = useAxios();
const axiosSecure = useAxiosSecure();

  const handleCreateProduct = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const price_min = e.target.min_price.value;
    const price_max = e.target.max_price.value;
    const image = e.target.img_url.value;
    const newProduct = { title, price_min, price_max, image };

    axiosSecure.post("/products", newProduct).then((data) => {
      console.log(data.data);
    });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
        <div className="text-center space-y-2">
          {" "}
          <h4 className="text-3xl font-semibold">Create Product</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleCreateProduct}>
            <fieldset className="fieldset">
              <label className="label">Product title</label>
              <input
                type="text"
                name="title"
                className="input"
                placeholder="tile"
              />
              <label className="label">Min-price</label>
              <input
                type="text"
                name="min_price"
                className="input"
                placeholder="Min-price"
              />

              <label className="label">Max-price</label>
              <input
                type="text"
                name="max_price"
                className="input"
                placeholder="max-price"
              />
              <label className="label">Img-url</label>
              <input
                type="text"
                name="img_url"
                className="input"
                placeholder="Url"
              />
              <button type="submit" className="btn text-white mt-4 primary-btn">
                Add product
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
