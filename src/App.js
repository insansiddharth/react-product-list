import ListView from "./componenets/ListView";
import Navbar from "./componenets/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Redirect, Routes } from "react-router-dom";
import { Welcome } from "./componenets/Welcome";
import { About } from "./componenets/About";
import { Welcomeeight } from "./componenets/Welcomeeight";
import { WrongPage } from "./componenets/WrongPage";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      {/* <Route exact path="/">
       <Redirect to="/welcome"></Redirect>
      </Route>
      <Route  path="/welcome">
        <Welcome/>
      </Route> */}
      <Route  exact path="/category/top-wear-kurtas" element={<ListView key="top-wear-kurtas" name="top-wear-kurtas"/>}/>
      <Route  exact path="/category/top-wear-kurtas/fwvfwvew" element={<ListView key="top-wear-kurtas" name="top-wear-kurtas"/>}/>
       
      <Route  exact path="/category/bottom-wear" element={<ListView key="bottom-wear" name="bottom-wear"/>}/>
      <Route exact  path="/category/w-cosmetics" element={   <ListView key="w-cosmetics" name="w-cosmetics"/>}/>
   
      <Route  exact path="/category/footwear" element={ <ListView key="footwear" name="footwear"/>}/>
      
      <Route exact path="/category/drapes-wear" element={<ListView key="drapes-wear" name="drapes-wear"/>}/>
    
      <Route exact path="/category/wishful" element={<ListView key="wishful" name="wishful"/>}/>
      <Route path="*" element={<WrongPage key="wrong"/>}/>
        
      </Routes>

      {/* <Route path="/category/top-wear-kurtas">
        <ListView name="top-wear-kurtas"/>
      </Route>
      <Route path="/category/bottom-wear">
        <ListView name="bottom-wear"/>
      </Route>
      <Route path="/category/w-cosmetics">
        <ListView name="w-cosmetics"/>
      </Route>
      <Route path="/category/footwear">
        <ListView name="footwear"/>
      </Route>
      <Route path="/category/drapes-wear">
        <ListView name="drapes-wear"/>
      </Route>
      <Route path="/category/wishful">
        <ListView name="wishful"/>
      </Route> */}
      
      
    </div>
  );
}

export default App;
