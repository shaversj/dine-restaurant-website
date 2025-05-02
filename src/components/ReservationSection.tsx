import Link from "next/link";

export default function ReservationSection() {
  return (
    <section
      className={
        "flex flex-col items-center bg-[url('/images/homepage/ready-bg-mobile.jpg')] bg-cover bg-no-repeat px-6 pt-[84px] pb-[80px] md:bg-[url('/images/homepage/ready-bg-tablet.jpg')] md:pt-[72px] md:pb-[64px] md:pl-[66px] lg:h-[240px] lg:flex-row lg:gap-x-[250px] lg:bg-[url('/images/homepage/ready-bg-desktop.jpg')] lg:px-[165px]"
      }
    >
      <h3 className={"text-heading-lg text-center text-white lg:text-left"}>Ready to make a reservation?</h3>
      <Link href={"/booking"} className={"mt-5 grid h-[64px] w-[245px] place-items-center border border-white text-[17px] leading-[16px] font-semibold tracking-[2.5px] uppercase hover:bg-white hover:text-black md:mt-6 lg:mt-0 lg:ml-auto"}>
        Book a table
      </Link>
    </section>
  );
}
