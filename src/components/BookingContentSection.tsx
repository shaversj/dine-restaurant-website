export default function BookingContentSection() {
  return (
    <section className={"relative h-[534px] bg-white md:h-[435px] lg:h-auto"}>
      <img src={"/images/patterns/pattern-lines.svg"} className={"absolute hidden translate-x-[655px] translate-y-[162px] lg:block"} alt="Lines" />
      <img src={"/images/patterns/pattern-curve-bottom-right.svg"} className={"invisible lg:visible"} alt="Pattern Bottom Right" />
    </section>
  );
}
