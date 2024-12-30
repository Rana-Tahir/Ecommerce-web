import Bestseller from "@/components/bestseller";
import Editorchoice from "@/components/editorchoice";
import Header from "@/components/header";
import Herosection from "@/components/herosection";
import Hero from "@/components/hero";
import Container from "@/components/container";
import Featured from "@/components/featured";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Herosection />
      <Editorchoice />
      <Bestseller />
      <Hero />
      <Container />
      <Featured />
      <Footer />
    </div>
  );
}
