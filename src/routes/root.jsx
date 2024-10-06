import React from "react";
import { Outlet, Link } from "react-router-dom";

import bakerBatesLogo from "../companyLogos/bakerBatesLogo.png";

const root = () => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-base-100 w-full">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2 font-bold text-3xl bg-gradient-to-r from-gray-800 via-slate-700 to-gray-900 bg-clip-text text-transparent">
              <Link to={`/`}>
                {" "}
                <div className="flex justify-center items-center">
                  <img
                    src={bakerBatesLogo}
                    alt="BakerBates PR logo"
                    className="h-32 object-contain"
                  />
                </div>
              </Link>
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal text-3xl">
                {/* Navbar menu content here */}
                <li>
                  <Link to={`/`}>Home</Link>
                </li>
                <li>
                  <Link to={`contact`}>Contact</Link>
                </li>
                <li>
                  <Link to={`about`}>About</Link>
                </li>
                <li>
                  <Link to={`services`}>Services</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side z-10">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li className="text-3xl">
              <Link to={`/`}>Home</Link>
            </li>
            <li className="text-3xl">
              <Link to={`contact`}>Contact</Link>
            </li>
            <li className="text-3xl">
              <Link to={`about`}>About</Link>
            </li>
            <li className="text-3xl">
              <Link to={`services`}>Services</Link>
            </li>
          </ul>
        </div>
      </div>

      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default root;
