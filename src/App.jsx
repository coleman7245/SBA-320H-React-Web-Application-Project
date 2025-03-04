import { Route, Routes } from 'react-router-dom';

import './styles/App.css';

import HomePage from './components/HomePage.jsx';
import AboutPage from './components/AboutPage.jsx';
import LocalWeatherPage from './components/LocalWeatherPage.jsx';

const BASE_GEO_URL = 'http://api.openweathermap.org/geo/1.0/direct?';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/localweather' element={<LocalWeatherPage />} />
      <Route path='/localweather/:location' element={<LocalWeatherPage baseURL={BASE_URL} />} />
      <Route path='/about' element={<AboutPage />} />
    </Routes>
  )
}

export default App
