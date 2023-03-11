
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes
 } from 'react-router-dom';
import Layout from './Components/Header/Layout';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import ProfileSetting from './Pages/ProfileSetting';
import Post from './Pages/Post';
import PostTable from './Pages/PostTable';
import CateGory from './Pages/CateGory';
import CateGoryTable from './Pages/CateGoryTable';

function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/profilesetting' element={<ProfileSetting/>}/>
      <Route path='/post' element={<Post/>}/>
      <Route path='/posttable' element={<PostTable/>}/>
      <Route path='*' element={<h1>404 Not Found</h1>}/>
      <Route path='/category' element={<CateGory/>}/>
      <Route path ='/categorytable' element={<CateGoryTable/>}/>
      </Route>
      {/* <Route path='/' element={<MaindashBoard/>}/> */}
      <Route path="/login" element={<Login/>}/>
      <Route path='*' element={<h1>404 Not Found</h1>}/>
    </Routes>
    </>
  );
}

export default App;
