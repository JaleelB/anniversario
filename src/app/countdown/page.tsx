import Link from "next/link";
import Button from "~/components/ui/button";

export default function CountdownRedirectPage() {

    return (
        <section className="text-center space-y-6 pb-8 pt-12 md:pb-12 md:pt-10 lg:py-32 mx-auto px-4 sm:px-0">
            <h1 className="font-heading uppercase text-7xl sm:text-8xl md:text-10xl text-primary lg:text-[110px] xl:text-[150px] font-bold leading-tight">
                uh-oh
            </h1>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl md:max-w-xl lg:max-w-3xl">
                It appears that you have not yet started a countdown.
            </h2>
            <Link href="/configure">
                <Button
                    size="lg"
                    type="submit"
                    className="mt-6 md:mt-12 w-full sm:ml-auto sm:w-auto"
                >
                    Start Countdown
                </Button>
            </Link>
        </section>
    );
}