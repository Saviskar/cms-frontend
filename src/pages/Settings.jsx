import React from "react";
import Navbar from "./Navbar";

export default function Settings() {
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
                Add ODA & Defective Item
              </div>
              <div className="p-8 shadow-lg">
                <div className="grid grid-cols-1 gap-4">
                  <div class="w-full">
                    <label class="sr-only" for="name">
                      Enter Defective New Item Name
                    </label>
                    <input
                      class="input input-solid max-w-full"
                      placeholder="Enter Defective New Item Name"
                      type="text"
                      id="name"
                    />
                  </div>
                  <div>
                    <button
                      type="button"
                      className="rounded-lg btn btn-primary btn-block"
                    >
                      Create
                    </button>
                  </div>
                  <div class="w-full">
                    <label class="sr-only" for="name">
                      Enter New DOA Name
                    </label>
                    <input
                      class="input input-solid max-w-full"
                      placeholder="Enter New DOA Name"
                      type="text"
                      id="name"
                    />
                  </div>
                  <div>
                    <button
                      type="button"
                      className="rounded-lg btn btn-primary btn-block"
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1 */}
            <section className="bg-gray-2 rounded-xl border border-slate-700">
              <div className="p-4 text-xl font-semibold text-gray-300 border-b border-slate-700">
                DOA
              </div>
              <div className="flex w-full overflow-x-auto p-8">
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Service</td>
                      <td>
                        <button className="btn btn-error">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Software Reinstallation</td>
                      <td>
                        <button className="btn btn-error">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Battery Issue</td>
                      <td>
                        <button className="btn btn-error">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Column 2 */}
            <section className="bg-gray-2 rounded-xl border border-slate-700">
              <div className="p-4 text-xl font-semibold text-gray-300 border-b border-slate-700">
                Defective Item
              </div>
              <div className="flex w-full overflow-x-auto p-8">
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Laptop</td>
                      <td>
                        <button className="btn btn-error">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Desktop</td>
                      <td>
                        <button className="btn btn-error">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Scanner</td>
                      <td>
                        <button className="btn btn-error">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
