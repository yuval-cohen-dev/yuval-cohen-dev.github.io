"use client";
import { useState } from "react";
import { MenuItem } from "@/types/types";
import Motion from "@Motion";
import Link from "next/link";
import Hamburger from "../Hamburger"; // Assuming you have a Hamburger component

export default function NavigationBar({
  menuItems
}: {
  menuItems: MenuItem[];
}) {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center">
      {/* Desktop Navigation (visible on medium screens and above) */}
      <div className="hidden md:flex justify-end w-full">
        <ul className="flex text-lg space-x-6">
          {menuItems.map((header, index) => (
            <Motion
              key={`menu_item_${index}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <li>
                <Link
                  href={header.link}
                  className="text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition duration-300"
                >
                  {header.name}
                </Link>
              </li>
            </Motion>
          ))}
        </ul>
      </div>

      {/* Hamburger Icon (Mobile only) */}
      <div
        className="md:hidden flex items-center"
        style={{
          paddingRight: 10
        }}
      >
        <Hamburger onClick={toggleMenu} />
      </div>

      {/* Mobile Navigation Menu (visible when the menu is open) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-800">
          <ul className="flex flex-col items-center text-lg space-y-4 py-6">
            {menuItems.map((header, index) => (
              <Motion
                key={`mobile_menu_item_${index}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <li>
                  <Link
                    href={header.link}
                    className="text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition duration-300"
                    onClick={() => setIsMenuOpen(false)} // Close menu on item click
                  >
                    {header.name}
                  </Link>
                </li>
              </Motion>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
