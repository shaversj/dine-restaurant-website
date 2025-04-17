import Image from "next/image";

export default function Footer() {
  return (
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
  );
}
