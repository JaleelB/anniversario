/* eslint-disable @typescript-eslint/no-misused-promises */
"use client"
import { type SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import DatePickerInput from "~/components/date";
import Button from "~/components/ui/button";
import Input from "~/components/ui/input";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import ToastContext from "~/context/toast-context";

const schema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  birthdate: z.date({
    required_error: "Birthdate is required",
    invalid_type_error: "That's not a date!",
  }).nullable(),
})

type FormData = z.infer<typeof schema>;

export default function ConfigPage() {

  const currentDate = new Date();
  const minDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );

  const router = useRouter();
  const { addToast } = React.useContext(ToastContext);

  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const { name, birthdate } = data;
    const formattedDate = (birthdate ? format(birthdate, "MM-dd-yyyy") : "");
    
    if (name && formattedDate) {
      
      const formattedName = name.toLowerCase().replace(/\s+/g, "-");
      router.push(`/countdown/${formattedName}/${formattedDate}`);

    }else{

      return addToast({
        title: "Error",
        variant: "destructive",
        message: "Please fill in all fields",
      })
      
    }
  };

  return (
    <FormProvider {...methods}>
      <section className="flex items-center justify-center space-y-6 pb-8 pt-12 md:pb-12 md:pt-10 lg:py-32 mx-auto">
        <div className="w-full max-w-2xl flex flex-col items-center gap-6 md:gap-12 text-left px-4 sm:px-0">
          <div className="w-full">
            <h2 className="mb-2 md:mb-6 font-heading text-3xl sm:text-5xl md:text-[65px] text-slate-900 font-bold leading-tight">
              <span>Let&apos;s get your</span>
              <br />
              <span>countdown ready</span>
            </h2>
            <p className="text-sm sm:text-base  max-w-[33rem] text-secondary">
              To personalize your countdown, please provide us with some details. Fill in your name and select your
              birthdate from the calendar below.
            </p>
          </div>
          <form className="w-full flex flex-col gap-6" onSubmit={methods.handleSubmit(onSubmit)}>
            <Input
              {...methods.register("name")}
              type="text"
              label="Name"
              placeholder="Enter a name"
              helper={!methods.formState.errors.name ? "This will be displayed on the countdown" : methods.formState.errors.name.message}
              error={methods.formState.errors.name ? true : false}
            />
            <DatePickerInput
              label="Birthdate"
              name="birthdate"
              helper="Your date of birth is used to calculate the number of days till your birthday"
              minDate={minDate}
              error={methods.formState.errors.birthdate ? methods.formState.errors.birthdate.message as string : ""}
            />
            <Button
              size="lg"
              type="submit"
              className="mt-6 md:mt-12 w-full sm:ml-auto sm:w-auto"
            >
              Start Countdown
            </Button>
          </form>
        </div>
      </section>
    </FormProvider>
  );
}
