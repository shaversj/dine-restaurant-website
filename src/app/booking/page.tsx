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
import PeopleCounter from "@/components/PeopleCounter";

const options = ["AM", "PM"];

const schema = yup.object({
  name: yup.string().required("This field is required"),
  email: yup.string().email("Invalid email").required("This field is required"),
  month: yup.number().integer().positive().lessThan(13),
  day: yup.number().integer().positive().lessThan(32),
  year: yup.number().integer().positive().moreThan(1900).lessThan(2100),
  date: yup.string().test("is-valid-date", "This field is incomplete", function () {
    const { month, day, year } = this.parent;
    if (!month || !day || !year) return false;
    const monthNum = parseInt(month, 10);
    const dayNum = parseInt(day, 10);
    const yearNum = parseInt(year, 10);
    const date = new Date(yearNum, monthNum - 1, dayNum);
    if (isNaN(date.getTime())) return false;
    return true;
  }),
  hour: yup.number().integer().positive().lessThan(24),
  minute: yup.number().integer().positive().lessThan(60),
  time: yup.string().test("is-valid-time", "This field is incomplete", function () {
    const { hour, minute } = this.parent;
    if (!hour || !minute) return false;
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
      <main>
        <section className={"h-[600px] bg-[url('/images/booking/hero-bg-mobile.jpg')] bg-cover bg-no-repeat md:bg-[url('/images/booking/hero-bg-tablet.jpg')] lg:bg-[url('/images/booking/hero-bg-desktop.jpg')]"}>
          <div className={"px-6 pt-[56px] md:px-[40px] md:pt-[65px] lg:px-[165px]"}>
            <Image src={"/images/logo.svg"} alt="Logo" className={"mx-auto md:mx-0"} width={103} height={40} />
            <div className={"flex flex-col items-center pt-[44px] md:pt-[70px] lg:flex-row lg:items-start lg:gap-x-[125px] lg:pt-[153px]"}>
              <div className={"text-center md:w-[573px] lg:w-[445px] lg:text-left"}>
                <h1 className={"text-heading-xl text-white"}>Reservations</h1>
                <p className={"pt-[18px] text-[16px] leading-[26px] text-white md:text-[20px] md:leading-[30px]"}>
                  We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.
                </p>

                <button type={"submit"} className={"mt-[19px] h-[64px] w-[263px] border border-white md:hidden md:h-[64px] md:w-[444px]"}>
                  <span className={"font-league-spartan text-[17px] leading-[16px] font-semibold tracking-[2.5px] text-white uppercase"}>Reserve Place</span>
                </button>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className={"z-20 mt-[38px] h-[585px] w-[327px] space-y-[34px] bg-white px-8 pt-[34px] shadow-[0px_75px_100px_-50px_rgba(56,66,86,0.503223)] md:h-[545px] md:w-[540px] md:px-[48px] md:pt-[50px] lg:mt-0"}
              >
                <div className={"relative"}>
                  <Input type={"text"} placeholder={"Name"} register={register} registerName={"name"} ariaInvalid={!!errors.name} />
                  <Error ariaInvalid={!!errors.name} errorMessage={errors.name?.message} variant={"smallPadding"} />
                </div>

                <div className={"relative"}>
                  <Input type={"text"} placeholder={"Email"} register={register} registerName={"email"} ariaInvalid={!!errors.email} />
                  <Error ariaInvalid={!!errors.email} errorMessage={errors.email?.message} variant={"smallPadding"} />
                </div>

                <fieldset className={"flex flex-col gap-y-2 md:flex-row md:items-center"}>
                  <Label ariaInvalid={!!errors.date} labelName={"Pick a date"} />
                  <Error ariaInvalid={!!errors.date} errorMessage={errors.date?.message} variant={"largePadding"} />
                  <div className={"flex gap-x-4 md:pl-[65px]"}>
                    <Input type={"number"} placeholder={"Month"} register={register} registerName={"month"} ariaInvalid={!!errors.month} />
                    <Input type={"number"} placeholder={"Day"} register={register} registerName={"day"} ariaInvalid={!!errors.day} />
                    <Input type={"number"} placeholder={"Year"} register={register} registerName={"year"} ariaInvalid={!!errors.year} />
                  </div>
                </fieldset>
                <fieldset className={"flex flex-col gap-y-2 md:flex-row md:items-center"}>
                  <Label ariaInvalid={!!errors.time} labelName={"Pick a time"} />
                  <Error ariaInvalid={!!errors.time} errorMessage={errors.time?.message} variant={"largePadding"} />
                  <div className={"flex gap-x-4 md:pl-[65px]"}>
                    <Input type={"number"} placeholder={"Hour"} register={register} registerName={"hour"} ariaInvalid={!!errors.hour} />
                    <Input type={"number"} placeholder={"Minute"} register={register} registerName={"minute"} ariaInvalid={!!errors.minute} />
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

                <PeopleCounter numOfPeople={numOfPeople} setNumOfPeople={setNumOfPeople} />

                <button type={"submit"} className={"h-[64px] w-[263px] bg-black text-white hover:border hover:border-black hover:bg-white hover:text-black md:h-[64px] md:w-[444px]"}>
                  <span className={"font-league-spartan text-[17px] leading-[16px] font-semibold tracking-[2.5px] uppercase"}>MAKE RESERVATION</span>
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className={"relative h-[534px] bg-white md:h-[435px] lg:h-auto"}>
          <img src={"/images/patterns/pattern-lines.svg"} className={"absolute hidden translate-x-[655px] translate-y-[162px] lg:block"} alt="Lines" />
          <img src={"/images/patterns/pattern-curve-bottom-right.svg"} className={"invisible lg:visible"} alt="Pattern Bottom Right" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
