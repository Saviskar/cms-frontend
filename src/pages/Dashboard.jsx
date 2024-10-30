import Navbar from "./Navbar";

function Dashboard() {
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
                Create Work Order
              </div>
              <div className="p-8 shadow-lg">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <label className="sr-only" htmlFor="phone">
                        Customer Phone Number
                      </label>
                      <input
                        className="input input-solid max-w-full"
                        placeholder="Enter Customer Number"
                        type="tel"
                        id="phone"
                      />
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="date">
                        Date
                      </label>
                      <input
                        className="input input-solid max-w-full"
                        placeholder="Select a date"
                        type="date"
                        id="date"
                      />
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="initial">
                        Warranty Status
                      </label>
                      <select
                        className="input input-solid max-w-full"
                        id="initial"
                      >
                        <option value="No">No</option>
                        <option value="Mr">Yes</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <label className="sr-only" htmlFor="initial">
                        Defective Item
                      </label>
                      <select
                        className="input input-solid max-w-full"
                        id="initial"
                      >
                        <option value="No">Laptop</option>
                        <option value="Mr">Finger Print Scanner</option>
                      </select>
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="initial">
                        DOA
                      </label>
                      <select
                        className="input input-solid max-w-full"
                        id="initial"
                      >
                        <option value="No">Software Reinstallatoin</option>
                        <option value="Mr">Battery Replacement</option>
                      </select>
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="initial">
                        Bag
                      </label>
                      <select
                        className="input input-solid max-w-full"
                        id="initial"
                      >
                        <option value="No">No</option>
                        <option value="Mr">Yes</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <label className="sr-only" htmlFor="initial">
                        Power Pack
                      </label>
                      <select
                        className="input input-solid max-w-full"
                        id="initial"
                      >
                        <option value="No">Yes</option>
                        <option value="Mr">No</option>
                      </select>
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="initial">
                        Physical Damage
                      </label>
                      <select
                        className="input input-solid max-w-full"
                        id="initial"
                      >
                        <option value="No">Yes</option>
                        <option value="Mr">No</option>
                      </select>
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="phone">
                        Brand
                      </label>
                      <input
                        className="input input-solid max-w-full"
                        placeholder="Brand"
                        type="tel"
                        id="phone"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <label className="sr-only" htmlFor="phone">
                        Model
                      </label>
                      <input
                        className="input input-solid max-w-full"
                        placeholder="Enter Model"
                        type="tel"
                        id="phone"
                      />
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="phone">
                        Estimated Repair Cost
                      </label>
                      <input
                        className="input input-solid max-w-full"
                        placeholder="Estimated Repair Cost"
                        type="tel"
                        id="phone"
                      />
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="phone">
                        Note
                      </label>
                      <input
                        className="input input-solid max-w-full"
                        placeholder="Note"
                        type="tel"
                        id="phone"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="rounded-lg btn btn-primary btn-block"
                    >
                      Create Order
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
