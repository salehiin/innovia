import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsHandbag, BsSearch } from "react-icons/bs";

const Navbar = () => {

    const navItems = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Blog",
            path: "/blog"
        },
        {
            title: "Contacts",
            path: "/contacts"
        },
    ]

    return (
        <div>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {/* <li><Link >Item 1</Link></li> */}
                            {
                                navItems.map((item) => (
                                    <Link href={item.path} key={item.path}>{item.title}</Link>
                                ))
                            }
                        </ul>
                    </div>
                    <Link href={'/'} className="btn btn-ghost text-xl flex justify-center items-center">
                        <Image alt='logo' src="/assets/l5.png" width={50} height={40} />
                        <span>Innova</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center space-x-6">
                        {
                            navItems.map((item) => (
                                <Link className='font-semibold hover:text-red-500' href={item.path} key={item.path}>{item.title}</Link>
                            ))
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex space-x-3 items-center'>
                        <BsHandbag className='text-xl' />
                        <BsSearch className='text-xl' />
                        <a className="btn btn-outline text-white hover:text-red-500 hover:border-red-500">Appointment</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;