import { Link } from "react-router-dom";

export default function CreateCustomerForm() {
  return (
    <section className="bg-gray-2 rounded-xl border border-slate-700">
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
              <select className="input input-solid max-w-full" id="initial">
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
  );
}
