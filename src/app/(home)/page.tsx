import Link from "next/link";
import Button from "~/components/ui/button";

export default function IndexPage(){
  return(
      <section className="w-full h-full flex items-center justify-center space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 mx-auto">
          <div className="flex flex-col items-center gap-6 text-center">
              <h1 className="font-heading text-5xl sm:text-6xl md:text-[66px] xl:text-[104px] text-slate-900 font-bold leading-tight">  
                <span className="text-pink">Countdown</span>
                <span className="ml-3 mmd:ml-5 text-blue">to</span>
                <br/>
                <span className="text-dark">your</span>
                <span className="ml-3 mmd:ml-5 text-orange">birthday</span>
              </h1>
              <p className="text-center text-sm sm:text-base px-4 sm:px-0 max-w-[33rem] text-secondary">
                Celebrate the most special day of the year with our countdown timer. Track the
                days, hours, minutes, and seconds until your next birthday!
              </p>
              <Link href="/configure">
                <Button size="lg">Get Started</Button>
              </Link>
          </div>
      </section>
  )
}