'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutGroup, motion } from 'framer-motion';

const navItems = {
  '/': {
    name: 'home',
  },
  '/about': {
    name: 'about',
  },
  '/blog': {
    name: 'blog',
  },
  '/guestbook': {
    name: 'guestbook',
  },
};

function Logo() {
  return (
    <Link aria-label="Nhi Nguyen" href="/">

      {/* To be implemented for the svg */}
      <motion.svg fill="#000000" className="text-black dark:text-white h-[25px] md:h-[37px]" height="30px" width="40px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.631 23.631">
        <motion.g >
          <motion.polygon  initial={{ pathLength: 0 }}
                           animate={{ pathLength: 1 }}
                           transition={{
                             duration: 2,
                             repeat: Infinity,
                             repeatType: "loop",
                             repeatDelay: 2
                           }}
                           points="0,0.663 9.401,0.663 15.882,7.146 15.882,14.127 5.307,3.608 5.274,22.969 0,22.969"

                           strokeLinecap="round"
                           strokeLinejoin="round"
          >
          </motion.polygon>
          <motion.polygon  initial={{ pathLength: 0 }}
                           animate={{ pathLength: 1 }}
                           transition={{
                             duration: 2,
                             repeat: Infinity,
                             repeatType: "loop",
                             repeatDelay: 2
                           }} points="23.631,22.969 14.232,22.969 7.752,16.485 7.752,9.501 18.327,20.018 18.359,0.662 23.631,0.662"></motion.polygon>
        </motion.g>
      </motion.svg>
      {/*<motion.svg*/}
      {/*  className="text-black dark:text-white h-[25px] md:h-[37px]"*/}
      {/*  width="25"*/}
      {/*  height="37"*/}
      {/*  viewBox="0 0 23.631 23.631"*/}
      {/*  fill="none"*/}
      {/*  xmlns="http://www.w3.org/2000/svg"*/}
      {/*>*/}
      {/*  <motion.path*/}
      {/*    initial={{*/}
      {/*      opacity: 0,*/}
      {/*      pathLength: 0,*/}
      {/*    }}*/}
      {/*    animate={{*/}
      {/*      opacity: 1,*/}
      {/*      pathLength: 1,*/}
      {/*    }}*/}
      {/*    transition={{*/}
      {/*      duration: 0.5,*/}
      {/*      type: 'spring',*/}
      {/*      stiffness: 50,*/}
      {/*    }}*/}
      {/*    d="M39 316V0"*/}
      {/*    stroke="currentColor"*/}
      {/*    strokeWidth={78}*/}
      {/*  />*/}
      {/*  <motion.path*/}
      {/*    initial={{ x: -200, opacity: 0 }}*/}
      {/*    animate={{ x: 0, opacity: 1 }}*/}
      {/*    transition={{*/}
      {/*      duration: 0.5,*/}
      {/*      type: 'spring',*/}
      {/*      stiffness: 50,*/}
      {/*    }}*/}
      {/*    d="M232 314.998H129.852L232 232.887V314.998Z"*/}
      {/*    fill="currentColor"*/}
      {/*  />*/}
      {/*</motion.svg>*/}
    </Link>
  );
}

export default function Navbar() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif border-solid">
      <div className="lg:sticky lg:top-20 border-solid border-amber-500">
        <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
          <Logo />
        </div>
        <LayoutGroup>
          <nav
            className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                      {
                        'text-neutral-500': !isActive,
                        'font-bold': isActive,
                      }
                    )}
                  >
                    <span className="relative py-[5px] px-[10px]">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
