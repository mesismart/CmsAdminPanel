import React from "react";
import { Link } from "react-router-dom";
import Chart from "./../../Components/Chart/Chart";
import { productsData } from "./../../datas";
import PublishIcon from "@mui/icons-material/Publish";

export default function Products() {
  return (
    <div>
      <div className=" flex justify-between ml-5">
        <h1 className="text-lg font-bold">Product</h1>
        <Link to="newProduct">
          <button className="p-2 rounded-md text-white bg-teal-500">
            Create
          </button>
        </Link>
      </div>
      <div className="flex">
        <div className="flex-1">
          <Chart
            title={"Sale in Month"}
            data={productsData}
            dataKey={"sales"}
          />
        </div>
        <div className=" flex-1 mr-5 p-5 shadow-md">
          <div className="flex align-middle">
            <img
              className="w-5 h-5 rounded-t-md mr-5"
              src="/images/Profile/prof2.jfif"
              alt=""
            />
            <span className="font-semibold">Asus Laptop</span>
          </div>

          <div className="mt-3">
            <div className="flex justify-between w-[200px]">
              <div className="font-semibold">ID:</div>
              <div className="font-light">12322</div>
            </div>
            <div className="flex justify-between w-[200px]">
              <div className="font-semibold">Name:</div>
              <div className="font-light">Asus Laptop</div>
            </div>
            <div className="flex justify-between w-[200px]">
              <div className="font-semibold">Sales:</div>
              <div className="font-light">$500000</div>
            </div>
            <div className="flex justify-between w-[200px]">
              <div className="font-semibold">Active:</div>
              <div className="font-light">Yes</div>
            </div>
            <div className="flex justify-between w-[200px]">
              <div className="font-semibold">In Stock:</div>
              <div className="font-light">No</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 m-5 shadow-md">
        <form action="" className="flex justify-between">
          <div className="flex flex-col">
            <label className="mb-2 text-gray-400">Product Name</label>
            <input
              className="mb-3  p-1 border-b-2 outline-none"
              type="text"
              placeholder="Dell Laptop"
            />

            <label htmlFor="">In Stock</label>
            <select className="mb-3" name="" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label htmlFor="">In Stock</label>
            <select name="" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="flex-col justify-between">
            <div className="">
              <img
                className="w-[100px] w-[100px] rounded-xl mr-5"
                src="images/profile/prof2.jfif"
                alt=""
              />
              <label>
                <PublishIcon />
              </label>
              <input type="file" className="flex-none" name="" id="" />
            </div>
            <button className="border-none p-1 rounded-md bg-blue-800 text-white font-semibold cursor-pointer">
              {" "}
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
