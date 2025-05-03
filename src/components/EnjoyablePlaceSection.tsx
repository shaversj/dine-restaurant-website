export default function EnjoyablePlaceSection() {
  return (
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
  );
}
