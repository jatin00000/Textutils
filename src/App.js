import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// Useful for creating single page application and travelling to different web page
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);
  // this alert can be used by functions here as well as in the other components.
  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
    //to make alert disappear after few seconds, using this function to make alert null
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showalert("Dark Mode has been enabled", "success");
      // We can also change title through this way
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/* Here see that we are passing function which are passing function to the component and it will act then.*/}
      {/* <Router> */}
        <Navbar
          mode={Mode}
          title="TextUtils"
          aboutText="About textUtils"
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        <div className="container my-3">
          {/* <Switch> */}
            {/* <Route exact path="/about"> */}
              {/* <About /> */}
            {/* </Route> */}
            {/* <Route exact path="/"> */}
              <TextForm
                heading="Enter text to Analyse below"
                Mode={Mode}
                showalert={showalert}
              />
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
