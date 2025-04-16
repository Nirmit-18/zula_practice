import Featured from "./components/Featured";
import HomePage from "./components/HomePage";
import Topapps from "./components/Topapps";
import Topdeals from "./components/TopDeals";


export default function Home() {
  return (
    <div>
      <HomePage />
      <Topapps />
      <Topdeals />
      <Featured />
    </div>

  );
}
