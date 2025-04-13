import Image from "next/image";

export default function Home() {
  return (
    <div className={"font-league-spartan relative"}>
      <header className={"h-[892px] w-full bg-[url('/images/homepage/hero-bg-desktop.jpg')] bg-cover bg-no-repeat"}>
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
      </header>
      <section className={"flex items-center gap-x-[125px] bg-white px-[165px]"}>
        <img src={"/images/homepage/enjoyable-place-desktop.jpg"} className={"relative bottom-[70px] h-[720px] w-[540px]"} alt="Enjoyable place" />
        <div className={"w-[445px]"}>
          <h2 className={"text-[48px] leading-[48px] font-bold tracking-[-0.5px] text-[#242B37]"}>Enjoyable place for all the family</h2>
          <p className={"pt-[27px] text-[20px] leading-[30px] font-normal text-[#242B37]"}>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
        </div>

        <img src={"/images/patterns/pattern-curve-top-right.svg"} className={"absolute left-0"} alt="Pattern" />
      </section>

      <section className={"relative flex items-center gap-x-[125px] bg-white px-[165px]"}>
        <img src={"/images/patterns/pattern-curve-top-left.svg"} className={"absolute right-0 bottom-0"} alt="Pattern" />

        <div className={"w-[445px]"}>
          <h2 className={"text-[48px] leading-[48px] font-bold tracking-[-0.5px] text-[#242B37]"}>The most locally sourced food</h2>
          <p className={"pt-[27px] text-[20px] leading-[30px] font-normal text-[#242B37]"}>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
        </div>
        <img src={"/images/homepage/locally-sourced-desktop.jpg"} className={"relative top-[70px]"} alt={"Enjoyable"} />
      </section>

      <section className={"px-[125px] pt-[200px] pb-[120px]"}>
        <svg className={"inline-flex"} width="71" height="7" viewBox="0 0 71 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="3" width="56" height="1" fill="#9E7F66" />
          <circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66" />
        </svg>

        <div className={"flex items-start gap-x-[165px] pt-[55px]"}>
          <div className={"w-[445px]"}>
            <h2 className={"text-heading-lg text-white"}>A few highlights from our menu</h2>
            <p className={"text-body-primary pt-[27px] text-white"}>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
          </div>

          {/*Menu Stuff*/}
          <div>
            <div className={"flex gap-x-[62px]"}>
              <div className={"flex"}>
                <img src={"/images/homepage/salmon-desktop-tablet.jpg"} className={""} alt="Salmon" />
                <div className={"mt-4 h-[1px] w-8 bg-[#9E7F66]"} />
              </div>

              <div className={"mt-2 w-[350px]"}>
                <h3 className={"text-heading-md"}>Seared Salmon Fillet</h3>
                <p className={"text-body-secondary pt-1.5"}>Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
              </div>
            </div>

            <div className={"my-[24px] h-[1px] bg-white opacity-15"}></div>

            <div className={"flex gap-x-[62px]"}>
              <div className={"flex"}>
                <img src={"/images/homepage/beef-desktop-tablet.jpg"} alt="Beef" />
                <div className={"mt-4 h-[1px] w-8 bg-[#9E7F66]"} />
              </div>

              <div className={"mt-2 w-[350px]"}>
                <h3 className={"text-heading-md"}>Rosemary Filet Mignon</h3>
                <p className={"text-body-secondary pt-1.5"}>Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
              </div>
            </div>

            <div className={"my-[24px] h-[1px] bg-white opacity-15"}></div>

            <div className={"flex gap-x-[62px]"}>
              <div className={"flex"}>
                <img src={"/images/homepage/chocolate-desktop-tablet.jpg"} alt="Choclate" />
                <div className={"mt-4 h-[1px] w-8 bg-[#9E7F66]"} />
              </div>

              <div className={"mt-2 w-[350px]"}>
                <h3 className={"text-heading-md"}>Summer Fruit Chocolate Mousse</h3>
                <p className={"text-body-secondary pt-1.5"}>Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={"bg-white"}>
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
