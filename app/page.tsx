"use client"

import Footer from "@/components/footer";
import FeaturesSection from "@/components/landing/features";
import HeroSection from "@/components/landing/hero";




export default function Home() {



  return (

    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
