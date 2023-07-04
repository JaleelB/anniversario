import Link from 'next/link';
import React from 'react';


  export default function SiteFooter (){

    const d = new Date();
    const year = d.getFullYear();

    return (
        <footer className='w-screen px-4'>
            <div className='w-full h-20 py-6 mx-auto max-w-6xl text-neutral-700 font-normal'>
                <p className="flex md:justify-start text-xs leading-5 text-neutral-500">
                    &copy; {`${year}`} Built by{" "}
                    <Link
                        href="https://github.com/JaleelB"
                        className="underline hover:text-neutral-600"
                    >
                        Jaleel Bennett
                    </Link>
                    {". "}
                    All rights reserved.
                </p>
            </div>
        </footer>
    )
}

