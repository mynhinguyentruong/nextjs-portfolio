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
     <motion.svg width="71" height="84" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.g filter="url(#filter0_d_2_23)">
          <motion.path
              initial={{
            opacity: 0,
            pathLength: 0,
          }}
            animate={{
              opacity: 1,
              pathLength: 1,
            }} transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1
          }} d="M4 0.00341415H33.0412L53.0621 21.8581V45.3916L20.3942 9.93123L20.2922 75.1986H4V0.00341415Z"
            stroke="currentColor"
            strokeWidth={9}/>
          <motion.path
              initial={{
                opacity: 0,
                pathLength: 0,
              }}
              animate={{
                opacity: 1,
                pathLength: 1,
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1
          }} d="M77 75.1986H47.965L27.9472 53.3405V29.7969L60.6151 65.2505L60.7139 0H77V75.1986Z"
              stroke="currentColor"
              strokeWidth={9}/>
        </motion.g>
        <defs>
          <filter id="filter0_d_2_23" x="0" y="0" width="81" height="83.1986" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_23"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_23" result="shape"/>
          </filter>
        </defs>
      </motion.svg>

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
        <div className="ml-1 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
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
