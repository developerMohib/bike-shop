
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Products', href: '/products', current: false },
  { name: 'About Us', href: '/about', current: false },
  { name: 'Contact Us', href: '/contact', current: false },
]

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const handleClose = (event: React.MouseEvent<HTMLSpanElement>) => {
    const alertBox = event.currentTarget.parentElement;
    if (alertBox) {
      alertBox.style.display = 'none';
    }
  };
  const user = false;
  return (
    <>
      <div className="alert flex justify-between items-center bg-amber-600 px-5 py-1">
        Danger! Indicates a dangerous or potentially negative action.
        <span className="closebtn cursor-pointer text-3xl" onClick={handleClose}>
          &times;
        </span>
      </div>
      <Disclosure as="nav" className="shadow">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <Link to='/' className="flex shrink-0 items-center">
                <img
                  alt="Your Company"
                  src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-auto"
                />
              </Link>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="size-6" />
              </button>


              {/* Search */}
              <div className="flex lg:ml-2">
                <Link to="#" className="p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                </Link>
              </div>

              {/* Cart */}
              <div className="flow-root">
                <Link to="#" className="group flex items-center p-2">
                  <ShoppingBagIcon
                    aria-hidden="true"
                    className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                  <span className="sr-only">items in cart, view bag</span>
                </Link>
              </div>

              {
                user ? (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          alt=""
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          className="size-8 rounded-full"
                        />
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                      <MenuItem>
                        <Link
                          to="/"
                          className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                        >
                          Your Profile
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          to="/"
                          className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                        >
                          Settings
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          to="/"
                          className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                        >
                          Sign out
                        </Link>
                      </MenuItem>
                    </MenuItems>
                  </Menu>) : (<div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-3">
                    <Link to="/login" className="-m-2 block p-2 font-medium text-gray-900">
                      Sign in
                    </Link>
                    <span aria-hidden="true" className="h-6 w-px ml-2.5 bg-gray-200" />
                    <Link to="/registration" className="-m-2 block p-2 font-medium text-gray-900">
                      Create Account
                    </Link>
                  </div>)
              }
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  )
}
