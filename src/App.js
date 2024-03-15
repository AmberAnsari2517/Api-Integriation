import logo from './logo.svg';
import './App.css';
import { Loginpages } from './pages/loginpage';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Signpage } from './pages/Signpage';
import { Pagelyout } from './pages/Drwer';

function App() {
  return (
    <div className="App">
     {/* <Routes>
      <Route path='/' element={<Loginpages/>}/>
      <Route path='/Sighnup' element={<Signpage/>}/>
     </Routes> */}
     <Pagelyout/>
   
    </div>
  );
}

export default App;
