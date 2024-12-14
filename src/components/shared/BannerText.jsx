"use client"
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineArrowRightAlt } from "react-icons/md";

AOS.init();

const BannerText = () => {
    return (
        <div className='space-y-32'>

            <div data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000">
                <h1 className="text-7xl font-bold leading-[80px]">Your Partner  <br /> in Progress!</h1>

            </div>
            <div className='flex space-x-6'>
                <Image
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    alt='Banner' src='/assets/banner/2.jpg' width={200} height={350} className='rounded-md' ></Image>
                <div>
                    <p className="py-6" 
                    data-aos="fade-right"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    >
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi quasi.
                    </p>
                    <Link className="flex items-center" data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                     href="/">View Projects <MdOutlineArrowRightAlt className='text-3xl' /></Link>
                </div>
            </div>

        </div>
    );
};

export default BannerText;