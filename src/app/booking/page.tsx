"use client";

import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/Footer";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Error from "@/components/Error";

const options = ["AM", "PM"];

const schema = yup.object({
  name: yup.string().required("This field is required"),
  email: yup.string().email("Invalid email").required("This field is required"),
  // month two digits
  month: yup
    .string()
    .matches(/^(0[1-9]|1[0-2])$/, "Month must be two digits")
    .required("Month is required"),
  // day two digits
  day: yup
    .string()
    .matches(/^(0[1-9]|[12][0-9]|3[01])$/, "Day must be two digits")
    .required("Day is required"),
  // year four digits
  year: yup
    .string()
    .matches(/^\d{4}$/, "Year must be four digits")
    .required("Year is required"),
  // if month, day, year invalid, show error; use the schema.month day year
  date: yup.string().test("is-valid-date", "This field is incomplete", function () {
    const { month, day, year } = this.parent;
    if (!month || !day || !year) return false;
    // Optional: you can further validate if it's an actually valid date here
    return true;
  }),
  // hour two digits
  hour: yup.number().integer().positive().lessThan(24),
  // minute two digits
  minute: yup.number().integer().positive().lessThan(60),
  time: yup.string().test("is-valid-time", "This field is incomplete", function () {
    const { hour, minute } = this.parent;
    if (!hour || !minute) return false;
    // Optional: you can further validate if it's an actually valid time here
    return true;
  }),
});

export default function BookingPage() {
  const [numOfPeople, setNumOfPeople] = useState(4);
  const [selected, setSelected] = useState(options[0]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className={"font-league-spartan"}>
      <header className={"h-[600px] bg-[url('/images/booking/hero-bg-desktop.jpg')] bg-cover bg-no-repeat"}>
        <div className={"px-[165px] pt-[65px]"}>
          <Image src={"/images/logo.svg"} alt="Logo" width={103} height={40} />
          <div className={"flex gap-x-[125px] pt-[153px]"}>
            <div className={"w-[445px]"}>
              <h1 className={"text-heading-xl text-white"}>Reservations</h1>
              <p className={"text-body-primary pt-[18px] text-white"}>We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className={"z-20 h-[545px] w-[540px] space-y-[34px] bg-white px-[48px] pt-[50px] shadow-[0px_75px_100px_-50px_rgba(56,66,86,0.503223)]"}>
              <div className={"relative"}>
                <input
                  {...register("name")}
                  aria-invalid={errors.name ? "true" : "false"}
                  type="text"
                  placeholder="Name"
                  className={
                    "w-full border-b border-[#8E8E8E] pb-[15px] pl-4 text-[20px] leading-7 text-[#111111] placeholder:text-[#111111]/50 focus:border-[#111111] focus:outline-none aria-[invalid=true]:border-[#B54949] aria-[invalid=true]:placeholder:text-[#B54949]/50"
                  }
                />
                {errors.name && (
                  <p aria-invalid={errors.name ? "true" : "false"} className={"absolute pt-2.5 pl-4 text-[10px] font-medium tracking-[-0.13px] text-[#B54949]"}>
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className={"relative"}>
                <input
                  {...register("email")}
                  aria-invalid={errors.email ? "true" : "false"}
                  type="text"
                  placeholder="Email"
                  className={
                    "w-full border-b border-[#8E8E8E] pb-[15px] pl-4 text-[20px] leading-7 text-[#111111] placeholder:text-[#111111]/50 focus:border-[#111111] focus:outline-none aria-[invalid=true]:border-[#B54949] aria-[invalid=true]:placeholder:text-[#B54949]/50"
                  }
                />
                {errors.email && (
                  <p aria-invalid={errors.email ? "true" : "false"} className={"absolute pt-2.5 pl-4 text-[10px] font-medium tracking-[-0.13px] text-[#B54949]"}>
                    {errors.email.message}
                  </p>
                )}
              </div>

              <fieldset className={"flex items-center"}>
                <label aria-invalid={!!errors.date} className={"shrink-0 text-[20px] leading-[28px] text-black aria-[invalid=true]:text-[#B54949] aria-[invalid=true]:placeholder:text-[#B54949]/50"}>
                  Pick a date
                </label>
                <Error ariaInvalid={!!errors.date} errorMessage={errors.date?.message} variant={"date"} />
                <div className={"flex gap-x-4 pl-[65px]"}>
                  <Input type={"text"} placeholder={"Month"} register={register} registerName={"month"} ariaInvalid={!!errors.month} />
                  <Input type={"number"} placeholder={"Day"} register={register} registerName={"day"} ariaInvalid={!!errors.day} />
                  <Input type={"number"} placeholder={"Year"} register={register} registerName={"year"} ariaInvalid={!!errors.year} />
                  {/*<input type="text" placeholder={"Month"} className={"w-full border-b border-[#8E8E8E] pb-[15px] pl-4 text-[20px] leading-7 text-[#111111] placeholder:text-[#111111]/50 focus:outline-none"} />*/}
                  {/*<input type="text" placeholder={"Day"} className={"w-full border-b border-[#8E8E8E] pb-[15px] pl-4 text-[20px] leading-7 text-[#111111] placeholder:text-[#111111]/50 focus:outline-none"} />*/}
                  {/*<input type="text" placeholder={"Year"} className={"w-full border-b border-[#8E8E8E] pb-[15px] pl-4 text-[20px] leading-7 text-[#111111] placeholder:text-[#111111]/50 focus:outline-none"} />*/}
                </div>
              </fieldset>
              <fieldset className={"flex items-center"}>
                {/*<label className={"shrink-0 text-[20px] leading-[28px] text-black"}>Pick a time</label>*/}
                <Label ariaInvalid={!!errors.time} labelName={"Pick a time"} />
                <Error ariaInvalid={!!errors.time} errorMessage={errors.time?.message} variant={"date"} />
                <div className={"flex gap-x-4 pl-[65px]"}>
                  <Input type={"number"} placeholder={"Hour"} register={register} registerName={"hour"} ariaInvalid={!!errors.hour} />
                  <Input type={"number"} placeholder={"Minute"} register={register} registerName={"minute"} ariaInvalid={!!errors.minute} />

                  {/*<input type="text" placeholder={"Hour"} className={"w-full border-b border-[#8E8E8E] pb-[15px] pl-4 text-[20px] leading-7 text-[#111111] placeholder:text-[#111111]/50 focus:outline-none"} />*/}
                  {/*<input type="text" placeholder={"Minute"} className={"w-full border-b border-[#8E8E8E] pb-[15px] pl-4 text-[20px] leading-7 text-[#111111] placeholder:text-[#111111]/50 focus:outline-none"} />*/}

                  <div className={"w-full border-b border-[#8E8E8E] pb-[15px] pl-4"}>
                    <Listbox value={selected} onChange={setSelected}>
                      <ListboxButton className={"group flex items-center gap-x-[15px] text-[20px] leading-7 text-[#111111] outline-none"}>
                        {selected}
                        <img src={"/images/icons/icon-arrow.svg"} alt={"Arrow Down"} className={"group-data-[open]:rotate-180 group-data-[open]:pt-2"} />
                      </ListboxButton>
                      <ListboxOptions anchor={"bottom"} className={"z-30 h-[103px] w-[106px] space-y-4 bg-white pt-[18px] pr-[30px] pl-[16px] shadow-[0px_15px_25px_rgba(56,66,85,0.24623)] outline-none"}>
                        {options.map((option) => (
                          <ListboxOption key={option} value={option} className={"group flex items-center gap-x-[15.57px] text-[20px] leading-7 text-[#111111]"}>
                            <img src={"/images/icons/icon-check.svg"} className={"invisible group-data-[selected]:visible"} alt={"Icon Check"} />
                            {option}
                          </ListboxOption>
                        ))}
                      </ListboxOptions>
                    </Listbox>
                  </div>
                </div>
              </fieldset>

              <div className={"z-10 flex w-full items-center justify-between border-b border-[#8E8E8E] px-[32.63px] pb-[15px]"}>
                <img src={"/images/icons/icon-minus.svg"} alt={"Minus Icon"} onClick={() => setNumOfPeople(numOfPeople - 1)} />
                <div>
                  <label className={"shrink-0 text-[20px] leading-[28px] font-bold text-black"}>{numOfPeople} people</label>
                </div>
                <img src={"/images/icons/icon-plus.svg"} alt={"Plus Icon"} onClick={() => setNumOfPeople(numOfPeople + 1)} />
              </div>

              <button type={"submit"} className={"h-[64px] w-[444px] bg-black"}>
                <span className={"font-league-spartan text-[17px] leading-[16px] font-semibold tracking-[2.5px] text-white uppercase"}>MAKE RESERVATION</span>
              </button>
            </form>
          </div>
        </div>
      </header>

      <section className={"relative bg-white"}>
        <img src={"/images/patterns/pattern-lines.svg"} className={"absolute translate-x-[655px] translate-y-[162px]"} alt="Lines" />
        <img src={"/images/patterns/pattern-curve-bottom-right.svg"} alt="Pattern Bottom Right" />
      </section>

      <Footer />
    </div>
  );
}
