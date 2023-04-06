import './App.css';
import HomePage from './components/HomePage';
import Booking from './components/Booking'
import { Routes, Route, Link } from 'react-router-dom'
import logo from './images/Logo.png'
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <div className="App">
      <nav className='nav-bar'>
        <Link to='/'><img src={logo} alt="logo" /></Link>
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/AboutPage" className="nav-item">About</Link>
        <Link to="/menu" className="nav-item">Menu</Link>
        <Link to="/Booking" className="nav-item">Reservations</Link>
        <Link to="/online-order" className="nav-item">Online Order</Link>
        <Link to="/login" className="nav-item">LOGIN</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Booking" element={<Booking />}></Route>
       <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
    </div>
  );
}

export default App;
