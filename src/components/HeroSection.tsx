import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className={"w-full bg-[url('/images/homepage/hero-bg-mobile.jpg')] bg-cover bg-no-repeat pb-[152px] md:bg-[url('/images/homepage/hero-bg-tablet.jpg')] md:pb-[216px] lg:h-[55.75rem] lg:bg-[url('/images/homepage/hero-bg-desktop.jpg')] lg:pb-0"}
    >
      <div className={"px-6 md:px-10 lg:pl-[10.313rem]"}>
        <div className={"grid place-items-center pt-[14.5rem] md:pt-[23.375rem] lg:absolute lg:w-[32.188rem] lg:place-items-start lg:pt-[4.063rem]"}>
          <Image src={"/images/logo.svg"} alt="Logo" width={103} height={40} />

          <div
            className={
              "pt-9 text-center text-[2rem] leading-[2.5rem] font-light tracking-[0.025rem] text-white md:pt-[2.375rem] md:text-[3rem] md:leading-16 md:tracking-[--0.038rem] lg:w-full lg:pt-[9.563rem] lg:text-left lg:text-[5rem] lg:leading-[5rem] lg:tracking-[-0.063rem]"
            }
          >
            <h1>Exquisite dining</h1>
            <h1>since 1989</h1>
          </div>
          <p className={"pt-[1.313rem] text-center text-[1rem] leading-[1.625rem] text-white md:px-[3.625rem] md:pt-[1.25rem] md:text-[1.25rem] md:leading-[1.875rem] lg:px-0 lg:pt-[1.125rem] lg:text-left"}>
            Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.
          </p>

          <Link href={"/booking"} className={"mt-[3.313rem] grid h-[4rem] w-[15.313rem] place-items-center border border-white hover:bg-white hover:text-black lg:mt-[2.5rem]"}>
            <span className={"text-[1.063rem] leading-[1rem] font-semibold tracking-[0.156rem] text-white uppercase"}>Book a table</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
