"use client"
import { redirect, useSearchParams } from "next/navigation";
import Celebrate from "~/components/celebrate";
import Countdown from "~/components/countdown";

interface CountdownInfo {
    formattedName: string;
    formattedDob: string;
}

export default function CountdownPage() {

    const urlParams = useSearchParams();
    const name = urlParams.get('name');
    const birthDate = urlParams.get('dob');

    if(!name || !birthDate){
        redirect("/configure");
    }

    const { formattedName, formattedDob } = getCountdownInfo(name, birthDate);

    const dob = new Date(formattedDob); 
    const now = new Date();

    const difference = dob.getTime() - now.getTime();

    //redirect if the date is in the past
    if(difference < 0){
        redirect("/configure");
    }

    function getCountdownInfo(name: string, dob:string): CountdownInfo {

        const formattedName = name
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        const formattedDob = dob.replace(/-/g, "/");

       //check that the date is valid
        if (isNaN(new Date(formattedDob).getTime())) {
            redirect("/configure");
        }

        return { formattedName, formattedDob };
    }


    return (
        <section className="flex items-center justify-center space-y-6 pb-8 pt-12 md:pb-12 md:pt-10 lg:py-32 mx-auto">
            <div className="w-full max-w-5xl flex flex-col items-center gap-6 md:gap-12 text-left px-4 sm:px-8">
                {
                    (difference > 0) ?
                    <Countdown name={formattedName} dob={formattedDob} />:
                    <Celebrate name={formattedName}/>
                }
            </div>
        </section>
    );
}