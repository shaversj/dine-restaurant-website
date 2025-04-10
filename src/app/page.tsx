import Image from "next/image";

export default function Home() {
  return (
    <div className={"font-league-spartan"}>
      <header className={"grid min-h-[892px] grid-cols-[400px_1fr]"}>
        <div className={"border-white pt-[65px] pl-[165px]"}>
          <Image src={"/images/logo.svg"} alt="Logo" width={103} height={40} />
          <div className={"absolute w-[515px] pt-[153px]"}>
            <h2 className={"text-[80px] leading-[80px] font-extralight tracking-[-1]"}>Exquisite dining since 1989</h2>
            <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>

            <button className={"mt-[40px] h-[64px] w-[245px] border border-white"}>
              <span className={"font-league-spartan text-[17px] leading-[16px] font-semibold tracking-[2.5px] uppercase"}>Book a table</span>
            </button>
          </div>
        </div>

        <div className={"min-h-full"}>
          <img src={"/images/homepage/hero-bg-desktop@2x.jpg"} className={"object-fill"} alt="Hero" />
        </div>
      </header>
    </div>
  );
}
