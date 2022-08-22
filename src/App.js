import {Route, Routes} from "react-router-dom";
import Loginform from "./page/login/login";
import Dashboardform from "./page/Dashboard/Dashboard";
import UserRegistrationform from "./page/UserRegistration/UserRegistration";



function App() {
  return (
    <div className="App">
        <Routes>
          
          <Route path='/page' element={<Loginform/>}/>
          <Route path='/dashboard' element={<Dashboardform/>}/>
        </Routes>
      

    </div>
  );
}

export default App;
