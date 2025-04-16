"use client";
import Image from "next/image";
import { useState } from "react";

export default function BookingPage() {
  const [numOfPeople, setNumOfPeople] = useState(4);
  return (
    <div className={"font-league-spartan"}>
      <header className={"h-[892px] bg-[url('/images/booking/hero-bg-desktop.jpg')] bg-cover bg-no-repeat"}>
        <div className={"px-[165px] pt-[65px]"}>
          <Image src={"/images/logo.svg"} alt="Logo" width={103} height={40} />
          <div className={"w-[445px]"}>
            <h1 className={"text-heading-xl text-white"}>Reservations</h1>
            <p className={"text-body-primary pt-[18px] text-white"}>We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</p>
          </div>
          <form className={"h-[545px] w-[540px] space-y-[34px] bg-white px-[48px] pt-[50px]"}>
            <input type="text" placeholder="Name" className={"w-full border-b border-[#8E8E8E] pb-[15px] pl-4 text-[20px] leading-7 text-[#111111] placeholder:text-[#111111]/50 focus:outline-none"} />
            <input type="text" placeholder="Email" className={"w-full border-b border-[#8E8E8E] pb-[15px] pl-4 text-[20px] leading-7 text-[#111111] placeholder:text-[#111111]/50 focus:outline-none"} />
            <fieldset className={"flex items-center"}>
              <label className={"shrink-0 text-[20px] leading-[28px] text-black"}>Pick a date</label>
              <div className={"flex gap-x-4 pl-[65px]"}>
                <input type="text" placeholder={"MM"} className={"w-full border-b border-[#8E8E8E] pb-[15px] pl-4 text-[20px] leading-7 text-[#111111] placeholder:text-[#111111]/50 focus:outline-none"} />
                <input type="text" placeholder={"DD"} className={"w-full border-b border-[#8E8E8E] pb-[15px] pl-4 text-[20px] leading-7 text-[#111111] placeholder:text-[#111111]/50 focus:outline-none"} />
                <input type="text" placeholder={"YYYY"} className={"w-full border-b border-[#8E8E8E] pb-[15px] pl-4 text-[20px] leading-7 text-[#111111] placeholder:text-[#111111]/50 focus:outline-none"} />
              </div>
            </fieldset>
            <fieldset className={"flex items-center"}>
              <label className={"shrink-0 text-[20px] leading-[28px] text-black"}>Pick a time</label>
              <div className={"flex gap-x-4 pl-[65px]"}>
                <input type="text" placeholder={"HH"} className={"w-full border-b border-[#8E8E8E] pb-[15px] pl-4 text-[20px] leading-7 text-[#111111] placeholder:text-[#111111]/50 focus:outline-none"} />
                <input type="text" placeholder={"MM"} className={"w-full border-b border-[#8E8E8E] pb-[15px] pl-4 text-[20px] leading-7 text-[#111111] placeholder:text-[#111111]/50 focus:outline-none"} />
                <input type="text" placeholder={"AM/PM"} className={"w-full border-b border-[#8E8E8E] pb-[15px] pl-4 text-[20px] leading-7 text-[#111111] placeholder:text-[#111111]/50 focus:outline-none"} />
              </div>
            </fieldset>

            <div className={"flex w-full items-center justify-between border-b border-[#8E8E8E] px-[32.63px] pb-[15px]"}>
              <img src={"/images/icons/icon-minus.svg"} alt={"Minus Icon"} onClick={() => setNumOfPeople(numOfPeople - 1)} />
              <div>
                <label className={"shrink-0 text-[20px] leading-[28px] font-bold text-black"}>{numOfPeople} people</label>
              </div>
              <img src={"/images/icons/icon-plus.svg"} alt={"Plus Icon"} onClick={() => setNumOfPeople(numOfPeople + 1)} />
            </div>

            <button className={"h-[64px] w-[444px] bg-black"}>
              <span className={"font-league-spartan text-[17px] leading-[16px] font-semibold tracking-[2.5px] text-white uppercase"}>MAKE RESERVATION</span>
            </button>
          </form>
        </div>
      </header>
      <h1>Booking Page</h1>
      <p>This is the booking page content.</p>
    </div>
  );
}
