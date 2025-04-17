import AppIntelligence from "./components/AppIntelligence";
import Cards from "./components/Cards";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Ld from "./components/Ld";
import Monetise from "./components/Monetise";
import Sidebar from "./components/Sidebar";
import Topapps from "./components/Topapps";
import Topdeals from "./components/TopDeals";


export default function Home() {
  return (
    <div>
      <HomePage />
      <Topapps />
      <Topdeals />
      <Featured />
      <Sidebar />
      <Cards />
      <Monetise />
      <Ld />
      <AppIntelligence />
      <Footer />
    </div>

  );
}
