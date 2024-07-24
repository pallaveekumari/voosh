import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar';
import Login from './Routes/Login/Login';

function App() {
  return (
    <div className="App">
      {/* <AllRoutes/> */}
      {/* <Navbar/> */}
      <Login/>
    </div>
  );
}

export default App;
