import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Switch from "./components/Switch";
import Reset from "./components/Reset";
import Footer from "./components/Footer";

function App() {
  const [switchValue1, setSwitchValue1] = useState(false);
  const [switchValue2, setSwitchValue2] = useState(false);
  const [switchValue3, setSwitchValue3] = useState(false);

  return (
    <div>
      <Header />
      <Switch value={switchValue1} setSwitchValue={setSwitchValue1} />
      <Switch value={switchValue2} setSwitchValue={setSwitchValue2} />
      <Switch value={switchValue3} setSwitchValue={setSwitchValue3} />
      <Reset
        setSwitchValue1={setSwitchValue1}
        setSwitchValue2={setSwitchValue2}
        setSwitchValue3={setSwitchValue3}
      />
      <div className="departure">
        {switchValue1 === true &&
        switchValue2 === true &&
        switchValue3 === true ? (
          <h1
            style={{
              backgroundColor: "#46ac4a",
            }}
          >
            Go
          </h1>
        ) : (
          <h1
            style={{
              backgroundColor: "#d34848",
            }}
          >
            {" "}
            No way!
          </h1>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
