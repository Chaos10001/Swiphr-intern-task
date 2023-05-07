import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbars/NavBar/NavBar";
import Home from "./components/Pages/Home/Home";

function App() {
  return (
    <>
      <Router>
      <NavBar />
        <Switch>
        </Switch>
        <Route exact path="/" >
          <Home/>
        </Route>
        {/* <Route path="/latest" element={<LatestNews />} /> */}
      </Router>
    </>
  );
}
export default App;
