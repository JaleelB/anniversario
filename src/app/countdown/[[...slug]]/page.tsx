"use client"
import { redirect, useParams } from "next/navigation";

interface CountdownInfo {
    name: string;
    date: string;
}

export default function CountdownPage() {
    
    const params = useParams();
    if(!params.slug){
        redirect("/configure");
    }

    const { name, date } = getCountdownInfo(params.slug);

    const dob = new Date(date); 
    const now = new Date();

    const difference = dob.getTime() - now.getTime();

    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    function getCountdownInfo(url_slug: string): CountdownInfo {
        const slug = url_slug.split("/");
        if (!slug[0] || !slug[1]) {
            redirect("/configure");
        }
        const name = slug[0]
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        const date = slug[1].replace(/-/g, "/");

        return { name, date };
    }


    return (
        <section>
            <div>{name}{date}</div>
        </section>
    );
}