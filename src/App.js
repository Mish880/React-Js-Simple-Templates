import {Route, Routes} from "react-router-dom";
import Loginform from "./page/login/login";
import Dashboardform from "./page/Dashboard/Dashboard";
import UserRegistrationform from "./page/UserRegistration/UserRegistration";
import ProductManageForm from "./page/ProductManage/ProductManage";
import CartManage from "./page/CartManage/CartManage";


function App() {
  return (
    <div className="App">
        <Routes>
          
          <Route path='/page' element={<Loginform/>}/>
          <Route path='/dashboard' element={<Dashboardform/>}/>
          <Route path='/user' element={<UserRegistrationform/>}/>
          <Route path='/product' element={<ProductManageForm/>}/>
          <Route path='/Cart' element={<CartManage/>}/> 
        </Routes>
      

    </div>
  );
}

export default App;
