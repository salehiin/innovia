import React from 'react';
import {services} from '../../lib/services'
import ServiceCard from '../cards/ServiceCard';

const Services = () => {
    return (
        <div className='min-h-screen bg-black'>
            <div className='container text-center mx-auto text-primary'>
                <h3 className='text-2xl'>Our Services</h3>
                <h2 className='text-5xl'>Our Services Area</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat at suscipit iure quisquam vitae laborum, nesciunt, tenetur officiis eligendi doloribus, sunt voluptatem id pariatur velit quasi alias in delectus eos eaque aut est animi. Impedit sunt possimus magnam illo saepe corporis. Perferendis unde praesentium repellat quasi cum enim cupiditate.</p>
            </div>
            <div className='container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    services.slice(0, 6)
                    .map((service) => (
                        <ServiceCard service={service} key={service.id}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;