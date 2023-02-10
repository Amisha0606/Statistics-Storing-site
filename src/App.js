import "./App.css";
import Form from "./form.js";
import Login from "./login.js";
import Recovery from "./recovery.js";
import Props from "./props.js";
import PropsMain from "./props-main.js";
import Assets from "./asset.js";
import KPIs from "./KPIs.js";
import Event from "./eventAnalysis";
import Costs from "./CostsInsights";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/main" element={<PropsMain />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/kpis" element={<KPIs />} />
        <Route path="/event" element={<Event />} />
        <Route path="/costs" element={<Costs />} />
      </Routes>
      {/* <Login/> */}
      {/* <Recovery/> */}
    </div>
  );
}

export default App;
