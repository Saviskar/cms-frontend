import Navbar from "./Navbar";

export default function CreateCustomer() {
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
                Create New Customer
              </div>
              <div className="p-8 shadow-lg">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                      <label className="sr-only" htmlFor="initial">
                        Title
                      </label>
                      <select
                        className="input input-solid max-w-full"
                        id="initial"
                      >
                        <option value="">Select Title</option>
                        <option value="Mr">Mr.</option>
                        <option value="Ms">Ms.</option>
                        <option value="Mrs">Mrs.</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="name">
                        Customer Name
                      </label>
                      <input
                        className="input input-solid max-w-full"
                        placeholder="Enter Customer Name"
                        type="text"
                        id="name"
                      />
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="registered-date">
                        Registered Date
                      </label>
                      <input
                        className="input input-solid max-w-full"
                        placeholder="Select Registered Date"
                        type="date"
                        id="registered-date"
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <label className="sr-only" htmlFor="address">
                      Customer Address
                    </label>
                    <input
                      className="input input-solid max-w-full"
                      placeholder="Enter Customer Address"
                      type="text"
                      id="address"
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="rounded-lg btn btn-primary btn-block"
                    >
                      Create Customer
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
