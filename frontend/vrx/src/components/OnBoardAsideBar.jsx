import React, { useState } from "react";
import {
  FaPlus,
  FaMinus,
  FaUniversity,
  FaCreditCard,
  FaMoneyBillWave,
  FaCog,
} from "react-icons/fa";

function OnBoardAsideBar() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <aside className="w-72 min-h-screen bg-base-200 border-r border-base-300 p-4">

    
      <h1 className="text-2xl font-bold mb-8">Banking Panel</h1>

   
      <div className="mb-4">
        <button
          onClick={() => toggleMenu("accounts")}
          className="w-full flex items-center justify-between bg-base-300 px-4 py-3 rounded-lg hover:bg-base-100 transition"
        >
          <div className="flex items-center gap-3">
            <FaUniversity />
            <span>Accounts</span>
          </div>

          {openMenu === "accounts" ? <FaMinus /> : <FaPlus />}
        </button>

        {openMenu === "accounts" && (
          <div className="ml-8 mt-3 flex flex-col gap-2">
            <a href="#" className="hover:text-primary">
              Savings Account
            </a>

            <a href="#" className="hover:text-primary">
              Current Account
            </a>

            <a href="#" className="hover:text-primary">
              Fixed Deposit
            </a>
          </div>
        )}
      </div>

      
      <div className="mb-4">
        <button
          onClick={() => toggleMenu("cards")}
          className="w-full flex items-center justify-between bg-base-300 px-4 py-3 rounded-lg hover:bg-base-100 transition"
        >
          <div className="flex items-center gap-3">
            <FaCreditCard />
            <span>Cards</span>
          </div>

          {openMenu === "cards" ? <FaMinus /> : <FaPlus />}
        </button>

        {openMenu === "cards" && (
          <div className="ml-8 mt-3 flex flex-col gap-2">
            <a href="#" className="hover:text-primary">
              Debit Card
            </a>

            <a href="#" className="hover:text-primary">
              Credit Card
            </a>

            <a href="#" className="hover:text-primary">
              Virtual Card
            </a>
          </div>
        )}
      </div>

     
      <div className="mb-4">
        <button
          onClick={() => toggleMenu("payments")}
          className="w-full flex items-center justify-between bg-base-300 px-4 py-3 rounded-lg hover:bg-base-100 transition"
        >
          <div className="flex items-center gap-3">
            <FaMoneyBillWave />
            <span>Payments</span>
          </div>

          {openMenu === "payments" ? <FaMinus /> : <FaPlus />}
        </button>

        {openMenu === "payments" && (
          <div className="ml-8 mt-3 flex flex-col gap-2">
            <a href="#" className="hover:text-primary">
              UPI Transfer
            </a>

            <a href="#" className="hover:text-primary">
              Bank Transfer
            </a>

            <a href="#" className="hover:text-primary">
              Bill Payments
            </a>
          </div>
        )}
      </div>

      
      <div className="mb-4">
        <button
          onClick={() => toggleMenu("settings")}
          className="w-full flex items-center justify-between bg-base-300 px-4 py-3 rounded-lg hover:bg-base-100 transition"
        >
          <div className="flex items-center gap-3">
            <FaCog />
            <span>Settings</span>
          </div>

          {openMenu === "settings" ? <FaMinus /> : <FaPlus />}
        </button>

        {openMenu === "settings" && (
          <div className="ml-8 mt-3 flex flex-col gap-2">
            <a href="#" className="hover:text-primary">
              Profile
            </a>

            <a href="#" className="hover:text-primary">
              Security
            </a>

            <a href="#" className="hover:text-primary">
              Notifications
            </a>
          </div>
        )}
      </div>
    </aside>
  );
}

export default OnBoardAsideBar;