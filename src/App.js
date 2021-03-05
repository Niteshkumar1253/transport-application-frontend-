import "./App.css";
import Index from "./components/Index";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import UserHeader from "./components/UserHome/UserHeader";
import UserHomePage from "./components/UserHome/UserHomePage";
import Nearby from "./components/Nearby/NearbyStops"
import SignUp from "./components/SignUp/SignUp";
import EditProfile from "./components/UserHome/EditProfile";
import Favourite from "./components/UserHome/Favourite";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/user" component={UserHeader} />
          <Route exact path="/register" component={Header} />
          <Route exact path="/update" component={UserHeader} />
          <Route exact path="/favourite" component={UserHeader} />
          <Route exact path ="/nearby" component = {UserHeader} />
        </Switch>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/user" component={UserHomePage} />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/update" component={EditProfile} />
          <Route exact path="/favourite" component={Favourite} />
          <Route exact path ="/nearby" component = {Nearby} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
