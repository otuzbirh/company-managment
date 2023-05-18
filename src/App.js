import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import ApplicationPage from './pages/application';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/application/*' element={<ApplicationPage />} />
    <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
}

export default App;
