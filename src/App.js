import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/home';
import ApplicationPage from './pages/application';
import {useSelector} from 'react-redux'


function App() {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); 

  const PrivateRoute = ({ element}) => {
    if ( isAuthenticated ) { 
      return element
    } else {
       return <Navigate to="/" replace />;
    }
  };
  
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route
        path="/application/*"
        element={
          <PrivateRoute element={<ApplicationPage />} />
        }
      />    
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
}

export default App;
