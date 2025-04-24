"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = ["/images/homepage/family-gathering-desktop.jpg", "/images/homepage/special-events-desktop.jpg", "/images/homepage/social-events-desktop.jpg"];
  return (
    <div className={"font-league-spartan relative"}>
      <header className={"w-full bg-[url('/images/homepage/hero-bg-mobile.jpg')] bg-cover bg-no-repeat md:bg-[url('/images/homepage/hero-bg-tablet.jpg')] lg:h-[55.75rem] lg:bg-[url('/images/homepage/hero-bg-desktop.jpg')]"}>
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

      <section className={"relative bg-white px-6 md:px-[98px] lg:px-[165px]"}>
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

      <section className={"px-[125px] pt-[200px] pb-[120px]"}>
        <svg className={"inline-flex"} width="71" height="7" viewBox="0 0 71 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="3" width="56" height="1" fill="#9E7F66" />
          <circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66" />
        </svg>

        <div className={"flex items-start gap-x-[165px] pt-[55px]"}>
          <div className={"w-[445px]"}>
            <h2 className={"text-heading-lg text-white"}>A few highlights from our menu</h2>
            <p className={"text-body-primary pt-[27px] text-white"}>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
          </div>

          <div>
            <div className={"flex gap-x-[62px]"}>
              <div className={"flex"}>
                <img src={"/images/homepage/salmon-desktop-tablet.jpg"} className={""} alt="Salmon" />
                <div className={"mt-4 h-[1px] w-8 bg-[#9E7F66]"} />
              </div>

              <div className={"mt-2 w-[350px]"}>
                <h3 className={"text-heading-md"}>Seared Salmon Fillet</h3>
                <p className={"text-body-secondary pt-1.5"}>Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
              </div>
            </div>

            <div className={"my-[24px] h-[1px] bg-white opacity-15"}></div>

            <div className={"flex gap-x-[62px]"}>
              <div className={"flex"}>
                <img src={"/images/homepage/beef-desktop-tablet.jpg"} alt="Beef" />
                <div className={"mt-4 h-[1px] w-8 bg-[#9E7F66]"} />
              </div>

              <div className={"mt-2 w-[350px]"}>
                <h3 className={"text-heading-md"}>Rosemary Filet Mignon</h3>
                <p className={"text-body-secondary pt-1.5"}>Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
              </div>
            </div>

            <div className={"my-[24px] h-[1px] bg-white opacity-15"}></div>

            <div className={"flex gap-x-[62px]"}>
              <div className={"flex"}>
                <img src={"/images/homepage/chocolate-desktop-tablet.jpg"} alt="Choclate" />
                <div className={"mt-4 h-[1px] w-8 bg-[#9E7F66]"} />
              </div>

              <div className={"mt-2 w-[350px]"}>
                <h3 className={"text-heading-md"}>Summer Fruit Chocolate Mousse</h3>
                <p className={"text-body-secondary pt-1.5"}>Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={"bg-white"}>
        <img src={"/images/patterns/pattern-curve-top-right.svg"} className={"absolute z-10 translate-x-[-350px]"} alt="Pattern" />
        <img src={"/images/patterns/pattern-lines.svg"} alt={"Lines"} className={"absolute z-30 translate-x-[125px] translate-y-[122px]"} />
        <div className={"flex items-center gap-x-[125px] px-[165px] pt-[160px] pb-[160px]"}>
          <img src={images[imageIndex]} alt={"Family Gathering"} className={"z-20"} />
          <div className={"w-[445px]"}>
            <h2 className={"text-heading-lg text-black"}>Family Gathering</h2>
            <p className={"text-body-primary pt-[19px] text-black"}> We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</p>
            <button className={"button-primary mt-[60px] bg-black"}>
              <span className={"text-button-primary"}>Book a table</span>
            </button>

            <div className={"-ml-[125px] flex pt-[79px]"}>
              <ul className={"list-none"}>
                {["Family Gathering", "Special Events", "Social Events"].map((item, index) => (
                  <li key={index} onClick={() => setImageIndex(index)} className={"text-heading-sm group flex items-center gap-x-8"}>
                    <div className={`invisible h-[1px] w-[95px] bg-[#9E7F66] ${imageIndex == index ? "visible" : ""}`} />
                    <span className={"text-[#4C4C4C] opacity-50 group-hover:ml-0 hover:opacity-100"}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={"flex h-[240px] items-center gap-x-[250px] bg-[url('/images/homepage/ready-bg-desktop.jpg')] bg-cover bg-no-repeat px-[165px]"}>
        <h3 className={"text-heading-lg text-white"}>Ready to make a reservation?</h3>
        <button className={"button-primary ml-auto border border-white"}>
          <span className={"text-button-primary"}>Book a table</span>
        </button>
      </section>

      <footer className={"text-footer h-[240px] px-[165px]"}>
        <div className={"flex items-start pt-20"}>
          <Image src={"/images/logo.svg"} alt="Logo" width={103} height={40} />
          <div className={"ml-auto flex w-[814px]"}>
            <div>
              <p>Marthwaite, Sedbergh</p>
              <p>Cumbria</p>
              <a href={"tel:+00441234567"}>+00 44 1234 4567</a>
            </div>
            <div className={"ml-auto w-[446px]"}>
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
