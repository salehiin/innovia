import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const ServiceCard = ({service}) => {
    const{id, img, title, description, price} = service || {};
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl mx-auto rounded-sm">
            <figure className="w-full h-[200px]">
                {/* <Image src={img} alt={title} width={300} height={300}/> */}
                <Image className="w-full h-auto object-cover" src={img} alt={title} width={300} height={200} sizes="100vw" />
            </figure>
            <div className="card-body bg-black">
                <h2 className="card-title">{title}!</h2>
                {/* <p>{description}</p> */}
                <div className="card-actions justify-between items-center">
                    <h6 className='font-semibold'>Price: ${price}</h6>
                    <Link href="/" className="btn btn-primary btn-outline rounded-sm">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;