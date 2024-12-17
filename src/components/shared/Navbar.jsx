"use client"
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsHandbag, BsSearch } from "react-icons/bs";

const Navbar = () => {

    const session = useSession();
    console.log(session)


    return (
        <div>
            <div className="navbar container mx-auto bg-[#000]">
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
                                <Link className='font-semibold hover:text-secondary' href={item.path} key={item.path}>{item.title}</Link>
                            ))
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex space-x-3 items-center'>
                        <BsHandbag className='text-xl' />
                        <BsSearch className='text-xl' />


                        {session?.status === 'loading' &&
                            <h6>Loading...</h6>
                        }

                        {
                            session?.status === 'unauthenticated' &&
                            <Link href="/login" className="btn btn-outline btn-primary rounded-md">Login</Link>
                        }
                        {
                            session?.status === 'authenticated' &&
                            <div className='flex'>
                                <button onClick={() => signOut()} className="btn btn-outline btn-primary rounded-md">Log Out</button>
                                <Image className='rounded-full ml-2' width={40} height={20} alt={session?.data?.user?.name} src={session?.data?.user?.image} />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

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
        title: "My Bookings",
        path: "/my-bookings"
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

export default Navbar;