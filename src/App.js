import "./App.css";
import { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./views/AppRouter";
import { Account } from "./Account";
import Status from "./Status";

class App extends Component {
  render() {
    return (
      <Account>
        <Status />
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Account>
    );
  }
}

export default App;
