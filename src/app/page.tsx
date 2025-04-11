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

      <section>
        <h2>Enjoyable place for all the family</h2>
        <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
      </section>

      <section>
        <h2>The most locally sourced food</h2>
        <p>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
      </section>

      <section>
        <div>
          <h2>A few highlights from our menu</h2>
          <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
        </div>
        <div>{/*Menu Stuff*/}</div>
      </section>

      <section>
        <div>
          <h1>Family Gathering</h1>
          <p> We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</p>
          <button>
            <span className={"font-league-spartan text-[17px] leading-[16px] font-semibold tracking-[2.5px] uppercase"}>Book a table</span>
          </button>
        </div>
      </section>

      <section>
        <h3>Ready to make a reservation?</h3>
        <button>
          <span className={"font-league-spartan text-[17px] leading-[16px] font-semibold tracking-[2.5px] uppercase"}>Book a table</span>
        </button>
      </section>
      <footer></footer>
    </div>
  );
}
