import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './home';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      </Routes>
  </>
  );
}

export default App;
