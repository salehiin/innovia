"use client"
import SocialSignin from '@/components/shared/SocialSignin';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Page = () => {

    const handleLogin = async () => {}

    return (
        <div className='container mx-auto flex flex-col min-h-[calc(100vh-68px*2)'>

            <div className='grid grid-cols-2 w-full items-center bg-black' >
                <div className='bg-black'>
                    <Image src="/assets/images/login.jpg" alt='login' height={640} width={640} className='w-full max-h-[calc(100vh-68px*2)]' />
                </div>
                <div className='border-2 p-12'>
                    <h6 className='text-3xl font-semibold text-center mb-12'>Sign In!</h6>
                    <form onSubmit={handleLogin} action="">
                        <label htmlFor="email" >Email</label> <br />
                        <input type="email" name="email" placeholder="Your email" className="mt-3 input input-bordered w-full border-black" /> <br /> <br />
                        <label htmlFor="password" >Password</label> <br />
                        <input type="password" name="password" placeholder="Your password" className="mt-3 input input-bordered w-full border-black" /> <br /> <br /> <br />
                        <button type='submit' className='btn btn-primary btn-outline btn-block'>Sign In</button>
                    </form>
                    <div>
                        <h6 className="my-8 text-center">or sign in with</h6>
                        <SocialSignin />
                        <h6 className="my-8 text-center">Dont have account?<Link className="text-secondary font-semibold" href={'/signup'}> Sign Up</Link> </h6>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;