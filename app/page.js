import Image from "next/image";
import Hero from "./Hero/Hero";
import Collections from "./Hero/Collections";

export default function Home() {
  return (
    <main className="overflow-x-hidden px-4">
      <Hero />
      <Collections />
    </main>
  );
}
