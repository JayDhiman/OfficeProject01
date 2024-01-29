import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from './Pages/Dashboard';
import AllEmployee from './Pages/Employee/AllEmployee';
import Clients from './Pages/Clients/Clients'
import Holiday from './Pages/Employee/Holiday';
import Login from './Components/LoginCredential/Login';
import Signup from './Components/LoginCredential/Signup';
// import Sample from './Components/Sample';


function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>


          
          <Route  path="/"  element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path= '/employee/allemployee' element={<AllEmployee/>} />
          <Route path= '/clients' element={<Clients/>} />
          <Route path= '/employee/holiday' element={<Holiday/>} />
          
        
        {/* </Route> */}
      </Routes>
    </BrowserRouter>

   </>
  );
}

export default App;
