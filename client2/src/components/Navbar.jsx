import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    // code to run on component mount
    return () => {
      // code to run on component unmount
    };
  }, []);

  return (
    <div className="bg-[#610C9F] ">
      <div>
        <div className="flex justify-between ">
          <h1 className="text-gray-900 my-4">Todo App</h1>
          <div>
            <ul className="flex justify-between m-7 space-x-4 list-none ">
              <li>
                <a href="#" className="text-decoration-none text-[#18f348]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-[#18f348]">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-[#18f348]">
                  Signup
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-[#18f348]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-[#18f348]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
