import "./App.scss";
import SearchAndFilter from "./Components/Layout/SearchAndFilter";
import Card from "./Components/Card";
import { useContext } from "react";
import { Context } from "./Context/StateContext";
import Navbar from "./Components/Layout/Navbar";

function App() {
  const { theme } = useContext(Context);
  return (
    <div className="App container-fluid" id={theme}>
      <Navbar />
      <div className="row d-flex flex-column align-items-center">
        <div className="col-12 ">
          <SearchAndFilter />
        </div>
        <div className="row mt-5">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
