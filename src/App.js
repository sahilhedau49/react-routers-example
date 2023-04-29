import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Connect from "./components/Connect";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";
import Error from "./components/Error";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/connect" element={<Connect />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
