"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from "@headlessui/react";
import {
  Bars3Icon,
  ChartPieIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaHouseFlag, FaPeopleGroup } from "react-icons/fa6";
import { IoDocumentsOutline, IoDocumentTextOutline } from "react-icons/io5";
import { TbHomeDollar } from "react-icons/tb";
import {
  EllipsisVertical,
  SearchCheck,
  SlidersHorizontal,
  UserRoundIcon,
} from "lucide-react";
import { FaPeopleArrows } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { GrDocumentConfig, GrSecure } from "react-icons/gr";
import { RiLogoutCircleLine } from "react-icons/ri";

const navigation = [
  { name: "Dashboard", href: "#", icon: LuLayoutDashboard, current: false },
  { name: "Properties", href: "#", icon: FaHouseFlag, current: true },
  { name: "Plans", href: "#", icon: IoDocumentTextOutline, current: false },
  { name: "Mortgage Options", href: "#", icon: TbHomeDollar, current: false },
  { name: "CRM", href: "#", icon: FaPeopleGroup, current: false },
  {
    name: "Sales & Transactions",
    href: "#",
    icon: ChartPieIcon,
    current: false,
  },
  { name: "House Inspections", href: "#", icon: SearchCheck, current: false },
  { name: "Leads", href: "#", icon: FaPeopleArrows, current: false },
  { name: "Applications", href: "#", icon: IoDocumentsOutline, current: false },
  {
    name: "Application Review",
    href: "#",
    icon: MdOutlineRateReview,
    current: false,
  },
  {
    name: "Risk Assessment",
    href: "#",
    icon: GrDocumentConfig,
    current: false,
  },
  {
    name: "Organization Settings",
    href: "#",
    icon: SlidersHorizontal,
    current: false,
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primary pb-4">
                <div className="flex flex-col items-start gap-4 shrink-0 border-b border-b-gray-200 pt-6 pb-4 px-6">
                  <img alt="Your Company" src="/logo.svg" className="h-16" />
                  <p className="uppercase text-xs font-light text-white tracking-widest">
                    Residencia Moderno Smart...
                  </p>
                </div>
                <nav className="flex flex-1 flex-col px-6">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-4">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-white text-primary font-semibold"
                                  : "text-white hover:bg-primary hover:text-white",
                                "group flex gap-x-3 rounded-full p-3 text-sm/6",
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className={classNames(
                                  item.current
                                    ? "text-primary"
                                    : "text-white group-hover:text-white",
                                  "size-6 shrink-0",
                                )}
                              />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="mt-auto">
                      <Menu as="div" className="relative">
                        <MenuButton className="-m-1.5 flex items-center justify-between px-3 py-2 border-2 bg-white w-full rounded-full">
                          <span className="sr-only">Open user menu</span>
                          <img
                            alt=""
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            className="size-8 rounded-full bg-gray-50"
                          />
                          <span className="flex flex-col text-left gap-2">
                            <span
                              aria-hidden="true"
                              className="text-sm font-semibold text-black"
                            >
                              James Mensah
                            </span>
                            <span className="text-xs">
                              Jamesmensah@gmail.com
                            </span>
                          </span>
                          <EllipsisVertical />
                        </MenuButton>
                        <MenuItems
                          transition
                          className="absolute -right-2 -top-44 z-10 p-4 mt-2.5 w-64 origin-top-right rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in space-y-4"
                        >
                          <MenuItem>
                            <a
                              href=""
                              className="px-3 py-1 text-sm text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none flex items-center space-x-3"
                            >
                              <UserRoundIcon />
                              <span>My Profile</span>
                            </a>
                          </MenuItem>{" "}
                          <MenuItem>
                            <a
                              href=""
                              className="px-3 py-1 text-sm text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none flex items-center space-x-3"
                            >
                              <GrSecure size={24} />
                              <span>Change Password</span>
                            </a>
                          </MenuItem>{" "}
                          <MenuItem>
                            <a
                              href=""
                              className="px-3 py-1 text-sm text-[#E40000] data-[focus]:bg-gray-50 data-[focus]:outline-none flex items-center space-x-3 border-t border-dotted font-bold"
                            >
                              <RiLogoutCircleLine size={24} />
                              <span>Logout</span>
                            </a>
                          </MenuItem>
                        </MenuItems>
                      </Menu>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primary pb-4">
            <div className="flex flex-col items-start gap-4 shrink-0 border-b border-b-gray-200 pt-6 pb-4 px-6">
              <img alt="Your Company" src="/logo.svg" className="h-16" />
              <p className="uppercase text-xs font-light text-white tracking-widest">
                Residencia Moderno Smart...
              </p>
            </div>
            <nav className="flex flex-1 flex-col px-6">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-3">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-white text-primary font-semibold"
                              : "text-white hover:bg-white hover:text-primary",
                            "group flex gap-x-3 rounded-full p-3 transition__custom",
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={classNames(
                              item.current
                                ? "text-primary"
                                : "text-white group-hover:text-primary",
                              "size-6 shrink-0 transition__custom",
                            )}
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <Menu as="div" className="relative">
                    <MenuButton className="-m-1.5 flex items-center justify-between px-3 py-2 border-2 bg-white w-full rounded-full">
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="size-8 rounded-full bg-gray-50"
                      />
                      <span className="flex flex-col text-left gap-2">
                        <span
                          aria-hidden="true"
                          className="text-sm font-semibold text-black"
                        >
                          James Mensah
                        </span>
                        <span className="text-xs">Jamesmensah@gmail.com</span>
                      </span>
                      <EllipsisVertical />
                    </MenuButton>
                    <MenuItems
                      transition
                      className="absolute -right-2 -top-44 z-10 p-4 mt-2.5 w-52 origin-top-right rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in space-y-4"
                    >
                      <MenuItem>
                        <a
                          href=""
                          className="px-3 py-1 text-sm text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none flex items-center space-x-3"
                        >
                          <UserRoundIcon />
                          <span>My Profile</span>
                        </a>
                      </MenuItem>{" "}
                      <MenuItem>
                        <a
                          href=""
                          className="px-3 py-1 text-sm text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none flex items-center space-x-3"
                        >
                          <GrSecure size={24} />
                          <span>Change Password</span>
                        </a>
                      </MenuItem>{" "}
                      <MenuItem>
                        <a
                          href=""
                          className="px-3 py-1 text-sm text-[#E40000] data-[focus]:bg-gray-50 data-[focus]:outline-none flex items-center space-x-3 border-t border-dotted font-bold"
                        >
                          <RiLogoutCircleLine size={24} />
                          <span>Logout</span>
                        </a>
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky md:hidden top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
