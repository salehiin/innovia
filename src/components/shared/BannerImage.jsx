"use client"
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
AOS.init();

const BannerImage = () => {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
        >

            <Image alt='Banner' src='/assets/banner/1.jpg' width={900} height={1000} className='rounded-lg' ></Image>

        </div>
    );
};

export default BannerImage;