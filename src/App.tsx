import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import HeroDetails from "./pages/HeroDetails";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element ={<Home />}/>
          <Route path="about" element ={<About />}/>
          <Route path=":id" element ={<HeroDetails />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
