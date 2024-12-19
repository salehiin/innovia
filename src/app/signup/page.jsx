// "use client"
// import SocialSignin from '@/components/shared/SocialSignin';
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// const SignUpPage = () => {

//     const handleSignup = async (event) => {
//         event.preventDefault();
//         const newUser = {
//             name: event.target.name.value,
//             email: event.target.email.value,
//             image: event.target.image.value,
//             password: event.target.password.value
//         };
//         const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/signup/api`, {
//             method: "POST",
//             body: JSON.stringify(newUser),
//             headers: {
//                 "content-type" : "application/json"
//             }
//         })
//         if(resp.status === 200){
//             event.target.reset()
//         }
//     };

//     return (
//         <div className='container mx-auto flex flex-col min-h-[calc(100vh-68px*2)'>

//             <div className='grid grid-cols-2 w-full items-center bg-black' >

//                 <div className='p-12'>
//                     <h6 className='text-3xl font-semibold text-center mb-12'>Sign Up!</h6>
//                     <form onSubmit={handleSignup} action="">
//                         <label htmlFor="name" >Name</label> <br />
//                         <input type="name" name="name" placeholder="Your name" className="text-black mt-3 input input-bordered w-full border-black" /> <br /> <br />
//                         <label htmlFor="email" >Email</label> <br />
//                         <input type="email" name="email" placeholder="Your email" className="text-black mt-3 input input-bordered w-full border-black" /> <br /> <br />
//                         <label htmlFor="image" >Your photo</label> <br />
//                         <input type="text" name="image" placeholder="Your image" className="text-black mt-3 input input-bordered w-full border-black" /> <br /> <br /> <br />
//                         <label htmlFor="password" >Password</label> <br />
//                         <input type="password" name="password" placeholder="Your password" className="text-black mt-3 input input-bordered w-full border-black" /> <br /> <br /> <br />
//                         <button type='submit' className='btn btn-primary btn-outline btn-block'>Sign In</button>
//                     </form>
//                     <div>
//                         <h6 className="my-8 text-center">or sign in with</h6>
//                         <SocialSignin />
//                         <h6 className="my-8 text-center">Alreaday have an account?<Link className="text-secondary font-semibold" href={'/login'}> Log in</Link> </h6>

//                     </div>
//                 </div>
//                 <div className='bg-black'>
//                     <Image src="/assets/images/signup.png" alt='login' height={640} width={640} className='w-full max-h-[calc(100vh-68px*2)]' />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignUpPage;

"use client";
import SocialSignin from '@/components/shared/SocialSignin';
import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense } from 'react';

const SignUpPage = () => {

    const handleSignup = async (event) => {
        event.preventDefault();
        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            image: event.target.image.value,
            password: event.target.password.value
        };

        try {
            const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/signup/api`, {
                method: "POST",
                body: JSON.stringify(newUser),
                headers: {
                    "content-type": "application/json"
                }
            });

            if (resp.status === 200) {
                event.target.reset();
            } else {
                console.error('Signup failed');
            }
        } catch (error) {
            console.error('Network error: ', error);
        }
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="container mx-auto flex flex-col min-h-[calc(100vh-68px*2)]">
                <div className="grid grid-cols-2 w-full items-center bg-black">
                    <div className="p-12">
                        <h6 className="text-3xl font-semibold text-center mb-12">Sign Up!</h6>
                        <form onSubmit={handleSignup}>
                            <label htmlFor="name">Name</label> <br />
                            <input type="text" name="name" placeholder="Your name" className="text-black mt-3 input input-bordered w-full border-black" /> <br /> <br />
                            <label htmlFor="email">Email</label> <br />
                            <input type="email" name="email" placeholder="Your email" className="text-black mt-3 input input-bordered w-full border-black" /> <br /> <br />
                            <label htmlFor="image">Your photo</label> <br />
                            <input type="text" name="image" placeholder="Your image" className="text-black mt-3 input input-bordered w-full border-black" /> <br /> <br />
                            <label htmlFor="password">Password</label> <br />
                            <input type="password" name="password" placeholder="Your password" className="text-black mt-3 input input-bordered w-full border-black" /> <br /> <br />
                            <button type="submit" className="btn btn-primary btn-outline btn-block">Sign Up</button>
                        </form>
                        <div>
                            <h6 className="my-8 text-center">or sign in with</h6>
                            <SocialSignin />
                            <h6 className="my-8 text-center">Already have an account? <Link className="text-secondary font-semibold" href="/login">Log in</Link></h6>
                        </div>
                    </div>
                    <div className="bg-black">
                        <Image src="/assets/images/signup.png" alt="signup" height={640} width={640} className="w-full max-h-[calc(100vh-68px*2)]" />
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default SignUpPage;

