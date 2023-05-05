
import './App.scss';
import CategoryCompany from './components/category/CategoryCompany';
import DashBoord from './components/dashbord/DashBoord';
import DashbordInfoUser from './components/dashbord/DashBordContent/DashbordInfoUser';
import DashbordStatus from './components/dashbord/DashBordContent/DashbordStatus';
import InfoUser from './components/dashbord/MenuItems/InfoUser';
import Profile from './components/dashbord/MenuItems/Profile';
import HeaderNav from './components/header/HeaderNav';
import Home from './components/homePage/Home';
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={ <Home />}></Route>
        <Route exact path='/dashbord' element={<DashBoord />}>
          <Route path='profile' element={<Profile />} />
          <Route path='user' element={<DashbordInfoUser />} />
          <Route path='status' element={<DashbordStatus />} />
        </Route>
       
  
 </Routes>
    </div>
  );
}

export default App;
