import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaCaretDown } from "react-icons/fa";

export default function Currency() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <img src="/icons/usd.svg" alt="" />
          <span>USD</span>
          <FaCaretDown aria-hidden="true" className="-mr-1 size-5" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem as="div">
            <a
              href="#"
              className="group flex items-center space-x-5 px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              <img src="/icons/usd.svg" alt="" />
              <span>USD</span>
            </a>
          </MenuItem>{" "}
          <MenuItem as="div">
            <a
              href="#"
              className="group flex items-center space-x-5 px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              <img src="/icons/usd.svg" alt="" />
              <span>USD</span>
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
