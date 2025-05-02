import { menuItems } from "@/data/data";
import { Fragment } from "react";

export default function MenuSection() {
  return (
    <section className="px-6 pt-[72px] pb-[102px] md:px-[98px] md:pt-24 md:pb-24 lg:px-[125px] lg:pt-[200px] lg:pb-[120px]">
      <svg className={"mx-auto lg:inline-flex"} width="71" height="7" viewBox="0 0 71 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="3" width="56" height="1" fill="#9E7F66" />
        <circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66" />
      </svg>

      <div className={"flex flex-col items-start pt-[38px] md:pt-[39px] lg:flex-row lg:gap-x-[165px] lg:pt-[55px]"}>
        <div className={"md:px-16 lg:w-[445px] lg:px-0"}>
          <h2 className={"text-heading-lg text-center text-white lg:text-left"}>A few highlights from our menu</h2>
          <p className={"text-body-primary pt-[27px] text-center text-white lg:text-left"}>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
        </div>

        <div className="pt-[85px] md:pt-[54px] lg:pt-0">
          {menuItems.map((item, index) => (
            <Fragment key={index}>
              <div className="flex flex-col items-center md:flex-row md:items-start md:gap-x-[62px]">
                <div className={"flex"}>
                  <picture>
                    <source media="(max-width: 767px)" srcSet={item.mobile} />
                    <source media="(max-width: 1023px)" srcSet={item.desktop} />
                    <img src={item.desktop} alt={item.alt} className={""} />
                  </picture>
                  <div className={"mt-4 hidden h-[1px] w-8 bg-[#9E7F66] md:block"} />
                </div>
                <div className={"pt-[36px] md:mt-2 md:pt-0 lg:w-[350px]"}>
                  <h3 className={"text-heading-md text-center md:text-left"}>{item.name}</h3>
                  <p className={"text-body-secondary pt-1.5 text-center md:text-left"}>{item.description}</p>
                </div>
              </div>
              {index < 2 && <div className={"my-[24px] h-[1px] bg-white opacity-15"} />}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
