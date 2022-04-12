import { Route, Routes } from "react-router-dom";
import "./App.css";
import Heder from "./components/Heder/Heder";
import Inventory from "./components/Inventiry/Inventory";
import Odears from "./components/Oders/Odears";
import Shop from "./components/Shop/Shop";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Singup from "./components/Singup/Singup";
import RequiAuth from "./components/RequireAuth/RequiAuth";
import Shipment from "./components/Shipment/Shipment";

function App() {
  return (
    <div>
      <Heder></Heder>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/home" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/orders" element={<Odears></Odears>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Singup" element={<Singup></Singup>}></Route>
        <Route
          path="/inventory"
          element={
            <RequiAuth>
              <Inventory></Inventory>
            </RequiAuth>
          }
        ></Route>
        <Route
          path="/shipment"
          element={
            <RequiAuth>
              <Shipment></Shipment>
            </RequiAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

/* <Route
   path="/shipment"
   element={
     <RequiAuth>
       <Shipment></Shipment>
     </RequiAuth>
     }
    ></Route>
 


     <Route
   path="/inventory"
   element={
     <RequiAuth>
       <Inventory></Inventory>
     </RequiAuth>
   }
    ></Route>
   */
