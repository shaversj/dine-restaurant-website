import Link from "next/link";
import { useState } from "react";
import { eventImages } from "@/data/data";

export default function EventSection() {
  const [eventName, setEventName] = useState("Family Gathering");

  return (
    <section className={"bg-white pt-20 md:pt-0"}>
      <img src={"/images/patterns/pattern-curve-top-right.svg"} className={"absolute z-10 hidden translate-x-[-350px] md:block"} alt="Pattern" />
      <img src={"/images/patterns/pattern-lines.svg"} alt={"Lines"} className={"absolute z-30 hidden md:block md:translate-x-[37px] md:translate-y-[82px] lg:translate-x-[125px] lg:translate-y-[122px]"} />
      <div className={"flex flex-col px-6 pb-[124px] md:px-[40px] md:pt-[120px] md:pb-[120px] lg:flex-row lg:items-center lg:gap-x-[125px] lg:px-[165px] lg:pt-[160px] lg:pb-[160px]"}>
        <picture>
          <source media="(max-width: 767px)" srcSet={eventImages[eventName as keyof typeof eventImages]["mobile"]} />
          <source media="(max-width: 1023px)" srcSet={eventImages[eventName as keyof typeof eventImages]["tablet"]} />
          <img src={eventImages[eventName as keyof typeof eventImages]["desktop"]} className={"z-20 shadow-[0px_75px_100px_-50px_rgba(56,66,86,0.503223)] md:mx-auto lg:mx-0"} alt="Family Gathering" />
        </picture>

        <div className={"flex flex-col-reverse items-center lg:w-[445px] lg:flex-col lg:items-start"}>
          <div className={"grid place-items-center pt-[27px] md:w-[457px] md:pt-[47px] lg:w-auto lg:place-items-start lg:pt-0"}>
            <h2 className={"text-heading-lg text-center text-[#242B37] lg:text-left"}>Family Gathering</h2>
            <p className={"text-body-primary pt-[19px] text-center text-[#242B37] lg:text-left"}>
              {" "}
              We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.
            </p>
            <Link href={"/booking"} className={"mt-[27px] grid h-[64px] w-[245px] place-items-center bg-black hover:border hover:border-black hover:bg-white hover:text-black lg:mt-[60px]"}>
              <span className={"text-[17px] leading-[16px] font-semibold tracking-[2.5px] uppercase"}>Book a table</span>
            </Link>
          </div>

          <div className={"pt-[49px] md:w-full md:pt-[52px] lg:-ml-[125px] lg:flex lg:w-auto lg:pt-[79px]"}>
            <ul className={"flex list-none flex-col gap-y-4 md:flex-row md:justify-between md:gap-x-2.5 lg:flex-col lg:justify-start lg:gap-x-0"}>
              {Object.keys(eventImages).map((event) => (
                <li key={event} onClick={() => setEventName(event)} className={"text-heading-sm group flex cursor-pointer flex-col-reverse items-center uppercase lg:flex-row lg:gap-x-8"}>
                  <div className={`invisible h-[1px] w-[48px] bg-[#9E7F66] lg:w-[95px] ${eventName == event ? "visible" : ""}`} />
                  <span className={`group-hover:ml-0 hover:opacity-100 ${eventName == event ? "text-[#242B37]" : "text-[#4C4C4C] opacity-50"}`}>{event}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
