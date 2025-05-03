export default function LocallySourcedSection() {
  return (
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
  );
}
