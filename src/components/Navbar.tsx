import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import { PiMagnifyingGlass } from "react-icons/pi";
import Currency from "@/components/Currency.tsx";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Shortlets");
  const navigate = useNavigate();

  const navigation = [
    {
      name: "Buy",
      hasDropdown: true,
      dropdownItems: ["Residential", "Commercial", "Land", "New Projects"],
    },
    {
      name: "Shortlets",
      hasDropdown: true,
      dropdownItems: ["Daily", "Weekly", "Monthly", "Yearly"],
    },
    {
      name: "Sell",
      hasDropdown: true,
      dropdownItems: ["List Property", "Find Buyers", "Valuation"],
    },
    {
      name: "Invest",
      hasDropdown: true,
      dropdownItems: ["Real Estate", "REIT", "Property Bonds"],
    },
    {
      name: "Services",
      hasDropdown: true,
      dropdownItems: ["Property Management", "Maintenance", "Legal Services"],
    },
    {
      name: "Enterprise",
      hasDropdown: true,
      dropdownItems: ["Solutions", "Pricing", "Contact Sales"],
    },
    {
      name: "Agents & Realtors",
      hasDropdown: false,
    },
  ];
  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="bg-[#FCFCFC] shadow-sm">
      <div className="section">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="text-primary text-2xl font-bold">
              <img src="/logo-green.svg" alt="" />
            </div>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className="relative w-full max-w-xl flex items-center form-input bg-white">
              <PiMagnifyingGlass />
              <input
                type="text"
                placeholder="Search for anything"
                className="w-full px-2 bg-transparent placeholder:text-sm outline-none"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => setActiveNav(item.name)}
                  className={`px-1 py-2 text-sm flex items-center hover:text-primary relative
                    ${
                      activeNav === item.name ? "text-primary" : "text-gray-500"
                    }`}
                >
                  {item.name}
                  {item.hasDropdown && <FaCaretDown className="ml-1 h-4 w-4" />}
                  {/* Active indicator */}
                  {activeNav === item.name && (
                    <div className="absolute bottom-0 left-0 right-3 h-1 w-5 mx-auto bg-primary rounded-full" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <a
                          key={dropdownItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                        >
                          {dropdownItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <button className="px-4 py-2 text-sm text-primary hover:text-primary border-x">
              Refer & Earn
            </button>

            <div className="flex items-center space-x-2">
              <Currency />
              <button
                onClick={goToLogin}
                className="p-1 rounded-full bg-primary text-white px-5 py-2"
              >
                Login
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="px-3 py-2">
              <input
                type="text"
                placeholder="Search for anything"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            {navigation.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => setActiveNav(item.name)}
                  className={`block px-3 py-2 text-base w-full text-left relative
                    ${
                      activeNav === item.name ? "text-primary" : "text-gray-700"
                    }`}
                >
                  <div className="flex justify-between items-center">
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                  </div>
                  {activeNav === item.name && (
                    <div className="absolute left-0 w-1 h-full bg-primary top-0" />
                  )}
                </button>

                {/* Mobile Dropdown */}
                {item.hasDropdown && activeNav === item.name && (
                  <div className="bg-gray-50 px-4 py-2">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <a
                        key={dropdownItem}
                        href="#"
                        className="block py-2 text-sm text-gray-700 hover:text-primary"
                      >
                        {dropdownItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="block px-3 py-2 text-base w-full text-left text-primary hover:text-primary">
              Refer & Earn
            </button>
            <div className="px-3 py-2 flex items-center justify-between">
              <Currency />
              <button
                onClick={goToLogin}
                className="p-1 rounded-full bg-primary text-white px-5 py-2"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
