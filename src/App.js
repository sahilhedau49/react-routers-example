import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/about" element={<h2>About Me!</h2>} />
        <Route path="/contact" element={<h2>Contact Me!</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
