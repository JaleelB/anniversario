"use client"
import { redirect } from "next/navigation";
import Celebrate from "~/components/celebrate";
import Countdown from "~/components/countdown";

interface CountdownInfo {
    name: string;
    birthDate: string;
}

export default function CountdownPage({ params }: { params: { slug: string[] } }) {
    
    if(!params.slug){
        redirect("/configure");
    }

    const { name, birthDate } = getCountdownInfo(params.slug);

    const dob = new Date(birthDate); 
    const now = new Date();

    const difference = dob.getTime() - now.getTime();

    function getCountdownInfo(url_slug: string[]): CountdownInfo {
        const slug = url_slug;
        if (!slug[0] || !slug[1]) {
            redirect("/configure");
        }
        const name = slug[0]
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        const birthDate = slug[1].replace(/-/g, "/");

       //check that the date is valid
        if (isNaN(new Date(birthDate).getTime())) {
            redirect("/configure");
        }

        return { name, birthDate };
    }


    return (
        <section className="flex items-center justify-center space-y-6 pb-8 pt-12 md:pb-12 md:pt-10 lg:py-32 mx-auto">
            <div className="w-full max-w-5xl flex flex-col items-center gap-6 md:gap-12 text-left px-4 sm:px-8">
                {
                    (difference > 0) ?
                    <Countdown name={name} dob={birthDate} />:
                    <Celebrate name={name}/>
                }
            </div>
        </section>
    );
}