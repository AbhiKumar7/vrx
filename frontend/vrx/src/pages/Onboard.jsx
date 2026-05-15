import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Onboard() {
  const [search, setSearch] = useState("");

  const links = [
    { name: "Accounts", path: "/accounts" },
    { name: "Cards", path: "/cards" },
    { name: "Payments", path: "/payments" },
    { name: "Loans", path: "/loans" },
    { name: "Transactions", path: "/transactions" },
    { name: "Investments", path: "/investments" },
    { name: "Insurance", path: "/insurance" },
    { name: "Beneficiaries", path: "/beneficiaries" },
    { name: "Support", path: "/support" },
    { name: "Settings", path: "/settings" },

    { name: "Savings Account", path: "/savings-account" },
    { name: "Current Account", path: "/current-account" },
    { name: "Fixed Deposit", path: "/fixed-deposit" },

    { name: "Debit Card", path: "/debit-card" },
    { name: "Credit Card", path: "/credit-card" },
    { name: "Virtual Card", path: "/virtual-card" },

    { name: "UPI Transfer", path: "/upi-transfer" },
    { name: "Bank Transfer", path: "/bank-transfer" },
    { name: "Bill Payments", path: "/bill-payments" },

    { name: "Profile", path: "/profile" },
    { name: "Security", path: "/security" },
    { name: "Notifications", path: "/notifications" },
  ];

  const filteredLinks = links.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      {/* Right Side Search */}
      <div className="flex justify-end">
        <div className="relative w-full max-w-md">

          <input
            type="text"
            placeholder="Search banking features..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary"
          />

          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          {/* Dropdown Results */}
          {search && (
            <div className="absolute top-16 left-0 w-full bg-base-200 rounded-xl shadow-lg p-3 z-50">

              {filteredLinks.length > 0 ? (
                <div className="flex flex-col gap-2">

                  {filteredLinks.map((item, index) => (
                    <Link
                      to={item.path}
                      key={index}
                      className="p-3 rounded-lg hover:bg-base-300 transition"
                    >
                      {item.name}
                    </Link>
                  ))}

                </div>
              ) : (
                <p className="text-center text-gray-500 py-3">
                  No result found
                </p>
              )}

            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default Onboard;