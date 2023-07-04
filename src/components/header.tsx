import Link from "next/link";
import Image from 'next/image'

export default function Header(){
    return(
        <header className="w-screen z-40  px-4">
            <div className="container max-w-6xl flex h-20 items-center justify-between py-6 mx-auto">
                <nav className="w-full flex justify-between">
                    <Link href="/">
                        <Image 
                            width={150}
                            height={30}
                            src="/logo.svg"
                            alt="logo"
                        />
                    </Link>
                    <Link href="/">
                        <Image 
                            width={30}
                            height={30}
                            src="/github.svg"
                            alt="logo"
                        />
                    </Link>
                </nav>
            </div>
        </header>
    )
}