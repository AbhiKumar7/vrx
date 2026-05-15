import React from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { FaBell, FaUniversity, FaCreditCard } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { Link } from "react-router-dom";
import useLogout from "../hooks/uselogout";

function OnBoardNavbar() {
  const { logoutMutation } = useLogout();

  return (
    <nav className="bg-red-600 text-white border-b border-base-300 sticky top-0 z-30 h-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="text-3xl font-bold font-mono tracking-wider">
                Bank
              </span>
            </Link>
          </div>

          {/* Banking Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/accounts" className="hover:text-primary transition">
              Accounts
            </Link>

            <Link to="/cards" className="hover:text-primary transition">
              Cards
            </Link>

            <Link to="/payments" className="hover:text-primary transition">
              Payments
            </Link>

            <Link to="/loans" className="hover:text-primary transition">
              Loans
            </Link>

            <Link to="/transactions" className="hover:text-primary transition">
              Transactions
            </Link>

            <Link to="/investments" className="hover:text-primary transition">
              Investments
            </Link>

            <Link to="/insurance" className="hover:text-primary transition">
              Insurance
            </Link>

            <Link to="/beneficiaries" className="hover:text-primary transition">
              Beneficiaries
            </Link>

            <Link to="/support" className="hover:text-primary transition">
              Support
            </Link>

            <Link to="/settings" className="hover:text-primary transition">
              Settings
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Notification */}
            <Link to="/notifications">
              <button className="btn btn-ghost btn-circle">
                <FaBell className="h-6 w-6 text-base-content opacity-70" />
              </button>
            </Link>

            {/* Logout */}
            <button
              className="btn btn-ghost btn-circle"
              onClick={logoutMutation}
            >
              <IoLogOutOutline className="h-6 w-6 text-base-content opacity-70" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default OnBoardNavbar;
