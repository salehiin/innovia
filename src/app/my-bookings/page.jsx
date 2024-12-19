"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Page = () => {
    const session = useSession()
    const [bookings, setBooking] = useState([]);
    // const loadData = async () => {
    //     const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/my-bookings/api/${session?.data?.user?.email}`);
    //     const data = await resp.json();
    //     setBooking(data?.myBookings);
    // };

    // Memoize the loadData function using useCallback
  const loadData = useCallback(async () => {
    if (!session?.data?.user?.email) {
      console.warn('User email is not available.');
      return;
    }

    try {
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/my-bookings/api/${session.data.user.email}`
      );
      const data = await resp.json();
      setBooking(data?.myBookings || []);
    } catch (error) {
      console.error('Failed to load bookings:', error);
    }
  }, [session?.data?.user?.email]); 

    const handleDelete = async (id) => {
        const deleted = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/my-bookings/api/booking/${id}`, {
            method: "DELETE",
        });
        const resp = await deleted.json();
        console.log(resp);
        if (resp?.response?.deletedCount > 0) {
            loadData();
        }
        if (resp.status === "authenticated") {
            toast.success("Delete successfull")
        }
    };

    useEffect(() => {
        loadData()
    }, [loadData]);

    return (
        <div className='container h-[calc(100vh-97px*2)] mt-10 relative'>
            <div className="relative  w-[90%] mx-auto  h-80 overflow-hidden">
                <Image
                    className="absolute top-0 left-0  w-full h-full object-cover"
                    src={'/assets/banner/bookings1.jpg'}
                    alt="bookings"
                    width={1920}
                    height={1080}
                    style={{ width: "90vw", objectPosition: "center 38%" }}
                />
                <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                    <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
                        My Bookings
                    </h1>
                </div>
            </div>
            <div className='mt-12 w-[90%] mx-auto'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Service Name</th>
                                <th>Price</th>
                                <th>Booking Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                bookings?.map(({ serviceTitle, _id, date, price }) => (
                                    <tr key={_id}>
                                        <th>{1}</th>
                                        <td>{serviceTitle}</td>
                                        <td>{price}</td>
                                        <td>{
                                            date}</td>
                                        <td className='space-x-2'>
                                            <Link href={`/my-bookings/update/${_id}`} className='btn-primary'>Edit</Link>
                                            <button onClick={() => handleDelete(_id)} className='text-red-500'> Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                            {/* row 1 end */}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Page;