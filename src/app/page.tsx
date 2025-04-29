"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [eventName, setEventName] = useState("Family Gathering");

  const eventImages = {
    "Family Gathering": {
      mobile: "/images/homepage/family-gathering-mobile.jpg",
      tablet: "/images/homepage/family-gathering-tablet.jpg",
      desktop: "/images/homepage/family-gathering-desktop.jpg",
    },
    "Special Events": {
      mobile: "/images/homepage/special-events-mobile.jpg",
      tablet: "/images/homepage/special-events-tablet.jpg",
      desktop: "/images/homepage/special-events-desktop.jpg",
    },
    "Social Events": {
      mobile: "/images/homepage/social-events-mobile.jpg",
      tablet: "/images/homepage/social-events-tablet.jpg",
      desktop: "/images/homepage/social-events-desktop.jpg",
    },
  };

  return (
    <div className={"font-league-spartan relative"}>
      <header
        className={"w-full bg-[url('/images/homepage/hero-bg-mobile.jpg')] bg-cover bg-no-repeat pb-[152px] md:bg-[url('/images/homepage/hero-bg-tablet.jpg')] md:pb-[216px] lg:h-[55.75rem] lg:bg-[url('/images/homepage/hero-bg-desktop.jpg')] lg:pb-0"}
      >
        <div className={"px-6 md:px-10 lg:pl-[10.313rem]"}>
          <div className={"grid place-items-center pt-[14.5rem] md:pt-[23.375rem] lg:absolute lg:w-[32.188rem] lg:place-items-start lg:pt-[4.063rem]"}>
            <Image src={"/images/logo.svg"} alt="Logo" width={103} height={40} />

            <div
              className={
                "pt-9 text-center text-[2rem] leading-[2.5rem] font-light tracking-[0.025rem] md:pt-[2.375rem] md:text-[3rem] md:leading-16 md:tracking-[--0.038rem] lg:w-full lg:pt-[9.563rem] lg:text-left lg:text-[5rem] lg:leading-[5rem] lg:tracking-[-0.063rem]"
              }
            >
              <span>Exquisite dining</span>
              <span className={"block"}> since 1989</span>
            </div>
            <p className={"pt-[1.313rem] text-center text-[1rem] leading-[1.625rem] text-white md:px-[3.625rem] md:pt-[1.25rem] md:text-[1.25rem] md:leading-[1.875rem] lg:px-0 lg:pt-[1.125rem] lg:text-left"}>
              Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.
            </p>

            <button className={"mt-[3.313rem] h-[4rem] w-[15.313rem] border border-white lg:mt-[2.5rem]"}>
              <span className={"font-league-spartan text-[1.063rem] leading-[1rem] font-semibold tracking-[0.156rem] uppercase"}>Book a table</span>
            </button>
          </div>
        </div>
      </header>

      <section className={"flex bg-white px-6 md:flex-col md:items-center md:px-[98px] lg:items-start lg:px-[165px]"}>
        <div className={"relative bottom-[72px] md:bottom-[96px] lg:bottom-0 lg:flex lg:gap-x-[125px]"}>
          <picture>
            <source media="(max-width: 767px)" srcSet={"/images/homepage/enjoyable-place-mobile.jpg"} />
            <source media="(max-width: 1023px)" srcSet={"/images/homepage/enjoyable-place-tablet.jpg"} />
            <source media="(max-width: 1800px)" srcSet={"/images/homepage/enjoyable-place-desktop.jpg"} />
            <img src={"/images/homepage/enjoyable-place-mobile.jpg"} className={"lg:relative lg:bottom-[70px] lg:h-[720px] lg:w-[540px]"} alt="Enjoyable place" />
          </picture>
          <div className={"pt-12 md:pt-14 lg:w-[445px] lg:pt-[232px]"}>
            <img src={"/images/patterns/pattern-divide.svg"} className={"mx-auto lg:mx-0"} alt="Pattern Divide" />
            <h2 className={"pt-[39px] text-center text-[48px] leading-[48px] font-bold tracking-[-0.5px] text-[#242B37] lg:text-left"}>
              Enjoyable place<span className={"block"}>for all the family</span>{" "}
            </h2>
            <p className={"pt-[27px] text-center text-[20px] leading-[30px] font-normal text-[#242B37] lg:text-left"}>
              Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.
            </p>
          </div>
        </div>
        <img src={"/images/patterns/pattern-curve-top-right.svg"} className={"absolute hidden h-[320px] -translate-x-1/2 translate-y-[100px] md:block lg:left-0 lg:-translate-x-0 lg:translate-y-[250px]"} alt="Pattern" />
      </section>

      <section className={"relative overflow-x-hidden bg-white px-6 md:px-[98px] lg:overflow-visible lg:px-[165px]"}>
        <img src={"/images/patterns/pattern-curve-top-left.svg"} className={"absolute right-0 bottom-0 hidden translate-x-1/2 md:block lg:translate-x-0"} alt="Pattern" />
        <div className={"flex flex-col-reverse items-center pb-[118px] lg:flex-row lg:gap-x-[125px] lg:pb-0"}>
          <div className={"pt-[48px] md:w-[457px] lg:w-[445px]"}>
            <img src={"/images/patterns/pattern-divide.svg"} className={"mx-auto lg:mx-0"} alt="Pattern Divide" />
            <h2 className={"pt-[36px] text-center text-[48px] leading-[48px] font-bold tracking-[-0.5px] text-[#242B37] md:pt-[39px] lg:pt-[55px] lg:text-left"}>
              The most locally <span className={"block"}>sourced food</span>
            </h2>
            <p className={"pt-[13px] text-center text-[20px] leading-[30px] font-normal text-[#242B37] md:pt-[27px] lg:text-left"}>
              All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.
            </p>
          </div>
          <img src={"/images/patterns/pattern-lines.svg"} className={"absolute right-0 z-30 hidden -translate-x-[40px] -translate-y-[350px] md:block lg:-translate-x-[51px] lg:translate-y-[38px]"} alt="Pattern" />
          <picture>
            <source media="(max-width: 767px)" srcSet={"/images/homepage/locally-sourced-mobile.jpg"} />
            <source media="(max-width: 1023px)" srcSet={"/images/homepage/locally-sourced-tablet.jpg"} />
            <source media="(max-width: 1800px)" srcSet={"/images/homepage/locally-sourced-desktop.jpg"} />
            <img src={"/images/homepage/locally-sourced-mobile.jpg"} className={"relative lg:top-[70px]"} alt="Locally Sourced" />
          </picture>
        </div>
      </section>

      <section className={"px-6 pt-[72px] pb-[102px] md:px-[98px] md:pt-24 md:pb-24 lg:px-[125px] lg:pt-[200px] lg:pb-[120px]"}>
        <svg className={"mx-auto lg:inline-flex"} width="71" height="7" viewBox="0 0 71 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="3" width="56" height="1" fill="#9E7F66" />
          <circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66" />
        </svg>

        <div className={"flex flex-col items-start pt-[38px] md:pt-[39px] lg:flex-row lg:gap-x-[165px] lg:pt-[55px]"}>
          <div className={"md:px-16 lg:w-[445px] lg:px-0"}>
            <h2 className={"text-heading-lg text-center text-white lg:text-left"}>A few highlights from our menu</h2>
            <p className={"text-body-primary pt-[27px] text-center text-white lg:text-left"}>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
          </div>

          <div className={"pt-[85px] md:pt-[54px] lg:pt-0"}>
            <div className={"flex flex-col md:flex-row md:items-center md:gap-x-[62px]"}>
              <div className={"flex"}>
                <picture>
                  <source media="(max-width: 767px)" srcSet={"/images/homepage/salmon-mobile.jpg"} />
                  <source media="(max-width: 1023px)" srcSet={"/images/homepage/salmon-desktop-tablet.jpg"} />
                  <img src={"/images/homepage/salmon-desktop-tablet.jpg"} alt="Salmon" />
                </picture>
                <div className={"mt-4 hidden h-[1px] w-8 bg-[#9E7F66] md:block"} />
              </div>

              <div className={"mt-2 pt-[36px] md:pt-0 lg:w-[350px]"}>
                <h3 className={"text-heading-md text-center md:text-left"}>Seared Salmon Fillet</h3>
                <p className={"text-body-secondary pt-1.5 text-center md:text-left"}>Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
              </div>
            </div>

            <div className={"my-[24px] h-[1px] bg-white opacity-15"}></div>

            <div className={"flex flex-col md:flex-row md:gap-x-[62px]"}>
              <div className={"flex"}>
                <picture>
                  <source media="(max-width: 767px)" srcSet={"/images/homepage/beef-mobile.jpg"} />
                  <source media="(max-width: 1023px)" srcSet={"/images/homepage/beef-desktop-tablet.jpg"} />
                  <img src={"/images/homepage/beef-desktop-tablet.jpg"} alt="Beef" />
                </picture>
                <div className={"mt-4 hidden h-[1px] w-8 bg-[#9E7F66] md:block"} />
              </div>

              <div className={"mt-2 pt-[36px] md:pt-0 lg:w-[350px]"}>
                <h3 className={"text-heading-md text-center md:text-left"}>Rosemary Filet Mignon</h3>
                <p className={"text-body-secondary pt-1.5 text-center md:text-left"}>Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
              </div>
            </div>

            <div className={"my-[24px] h-[1px] bg-white opacity-15"}></div>

            <div className={"flex flex-col md:flex-row md:gap-x-[62px]"}>
              <div className={"flex"}>
                <picture>
                  <source media="(max-width: 767px)" srcSet={"/images/homepage/chocolate-mobile.jpg"} />
                  <source media="(max-width: 1023px)" srcSet={"/images/homepage/chocolate-desktop-tablet.jpg"} />
                  <img src={"/images/homepage/chocolate-desktop-tablet.jpg"} className={""} alt="Chocolate" />
                </picture>
                <div className={"mt-4 hidden h-[1px] w-8 bg-[#9E7F66] md:block"} />
              </div>

              <div className={"pt-[36px] md:mt-2 md:pt-0 lg:w-[350px]"}>
                <h3 className={"text-heading-md text-center md:text-left"}>Summer Fruit Chocolate Mousse</h3>
                <p className={"text-body-secondary pt-1.5 text-center md:text-left"}>Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <button className={"button-primary mt-[27px] bg-black lg:mt-[60px]"}>
                <span className={"text-button-primary"}>Book a table</span>
              </button>
            </div>

            <div className={"pt-[49px] md:w-full md:pt-[52px] lg:-ml-[125px] lg:flex lg:w-auto lg:pt-[79px]"}>
              <ul className={"flex list-none flex-col gap-y-4 md:flex-row md:justify-between md:gap-x-2.5 lg:flex-col lg:justify-start lg:gap-x-0"}>
                {Object.keys(eventImages).map((event) => (
                  <li key={event} onClick={() => setEventName(event)} className={"text-heading-sm group flex flex-col-reverse items-center uppercase lg:flex-row lg:gap-x-8"}>
                    <div className={`invisible h-[1px] w-[48px] bg-[#9E7F66] lg:w-[95px] ${eventName == event ? "visible" : ""}`} />
                    <span className={`group-hover:ml-0 hover:opacity-100 ${eventName == event ? "text-[#242B37]" : "text-[#4C4C4C] opacity-50"}`}>{event}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className={
          "flex flex-col items-center bg-[url('/images/homepage/ready-bg-mobile.jpg')] bg-cover bg-no-repeat px-6 pt-[84px] pb-[80px] md:bg-[url('/images/homepage/ready-bg-tablet.jpg')] md:pt-[72px] md:pb-[64px] md:pl-[66px] lg:h-[240px] lg:flex-row lg:gap-x-[250px] lg:bg-[url('/images/homepage/ready-bg-desktop.jpg')] lg:px-[165px]"
        }
      >
        <h3 className={"text-heading-lg text-center text-white lg:text-left"}>Ready to make a reservation?</h3>
        <button className={"button-primary mt-5 border border-white md:mt-6 lg:mt-0 lg:ml-auto"}>
          <span className={"text-button-primary"}>Book a table</span>
        </button>
      </section>

      <footer className={"text-footer h-[240px] px-6 md:px-[40px] lg:px-[165px]"}>
        <div className={"flex flex-col items-center py-20 md:flex-row md:items-start md:gap-x-[129.58px] md:py-16"}>
          <Image src={"/images/logo.svg"} alt="Logo" width={103} height={40} />
          <div className={"flex flex-col pt-[42px] text-center md:pt-0 md:text-left lg:ml-auto lg:w-[814px] lg:flex-row"}>
            <div>
              <p>Marthwaite, Sedbergh</p>
              <p>Cumbria</p>
              <a href={"tel:+00441234567"}>+00 44 1234 4567</a>
            </div>
            <div className={"pt-8 lg:ml-auto lg:w-[446px] lg:pt-0"}>
              <p>Open Times</p>
              <p>MON - FRI: 09:00 AM - 10:00 PM</p>
              <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
