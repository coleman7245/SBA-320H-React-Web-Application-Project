import { Route, Routes } from 'react-router-dom';
import {APIProvider} from '@vis.gl/react-google-maps';

import './styles/App.css';

const GOOGLE_API_KEY = 'AIzaSyDcaZ4f66RiyRPigRfOrHlt-fkrisaufII';

import HomePage from './components/HomePage.jsx';
import AboutPage from './components/AboutPage.jsx';
import LocalWeatherPage from './components/LocalWeatherPage.jsx';

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/localweather' element={<LocalWeatherPage />} />
      <Route path='/about' element={<AboutPage />} />
    </Routes>
  )
}

export default App
