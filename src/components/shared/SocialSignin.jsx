"use client"
import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
// import { useRouter } from 'next/router';
// import { useRouter } from 'next/router';
import React from 'react';
import { FaFacebook, FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";


const SocialSignin = () => {

    const router = useRouter()
    const searchParams = useSearchParams()

    const path = searchParams.get('redirect')
    const session = useSession()
    const handleSocialLogin =  (provider) => {
        const resp =  signIn(provider, {
            redirect: true,
            callbackUrl : path ? path : '/'
        });
        
    }
    if(session.status === 'authenticated'){
        router.push('/')
    }
    

    return (
        <div className='flex items-center justify-center space-x-3'>
            <button onClick={() =>handleSocialLogin('google')}  className='btn flex items-center justify-center text-red-500 bg-transparent border-none'>
                <FaGoogle />
            </button>
            <button  className='btn flex items-center justify-center text-red-500 bg-transparent border-none'>
            {/* onClick={handleSocialLogin('github')} */}
                <FaGithub />
            </button>
        </div>
    );
};

export default SocialSignin;