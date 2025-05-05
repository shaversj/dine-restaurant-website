"use client";

import Footer from "@/components/Footer";
import BookingHeroSection from "@/components/BookingHeroSection";
import BookingContentSection from "@/components/BookingContentSection";

export default function BookingPage() {
  return (
    <div className={"font-league-spartan"}>
      <main>
        <BookingHeroSection />
        <BookingContentSection />
      </main>
      <Footer />
    </div>
  );
}
