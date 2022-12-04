import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/home/Home";
import Menu from "./components/menu/Menu";
import UsersPage from "./pages/usersPage/UsersPage";
import CountPage from "./pages/countPage/CountPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ContactPage from "./pages/contactPage/ContactPage";

function App() {
  return (
    <BrowserRouter>
        <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path={"/users"} element={<UsersPage/>}/>
        <Route path={"/count"} element={<CountPage/>}/>
        <Route path={"/about"} element={<AboutPage/>}/>
        <Route path={"/contact"} element={<ContactPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
