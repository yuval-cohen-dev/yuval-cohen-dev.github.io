import { MenuItem } from "@/types/types";
import Motion from "@Motion";
import Link from "next/link";

export default function NavigationBar({
  menuItems,
}: {
  menuItems: MenuItem[];
}) {
  return (
    <nav>
      <ul className="flex space-x-8 text-lg">
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
                className="text-white py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white transition duration-300"
              >
                {header.name}
              </Link>
            </li>
          </Motion>
        ))}
      </ul>
    </nav>
  );
}
