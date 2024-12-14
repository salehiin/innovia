import React from 'react';
import Banner from './Banner';
import Clients from './Clients';
import Services from './Services';

const Homepage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Banner/>
            <Clients/>
            <Services/>
        </div>
    );
};

export default Homepage;