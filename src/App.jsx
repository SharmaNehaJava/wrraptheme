import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RightSidebar from "./components/RightSidebar";

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <RightSidebar/>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </>
  ) 
}

export default App
