import "./App.css";
import { Component } from "react";
import Navbar from "./utils/Navbar";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./views/Homepage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Homepage />
      </div>
    );
  }
}

export default App;
