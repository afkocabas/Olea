import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import Layout from './Layout';

import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react'; 
import {Routes, Route} from 'react-router-dom';

import './App.css';


function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />} >
          <Route path="/login" element={<LoginPage showModal={showModal} setShowModal={setShowModal} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
