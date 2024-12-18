// "use client"

// import SocialSignin from '@/components/shared/SocialSignin';
// import Image from 'next/image';
// import Link from 'next/link';
// import { signIn, useSession } from 'next-auth/react';
// import { redirect, useRouter, useSearchParams } from 'next/navigation';
// import React from 'react';

// const Page = () => {

//     const router = useRouter()
//     const session = useSession()
//     const searchParams = useSearchParams()
//     const path = searchParams.get('redirect');

//     const handleLogin = async (event) => {
//         event.preventDefault();
//         const email = event.target.email.value;
//         const password = event.target.password.value;
//         const resp = await signIn('credentials',{
//             email, 
//             password, 
//             redirect: true,
//             callbackUrl: path ? path : '/'
//         })
//         if(resp.status === 200){
//             router.push('/')
//         }
//     }

//     return (
//         <div className='container mx-auto flex flex-col min-h-[calc(100vh-68px*2)'>

//             <div className='grid grid-cols-2 w-full items-center bg-black' >
//                 <div className='bg-black'>
//                     <Image src="/assets/images/login.png" alt='login' height={640} width={640} className='w-full max-h-[calc(100vh-68px*2)]' />
//                 </div>
//                 <div className='p-12'>
//                     <h6 className='text-3xl font-semibold text-center mb-12'>Sign In!</h6>
//                     <form onSubmit={handleLogin} action="">
//                         <label htmlFor="email" >Email</label> <br />
//                         <input type="email" name="email" placeholder="Your email" className="text-black mt-3 input input-bordered w-full border-black" /> <br /> <br />
//                         <label htmlFor="password" >Password</label> <br />
//                         <input type="password" name="password" placeholder="Your password" className="text-black mt-3 input input-bordered w-full border-black" /> <br /> <br /> <br />
//                         <button type='submit' className='btn btn-primary btn-outline btn-block'>Sign In</button>
//                     </form>
//                     <div>
//                         <h6 className="my-8 text-center">or sign in with</h6>
//                         <SocialSignin />
//                         <h6 className="my-8 text-center">Dont have account?<Link className="text-secondary font-semibold" href={'/signup'}> Sign Up</Link> </h6>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Page;

"use client";

import SocialSignin from "@/components/shared/SocialSignin";
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

const SignInPage = () => {
  const router = useRouter();
  const session = useSession();
  const searchParams = useSearchParams();
  const path = searchParams?.get("redirect");

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const resp = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: path ? path : "/",
    });

    if (resp?.status === 200) {
      router.push(path || "/");
    }
  };

  return (
    <div className="container mx-auto flex flex-col min-h-[calc(100vh-68px*2)]">
      <div className="grid grid-cols-2 w-full items-center bg-black">
        <div className="bg-black">
          <Image
            src="/assets/images/login.png"
            alt="login"
            height={640}
            width={640}
            className="w-full max-h-[calc(100vh-68px*2)]"
          />
        </div>
        <div className="p-12">
          <h6 className="text-3xl font-semibold text-center mb-12">Sign In!</h6>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label> <br />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="text-black mt-3 input input-bordered w-full border-black"
            />{" "}
            <br /> <br />
            <label htmlFor="password">Password</label> <br />
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className="text-black mt-3 input input-bordered w-full border-black"
            />{" "}
            <br /> <br /> <br />
            <button type="submit" className="btn btn-primary btn-outline btn-block">
              Sign In
            </button>
          </form>
          <div>
            <h6 className="my-8 text-center">or sign in with</h6>
            <SocialSignin />
            <h6 className="my-8 text-center">
              Dont have an account?
              <Link className="text-secondary font-semibold" href="/signup">
                {" "}
                Sign Up
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function WrappedSignInPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInPage />
    </Suspense>
  );
}
