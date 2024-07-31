import React from "react";
import { Link } from "react-router-dom";
import Chart from "./../../Components/Chart/Chart";
import { productsData } from "./../../datas";

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
        <div className="flex-1 mr-5 p-5 shadow-md">
          <div className="flex align-middle">
            <img src="/images/Profile/prof2.jfif" alt="" />
            <span>Asus Laptop</span>
          </div>

          <div>
            <div>
              <div>ID:</div>
              <div>12322</div>
            </div>
            <div>
              <div>Name: </div>
              <div>Asus Laptop</div>
            </div>
            <div>
              <div>Sales: </div>
              <div>$90000</div>
            </div>
            <div>
              <div>Active: </div>
              <div>Yes</div>
            </div>
            <div>
              <div>In Stock: </div>
              <div>No</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
