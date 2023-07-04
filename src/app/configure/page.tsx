import Button from "~/components/ui/button";
import Input from "~/components/ui/input";

export default function ConfigPage(){

  const currentDate = new Date();
  const minDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;

  return(
      <section className="flex items-center justify-center space-y-6 pb-8 pt-12 md:pb-12 md:pt-10 lg:py-32 mx-auto">
          <div className="w-full max-w-2xl flex flex-col items-center gap-6 md:gap-12 text-left px-4 sm:px-0">
            <div className="w-full">
              <h2 className="mb-2 md:mb-6 font-heading text-3xl sm:text-5xl md:text-[65px] text-slate-900 font-bold leading-tight">  
                <span>Let&apos;s get your</span>
                <br/>
                <span>countdown ready</span>
              </h2>
              <p className="text-sm sm:text-base  max-w-[33rem] text-secondary">
                To personalize your countdown, please provide us with some 
                details. Fill in your name and select your birthdate from 
                the calendar below. 
              </p>
            </div>
            <div className="w-full flex flex-col gap-6">
              <Input
                type="text"
                label="Name"
                name="name"
                placeholder="Enter a name"
                helper="This will be displayed on the countdown"
                required
              />
              <Input
                type="date"
                label="Birthdate"
                name="birthdate"
                placeholder="Pick a date"
                helper="Your date of birth is used to calculate the number of days till your birthday"
                min={minDate}
                required
              />
            </div>
            <Button 
              size="lg"
              className="mt-6 md:mt-12 w-full sm:ml-auto sm:w-auto"
            >
              Start Countdown
            </Button>
          </div>
      </section>
  )
}