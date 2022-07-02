import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Mainpage from './Components/Mainpage';
import Dashboard from './Components/Dashboard/Dashboard';
import Charts from './Components/Charts';
import Tables from './Components/Tables';
import Buttons from './Components/Component/Buttons';
import Cards from './Components/Component/Cards';
import Color from './Components/Utilities/Color';
import Border from './Components/Utilities/Border';
import Animation from './Components/Utilities/Animation';
import Other from './Components/Utilities/Other';
import LoginPage from './Components/LoginPage';

import RegisterPage from './Components/RegisterPage';
import ForgotPassword from './Components/ForgotPassword';
import Page404 from './Components/Page404';
import BlankPage from './Components/BlankPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/' element={<Mainpage />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/charts' element={<Charts />} />
          <Route path='/tables' element={<Tables />} />
          <Route path='/components/buttons' element={<Buttons />} />
          <Route path='/components/cards' element={<Cards />} />
          <Route path='/utilities/color' element={<Color />} />
          <Route path='/utilities/border' element={<Border />} />
          <Route path='/utilities/animation' element={<Animation />} />
          <Route path='/utilities/other' element={<Other />} />
          <Route path='/404' element={<Page404 />} />
          <Route path='/blankpage' element={<BlankPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
