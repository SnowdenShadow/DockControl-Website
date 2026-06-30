import { notFound } from "next/navigation";
import { isLocale, type Locale } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import ValueStrip from "../components/ValueStrip";
import Features from "../components/Features";
import OpenSource from "../components/OpenSource";
import Compare from "../components/Compare";
import Marketplace from "../components/Marketplace";
import Install from "../components/Install";
import Contributing from "../components/Contributing";
import Footer from "../components/Footer";
import BackgroundMusic from "../components/BackgroundMusic";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = await getDictionary(locale);

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
        {dict.skipToContent}
      </a>
      <Nav dict={dict} locale={locale} />
      <Hero dict={dict} />
      <main>
        <ValueStrip dict={dict} />
        <Features dict={dict} />
        <OpenSource dict={dict} />
        <Compare dict={dict} />
        <Marketplace dict={dict} />
        <Install dict={dict} />
        <Contributing dict={dict} />
      </main>
      <Footer dict={dict} />
      <BackgroundMusic dict={dict} />
    </div>
  );
}
