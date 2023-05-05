import './App.scss';
import DashBoord from './components/dashbord/DashBoord';
import DashbordInfoUser from './components/dashbord/DashBordContent/DashbordInfoUser';
import DashbordStatus from './components/dashbord/DashBordContent/DashbordStatus';

import Home from './components/homePage/Home';
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={ <Home />}></Route>
        <Route exact path='/dashbord' element={<DashBoord />}>
       
          <Route path='user' element={<DashbordInfoUser />} />
          <Route path='status' element={<DashbordStatus />} />
        </Route>
       
  
 </Routes>
    </div>
  );
}

export default App;
