import { Hero } from "@/sections/home/Hero";
import { Clubs } from "@/sections/home/Clubs";
import { AboutSport } from "@/sections/home/AboutSport";
import { HowToStart } from "@/sections/home/HowToStart";
import { Events } from "@/sections/home/Events";
import { NationalTeam } from "@/sections/home/NationalTeam";
import { CTA } from "@/sections/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Clubs />
      <AboutSport />
      <HowToStart />
      <Events />
      <NationalTeam />
      <CTA />
    </>
  );
}
