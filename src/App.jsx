import "./App.css";
import ColorCards from "./ColorCards";
import DashboardText from "./DashboardText";
import BarChartimg from "./BarChartimg";
import dayschartbar from "./dayschartbar.png";
import lineschart from "./lineschart.png";

function App() {
  return (
    <div>
      <h2>Dashboard</h2>
      <DashboardText />
      <ColorCards />
      <BarChartimg image={dayschartbar} />
      <BarChartimg image={lineschart} />
    </div>
  );
}

export default App;
