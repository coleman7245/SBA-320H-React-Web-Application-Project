import { Route, Routes } from 'react-router-dom';

import './styles/App.css';

import HomePage from './components/HomePage.jsx';
import AboutPage from './components/AboutPage.jsx';
import LocalWeatherPage from './components/LocalWeatherPage.jsx';

const BASE_URL = 'http://api.openweathermap.org/';

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
