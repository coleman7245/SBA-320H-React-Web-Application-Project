import { Route, Routes } from 'react-router-dom';
import './styles/App.css';

import HomePage from './components/HomePage.jsx';
import SomePage from './components/SomePage.jsx';

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/some' element={<SomePage />} />
    </Routes>
  )
}

export default App
