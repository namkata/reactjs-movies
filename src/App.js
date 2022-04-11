import "./App.scss";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import RouteManagement from "./Config/RouteManagement";

function App() {
  return (
      <div>
          <BrowserRouter>
              <Header />
              <RouteManagement/>
              <Footer/>
          </BrowserRouter>
      </div>
  );
}

export default App;
