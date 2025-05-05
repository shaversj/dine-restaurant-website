"use client";

import Footer from "@/components/Footer";
import MenuSection from "@/components/MenuSection";
import EventSection from "@/components/EventSection";
import ReservationSection from "@/components/ReservationSection";
import EnjoyablePlaceSection from "@/components/EnjoyablePlaceSection";
import LocallySourcedSection from "@/components/LocallySourcedSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className={"font-league-spartan relative"}>
      <main>
        <HeroSection />
        <EnjoyablePlaceSection />
        <LocallySourcedSection />
        <MenuSection />
        <EventSection />
        <ReservationSection />
      </main>
      <Footer />
    </div>
  );
}
