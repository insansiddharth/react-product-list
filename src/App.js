import ListView from "./componenets/ListView";
import Navbar from "./componenets/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Redirect } from "react-router-dom";
import { Welcome } from "./componenets/Welcome";
import { About } from "./componenets/About";
import { Welcomeeight } from "./componenets/Welcomeeight";


function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
      <Route exact path="/">
       <Redirect to="/welcome"></Redirect>
      </Route>
      <Route  path="/welcome">
        <Welcome/>
      </Route>
      <Route path="/category/:apple">
        <ListView/>
      </Route>
      </Switch>
      
      
    </div>
  );
}

export default App;
