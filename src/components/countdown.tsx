/* eslint-disable @typescript-eslint/no-misused-promises */
"use client"
import React from "react";
import Button from "./ui/button";
import useClipboard from "~/hooks/use-copy";
import ToastContext from "~/context/toast-context";
import { usePathname } from "next/navigation";

interface Date {
    name: string;
    dob: string
}

export default function Countdown({ name, dob}: Date){

    const [time, setTime] = React.useState(0);
    const dateOfBirth = React.useMemo(() => new Date(dob), [dob]);
    const { isCopied, copyToClipboard } = useClipboard();
    const { addToast } = React.useContext(ToastContext);

    const getTimeDifference = React.useCallback((): number => {
        const now = new Date();
        let nextBirthday = new Date(now.getFullYear(), dateOfBirth.getMonth(), dateOfBirth.getDate());

        if (now > nextBirthday) {
            // if the birthday this year has already passed, get the next year's birthday
            nextBirthday = new Date(now.getFullYear() + 1, dateOfBirth.getMonth(), dateOfBirth.getDate());
        }

        const difference = nextBirthday.getTime() - now.getTime();
        return difference;
    }, [dateOfBirth]);

    React.useEffect(() => {
        const fetchedDifference = getTimeDifference();
        setTime(fetchedDifference);

        const timerId = setInterval(() => {
            setTime(time => time - 1000);
        }, 1000);

        return () => clearInterval(timerId);
    }, [getTimeDifference]);

    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const birthdayThisYear = new Date(new Date().getFullYear(), dateOfBirth.getMonth(), dateOfBirth.getDate());
    const nextBirthdayYear = (new Date() >= birthdayThisYear) ? (new Date().getFullYear() + 1) : new Date().getFullYear();

    const nextBirthdayMonth = monthNames[dateOfBirth.getMonth()] || "Unknown";
    const nextBirthdayDate = `${dateOfBirth.getDate()} ${nextBirthdayMonth} ${nextBirthdayYear}`;

    async function copyURL(){

        const formattedDob = dob.replace(/\//g, '-');
        const url = new URL(window.location.href);
        url.searchParams.set('name', name.toLowerCase());
        url.searchParams.set('dob', formattedDob);

        await copyToClipboard(url.href);

        if(isCopied){
            addToast({
                title: 'Copied to clipboard',
                message: 'The share link has been copied to your clipboard.',
                variant: 'default'
            });
        }
    }


    return (
        <div className="w-full flex flex-col">
            <h1 className="mb-8 sm:mb-12 font-heading text-primary">
                <span>Countdown until {name}&apos;s</span>
                <br/>
                <span> Birthday on {nextBirthdayDate}</span>
            </h1>
            
            <h2 className="
                    font-heading text-7xl sm:text-8xl md:text-10xl text-primary lg:text-[110px] xl:text-[150px] 
                    font-bold leading-tight grid xs:grid-cols-2 sm:grid-cols-4 mx-auto sm:gap-8 text-center w-full
                "  
            >
                <div className="p-2 sm:min-w-[250px]">
                    <p className="mr-2">{days}</p> 
                    <p className="text-lg">Days</p>
                </div>
                <div className="p-2 min-w-[250px]">
                    <p className="mr-2">{hours}</p> 
                    <p className="text-lg">Hours</p>
                </div>
                <div className="p-2 min-w-[250px]">
                    <p className="mr-2">{minutes}</p> 
                    <p className="text-lg">Minutes</p>
                </div>
                <div className="p-2 min-w-[250px]">
                    <p className="mr-2">{seconds}</p> 
                    <p className="text-lg">Seconds</p>
                </div>
            </h2>
            <Button 
                size="lg" 
                className="mx-auto md:mx-0 md:ml-auto mt-8 sm:mt-12 lg:mt-20"
                onClick={copyURL}
            >
                Share Countdown
            </Button>
        </div>
    );
}

