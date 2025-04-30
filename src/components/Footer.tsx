import Image from "next/image";

export default function Footer() {
  return (
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
  );
}
