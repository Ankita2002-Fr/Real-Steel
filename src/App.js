import Home from "./Home";
// import WorkoutPlans from "./WorkoutPlans";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WorkoutPlans from "./WorkoutPlans";
import Reviews from "./Reviews";
import Trials from "./Trials";
import ContactUs from "./ContactUs";
import Join from "./Join";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/workoutplans">
            <WorkoutPlans />
          </Route>
          <Route path="/reviews">
            <Reviews />
          </Route>
          <Route path="/trials">
            <Trials />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/join">
            <Join />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
