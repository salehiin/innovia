import Image from 'next/image';
import React from 'react';
import BannerImage from '../shared/BannerImage';
import BannerText from '../shared/BannerText';

const Banner = () => {
    return (
        <div className='container mx-auto bg-black'>
            <div className="hero h-[calc(100vh-68px*2)]">
                <div className="hero-content flex-col lg:flex-row-reverse text-primary">
                    <BannerImage />
                    {/* <Image alt='Banner'
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" width={600} height={6000}
      className="max-w-sm rounded-lg shadow-2xl" /> */}
                    <BannerText></BannerText>
                </div>
            </div>
        </div>
    );
};

const banners = [
    {
        title: "One Stop Solution for your business",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam possimus fugiat consequuntur quae animi numquam, perferendis porro ullam excepturi itaque repudiandae quaerat, quas ea atque!",

    }
]

export default Banner;