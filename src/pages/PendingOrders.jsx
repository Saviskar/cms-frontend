import React from "react";
import Navbar from "./Navbar";

export default function PendingOrders() {
  return (
    <div>
      <div className="flex flex-row sm:gap-10">
        <div className="sm:w-full sm:max-w-[18rem]">
          <Navbar />
        </div>
        <div className="flex w-full flex-col p-4">
          <div className="w-fit">
            <label
              htmlFor="sidebar-mobile-fixed"
              className="cursor-pointer sm:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#b8b8b8"
              >
                <path d="M140-254.62v-59.99h680v59.99H140ZM140-450v-60h680v60H140Zm0-195.39v-59.99h680v59.99H140Z" />
              </svg>
            </label>
          </div>

          <div className="my-4">
            <section className="bg-gray-2 rounded-xl border border-slate-700">
              <div className="p-8 shadow-lg">
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex w-full overflow-x-auto">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Order ID</th>
                          <th scope="col">Customer Phone number</th>
                          <th scope="col">Customer Name</th>
                          <th scope="col">Warranty Status</th>
                          <th scope="col">Date Received</th>
                          <th scope="col">Defective Item</th>
                          <th scope="col">DOA</th>
                          <th scope="col">Bag/Power Pack</th>
                          <th scope="col">Physical Damage</th>
                          <th scope="col">Brand/Model</th>
                          <th scope="col">Estimated Repair Cost</th>
                          <th scope="col">Note</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>1</th>
                          <td>123456789</td>
                          <td>Savishkar</td>
                          <td>Yes</td>
                          <td>2024/10/21</td>
                          <td>Laptop</td>
                          <td>Hinges</td>
                          <td>Yes/No</td>
                          <td>Yes</td>
                          <td>Lenovo/ThinkPad</td>
                          <td>Rs. 5,000</td>
                          <td>N/A</td>
                          <td className="flex gap-3">
                            <button className="btn btn-primary">Edit</button>
                            <button className="btn btn-success">
                              Complete
                            </button>
                            <button className="btn btn-warning">Print</button>
                            <button className="btn btn-secondary">
                              WhatsApp
                            </button>
                          </td>
                        </tr>
                      </tbody>
                      <thead>
                        <tr>
                          <th scope="col">Order ID</th>
                          <th scope="col">Customer Phone number</th>
                          <th scope="col">Customer Name</th>
                          <th scope="col">Warranty Status</th>
                          <th scope="col">Date Received</th>
                          <th scope="col">Defective Item</th>
                          <th scope="col">DOA</th>
                          <th scope="col">Bag/Power Pack</th>
                          <th scope="col">Physical Damage</th>
                          <th scope="col">Brand/Model</th>
                          <th scope="col">Estimated Repair Cost</th>
                          <th scope="col">Note</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
