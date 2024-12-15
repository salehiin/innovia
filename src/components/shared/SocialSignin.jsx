import React from 'react';
import { FaFacebook, FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";

// const handleSocialLogin = () => {}

const SocialSignin = () => {
    return (
        <div className='flex items-center justify-center space-x-3'>
            <button  className='btn flex items-center justify-center text-red-500 bg-transparent border-none'>
                <FaGoogle />
            </button>
            <button className='btn flex items-center justify-center text-red-500 bg-transparent border-none'>
                <FaGithub />
            </button>
        </div>
    );
};

export default SocialSignin;