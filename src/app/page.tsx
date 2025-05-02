"use client";

import Footer from "@/components/Footer";
import MenuSection from "@/components/MenuSection";
import EventSection from "@/components/EventSection";
import ReservationSection from "@/components/ReservationSection";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className={"font-league-spartan relative"}>
      <Header />
      <main>
        <section className={"flex bg-white px-6 md:flex-col md:items-center md:px-[98px] lg:items-start lg:px-[165px]"}>
          <div className={"relative bottom-[72px] md:bottom-[96px] lg:bottom-0 lg:flex lg:gap-x-[125px]"}>
            <picture>
              <source media="(max-width: 767px)" srcSet={"/images/homepage/enjoyable-place-mobile.jpg"} />
              <source media="(max-width: 1023px)" srcSet={"/images/homepage/enjoyable-place-tablet.jpg"} />
              <source media="(max-width: 1800px)" srcSet={"/images/homepage/enjoyable-place-desktop.jpg"} />
              <img src={"/images/homepage/enjoyable-place-mobile.jpg"} className={"mx-auto lg:relative lg:bottom-[70px] lg:mx-0 lg:h-[720px] lg:w-[540px]"} alt="Enjoyable place" />
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

        <MenuSection />
        <EventSection />
      </main>

      <ReservationSection />
      <Footer />
    </div>
  );
}
