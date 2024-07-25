import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Routes/Login/Login";
import Signup from "./Routes/Signup/Signup";

function App() {
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
