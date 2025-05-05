import Image from "next/image";
import BookingForm from "@/components/BookingForm";

export default function BookingHeroSection() {
  return (
    <section className={"h-[600px] bg-[url('/images/booking/hero-bg-mobile.jpg')] bg-cover bg-no-repeat md:bg-[url('/images/booking/hero-bg-tablet.jpg')] lg:bg-[url('/images/booking/hero-bg-desktop.jpg')]"}>
      <div className={"px-6 pt-[56px] md:px-[40px] md:pt-[65px] lg:px-[165px]"}>
        <Image src={"/images/logo.svg"} alt="Logo" className={"mx-auto md:mx-0"} width={103} height={40} />
        <div className={"flex flex-col items-center pt-[44px] md:pt-[70px] lg:flex-row lg:items-start lg:gap-x-[125px] lg:pt-[153px]"}>
          <div className={"text-center md:w-[573px] lg:w-[445px] lg:text-left"}>
            <h1 className={"text-heading-xl text-white"}>Reservations</h1>
            <p className={"pt-[18px] text-[16px] leading-[26px] text-white md:text-[20px] md:leading-[30px]"}>
              We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.
            </p>

            <button type={"submit"} className={"mt-[19px] h-[64px] w-[263px] border border-white md:hidden md:h-[64px] md:w-[444px]"}>
              <span className={"font-league-spartan text-[17px] leading-[16px] font-semibold tracking-[2.5px] text-white uppercase"}>Reserve Place</span>
            </button>
          </div>
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
