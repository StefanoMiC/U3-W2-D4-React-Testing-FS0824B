import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import FetchUsers from "./components/FetchUsers";
import ToggleSection from "./components/ToggleSection";

function App() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <h1 style={{ border: "1px solid red" }}>A simple react-test EXAMPLE</h1>

      <label htmlFor="myCheck">Check me out</label>
      <input type="checkbox" id="myCheck" checked={checked} onChange={() => setChecked(!checked)} />

      <FetchUsers />
      <ToggleSection />
    </div>
  );
}

export default App;
