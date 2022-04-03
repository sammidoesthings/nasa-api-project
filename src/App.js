import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/HeaderFooter';
import LandingPage from './components/LandingPage';
import ApodPage from './components/APOD';
import InsightPage from './components/Insight';
import LibraryPage from './components/Library';
import TlePage from './components/TLE';

function App() {
  return (
    <div className="App-container">
      <Header/>

      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route path="/apod" element={<ApodPage/>}/>
        <Route path="/insight" element={<InsightPage/>}/>
        <Route path="/library" element={<LibraryPage/>}/>
        <Route path="/tle" element={<TlePage/>}/>
      </Routes>

      <Footer/>
    {/* END OF APP CONTAINER */}
    </div>
  );
}

export default App;
