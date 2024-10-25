export default function Login() {
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
                  <li className="menu-item">
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

                  <li className="menu-item menu-active">
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
                  <div className="avatar-square avatar avatar-md">
                    <img src="https://i.pravatar.cc/150?img=30" alt="avatar" />
                  </div>

                  <div className="flex flex-col">
                    <span>Sandra Marx</span>
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
            className="btn-primary btn sm:hidden"
          >
            Open Sidebar
          </label>
        </div>

        <div className="my-4 grid grid-cols-2 gap-4">
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>

          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
          <div className="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
            +
          </div>
        </div>
      </div>
    </div>
  );
}
