import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const { t } = useTranslation()
  const navigation = [
    "Product",
    "Features",
    "Pricing",
    "Company",
    "Blog",
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="text-3xl flex items-center space-x-3 md:text-4xl font-medium text-blue-600 dark:text-gray-100">
                    <span>
                      <Image
                        src="/img/questable_appicon.png"
                        alt="N"
                        width="34"
                        height="34"
                        className="w-8 md:w-10 rounded-md"
                      />
                    </span>
                    <span>
                      <Image
                        src="/img/questable_letter_bold_standard.png"
                        alt="N"
                        width="190"
                        height="34"
                        className="w-48 rounded-md"
                      />
                    </span>
                    {/* <span className='text-[#0097b2]'>QUESTABLE</span> */}
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-blue-600 focus:text-blue-600 focus:bg-blue-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  {/* <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg> */}
                  <Link href="https://app.questable.ai/signin">
                    <p className='bg-[#0097b2] py-2 px-3 text-white rounded-md'>Log In</p>
                  </Link>
                </Disclosure.Button>

                {/* <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href="/" className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-blue-600 focus:text-blue-600 focus:bg-blue-100 dark:focus:bg-gray-800 focus:outline-none">
                          {item}
                      </Link>
                    ))}
                    <Link href="https://app.questable.ai/signup" className="w-full px-6 py-2 mt-3 text-center text-white bg-blue-600 rounded-md lg:ml-5">         
                        Get Started for Free
                    </Link>
                  </>
                </Disclosure.Panel> */}
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        {/* <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href="/" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-blue-600 focus:text-blue-600 focus:bg-blue-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}

        <div className="hidden mr-3 space-x-4 lg:flex nav__item items-center">
        <Link href="https://app.questable.ai/signin">
                    <p>Log In</p>
                  </Link>
          <Link href="https://app.questable.ai/signup" className="px-6 py-2 text-white bg-blue-600 rounded-md md:ml-5">
              {t('Get Started for Free')}
          </Link>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
