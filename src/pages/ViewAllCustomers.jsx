import React from "react";
import Navbar from "./Navbar";

function ViewAllCustomers() {
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
              <div className="p-4 text-xl font-semibold text-gray-300 border-b border-slate-700">
                All Customer Details
              </div>
              <div className="p-8 shadow-lg pt-3">
                <div className="grid grid-cols-1 gap-4">
                  <div className="dropdown">
                    <label className="btn btn-solid-primary my-2" tabIndex="0">
                      Entries Per Page
                    </label>
                    <div className="dropdown-menu dropdown-menu-bottom-right">
                      <a className="dropdown-item text-sm">5</a>
                      <a tabIndex="-1" className="dropdown-item text-sm">
                        10
                      </a>
                      <a tabIndex="-1" className="dropdown-item text-sm">
                        15
                      </a>
                      <a tabIndex="-1" className="dropdown-item text-sm">
                        20
                      </a>
                      <a tabIndex="-1" className="dropdown-item text-sm">
                        25
                      </a>
                    </div>
                  </div>
                  <div className="flex w-full overflow-x-auto">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Customer Name</th>
                          <th scope="col">Customer Phone No</th>
                          <th scope="col">Customer Address</th>
                          <th scope="col">Registered Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>1</th>
                          <td>Savishkar</td>
                          <td>123456789</td>
                          <td>No 5, some road, colombo 06</td>
                          <td>2024/10/21</td>
                        </tr>
                      </tbody>
                      <thead>
                        <tr>
                          <th scope="col">Order ID</th>
                          <th scope="col">Customer Phone number</th>
                          <th scope="col">Customer Name</th>
                          <th scope="col">Warranty Status</th>
                          <th scope="col">Date Received</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div className="flex justify-start">
                    <p>Showing 11 to 20 of 201 entries</p>
                  </div>
                  <div className="flex justify-start">
                    <div className="pagination w-full max-w-xs overflow-auto">
                      <input type="radio" name="pagination-6" id="pgn-16" />
                      <label for="pgn-16" className="btn">
                        1
                      </label>
                      <input type="radio" name="pagination-6" id="pgn-17" />
                      <label for="pgn-17" className="btn">
                        2
                      </label>
                      <input type="radio" name="pagination-6" id="pgn-18" />
                      <label for="pgn-18" className="btn">
                        3
                      </label>
                      <input type="radio" name="pagination-6" id="pgn-19" />
                      <label for="pgn-19" className="btn">
                        4
                      </label>
                      <input type="radio" name="pagination-6" id="pgn-20" />
                      <label for="pgn-20" className="btn">
                        5
                      </label>
                      <input type="radio" name="pagination-6" id="pgn-21" />
                      <label for="pgn-21" className="btn">
                        6
                      </label>
                      <input type="radio" name="pagination-6" id="pgn-22" />
                      <label for="pgn-22" className="btn">
                        7
                      </label>
                    </div>
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

export default ViewAllCustomers;
