"use client";

import Footer from "@/components/Footer";
import MenuSection from "@/components/MenuSection";
import EventSection from "@/components/EventSection";
import ReservationSection from "@/components/ReservationSection";
import Header from "@/components/Header";
import EnjoyablePlaceSection from "@/components/EnjoyablePlaceSection";
import LocallySourcedSection from "@/components/LocallySourcedSection";

export default function Home() {
  return (
    <div className={"font-league-spartan relative"}>
      <Header />
      <main>
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
