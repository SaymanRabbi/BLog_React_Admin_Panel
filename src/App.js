
import './App.css';
// import Bootstarp Css file
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes
 } from 'react-router-dom';
// import MaindashBoard from './Pages/MaindashBoard';
import Layout from './Components/Header/Layout';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import ProfileSetting from './Pages/ProfileSetting';
// import Navbar from './Components/Header/Navbar';
// import Topnavbar from './Components/Header/Topnavbar';
function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Layout/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/profilesetting' element={<ProfileSetting/>}/>
      {/* <Route path='/' element={<MaindashBoard/>}/> */}
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  );
}

export default App;
