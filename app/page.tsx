import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ValueStrip from "./components/ValueStrip";
import Features from "./components/Features";
import OpenSource from "./components/OpenSource";
import Compare from "./components/Compare";
import Marketplace from "./components/Marketplace";
import Install from "./components/Install";
import Contributing from "./components/Contributing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div
      style={{
        background: "#08090a",
        color: "#e9eae7",
        minHeight: "100%",
        overflowX: "hidden",
      }}
    >
      <a href="#top" className="dc-skip-link">
        Aller au contenu
      </a>
      <Nav />
      <Hero />
      <main>
        <ValueStrip />
        <Features />
        <OpenSource />
        <Compare />
        <Marketplace />
        <Install />
        <Contributing />
      </main>
      <Footer />
    </div>
  );
}
