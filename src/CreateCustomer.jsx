function CreateCustomerForm() {
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

function DashboardSidePanel() {
  return (
    <div className="flex flex-row sm:gap-10">
      <div className="sm:w-full sm:max-w-[18rem]">
        <input
          type="checkbox"
          id="sidebar-mobile-fixed"
          className="sidebar-state"
        />
        <label
          htmlFor="sidebar-mobile-fixed"
          className="sidebar-overlay"
        ></label>
        <aside className="sidebar sidebar-fixed-left sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full">
          <section className="sidebar-title items-center p-4">
            <div className="flex flex-col">
              <span>Working Order System</span>
            </div>
          </section>
          <section className="sidebar-content">
            <nav className="menu rounded-md">
              <section className="menu-section px-4">
                <span className="menu-title">Main menu</span>
                <ul className="menu-items">
                  <li className="menu-item menu-active">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#b8b8b8"
                    >
                      <path d="M240-200h133.85v-237.69h212.3V-200H720v-360L480-740.77 240-560v360Zm-60 60v-450l300-225.77L780-590v450H526.15v-237.69h-92.3V-140H180Zm300-330.38Z" />
                    </svg>
                    <span>General</span>
                  </li>

                  <li className="menu-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#b8b8b8"
                    >
                      <path d="M687.69-100q-74.92 0-127.46-52.54-52.54-52.54-52.54-127.46 0-74.92 52.54-127.46Q612.77-460 687.69-460q74.93 0 127.46 52.54 52.54 52.54 52.54 127.46 0 74.92-52.54 127.46Q762.62-100 687.69-100Zm66.62-88.46 24.92-24.92-73.84-73.85v-110.46H670v124.92l84.31 84.31Zm-542 48.46q-29.92 0-51.12-21.19Q140-182.39 140-212.31v-535.38q0-29.92 21.19-51.12Q182.39-820 212.31-820h176.23q8.31-29.23 33.96-48.46t57.5-19.23q33.08 0 58.42 19.23 25.35 19.23 33.66 48.46h175.61q29.92 0 51.12 21.19Q820-777.61 820-747.69v245.38q-14.16-9.15-28.77-15.65-14.62-6.5-31.23-11.58v-218.15q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H660v104.61H300V-760h-87.69q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 5.39 3.46 8.85t8.85 3.46h228.54q5.08 16.61 11.77 31.42 6.69 14.81 16.61 28.58H212.31ZM480-755.38q15.46 0 25.81-10.35 10.34-10.35 10.34-25.81 0-15.46-10.34-25.81-10.35-10.34-25.81-10.34-15.46 0-25.81 10.34-10.34 10.35-10.34 25.81 0 15.46 10.34 25.81 10.35 10.35 25.81 10.35Z" />
                    </svg>
                    <span>View Pending Orders</span>
                  </li>
                  <li className="menu-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#b8b8b8"
                    >
                      <path d="m438-262.69 212.15-212.16-43.38-43.38-169.39 169.38-84.76-84.76-42.77 42.76L438-262.69ZM252.31-100Q222-100 201-121q-21-21-21-51.31v-615.38Q180-818 201-839q21-21 51.31-21H570l210 210v477.69Q780-142 759-121q-21 21-51.31 21H252.31ZM540-620v-180H252.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v615.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h455.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-620H540ZM240-800v180-180V-160v-640Z" />
                    </svg>
                    <span>View Completed Orders</span>
                  </li>
                  <li className="menu-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#b8b8b8"
                    >
                      <path d="M567.31-685.39v-59.99h300v59.99h-300Zm0 155.39v-60h300v60h-300Zm0 155.38v-59.99h300v59.99h-300ZM317.4-407.69q-43.55 0-74.13-30.49t-30.58-74.04q0-43.55 30.49-74.12 30.49-30.58 74.04-30.58 43.55 0 74.13 30.48 30.57 30.49 30.57 74.04 0 43.55-30.48 74.13-30.49 30.58-74.04 30.58ZM92.69-183.08v-60.61q0-17.03 8.27-32.44 8.27-15.41 22.81-24.48 43.46-25.47 91.73-38.58 48.28-13.12 101.81-13.12t101.8 13.12q48.27 13.11 91.74 38.58 14.53 9.07 22.8 24.48 8.27 15.41 8.27 32.44v60.61H92.69Zm63.69-66.15v6.15h321.85v-6.15q-37.31-21.16-78.04-32.12-40.73-10.96-82.88-10.96-42.16 0-82.89 10.96-40.73 10.96-78.04 32.12Zm160.93-218.46q18.54 0 31.57-13.04 13.04-13.04 13.04-31.58t-13.04-31.57q-13.03-13.04-31.57-13.04t-31.58 13.04q-13.04 13.03-13.04 31.57t13.04 31.58q13.04 13.04 31.58 13.04Zm0-44.62Zm0 269.23Z" />
                    </svg>
                    <span>View All Customers</span>
                  </li>
                  <li className="menu-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#b8b8b8"
                    >
                      <path d="M503.85-494.31q25.53-27.77 37.77-63.77 12.23-36 12.23-74.23 0-38.23-12.23-74.23-12.24-36-37.77-63.77 52.69 6.08 87.5 45.5 34.8 39.43 34.8 92.5 0 53.08-34.8 92.5-34.81 39.42-87.5 45.5Zm210 306.62v-93.85q0-32.71-13.31-62.24t-37.77-50.68q46 15.31 84.69 41.31t38.69 71.61v93.85h-72.3ZM786.15-450v-80h-80v-60h80v-80h60v80h80v60h-80v80h-60Zm-452.3-42.31q-57.75 0-98.88-41.12-41.12-41.13-41.12-98.88 0-57.75 41.12-98.87 41.13-41.13 98.88-41.13 57.75 0 98.87 41.13 41.13 41.12 41.13 98.87 0 57.75-41.13 98.88-41.12 41.12-98.87 41.12Zm-300 304.62v-88.93q0-29.38 15.96-54.42 15.96-25.04 42.65-38.5 59.31-29.07 119.66-43.61 60.34-14.54 121.73-14.54 61.38 0 121.73 14.54 60.34 14.54 119.65 43.61 26.69 13.46 42.65 38.5 15.97 25.04 15.97 54.42v88.93h-600Zm300-364.62q33 0 56.5-23.5t23.5-56.5q0-33-23.5-56.5t-56.5-23.5q-33 0-56.5 23.5t-23.5 56.5q0 33 23.5 56.5t56.5 23.5Zm-240 304.62h480v-28.93q0-12.15-7.04-22.5-7.04-10.34-19.12-16.88-51.69-25.46-105.41-38.58-53.73-13.11-108.43-13.11-54.71 0-108.43 13.11Q171.69-341.46 120-316q-12.08 6.54-19.11 16.88-7.04 10.35-7.04 22.5v28.93Zm240-384.62Zm0 384.62Z" />
                    </svg>
                    <span>Create Customer</span>
                  </li>
                </ul>
              </section>
            </nav>
          </section>
          <section className="sidebar-footer justify-end bg-gray-2 pt-2">
            <div className="divider my-0"></div>
            <div className="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4">
              <label
                className="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4"
                tabIndex="0"
              >
                <div className="flex flex-row gap-4 p-4">
                  <div className="avatar-square avatar avatar-lg">
                    <img src="https://i.pravatar.cc/150?img=30" alt="avatar" />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-gray-500">Logged in as:</span>
                    <span>Full Name</span>
                  </div>
                </div>
              </label>
              <div className="dropdown-menu-right-top dropdown-menu ml-2">
                <a className="dropdown-item text-sm">Profile</a>
                <a tabIndex="-1" className="dropdown-item text-sm">
                  Account settings
                </a>
                <a tabIndex="-1" className="dropdown-item text-sm">
                  Change email
                </a>
                <a tabIndex="-1" className="dropdown-item text-sm">
                  Subscriptions
                </a>
                <a tabIndex="-1" className="dropdown-item text-sm">
                  Change password
                </a>
                <a tabIndex="-1" className="dropdown-item text-sm">
                  Refer a friend
                </a>
                <a tabIndex="-1" className="dropdown-item text-sm">
                  Settings
                </a>
              </div>
            </div>
          </section>
        </aside>
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
          <CreateCustomerForm />
        </div>
      </div>
    </div>
  );
}

export default function CreateCustomer() {
  return <DashboardSidePanel />;
  d;
}
