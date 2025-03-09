import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RightSidebar from "./components/RightSidebar";
import Heading from "./components/Heading";
import { FaDownload, FaPaperPlane } from "react-icons/fa";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <RightSidebar/>
        <Heading
        title="Analytical"
        breadcrumbs={[
          { text: "Dashboard" },
          { text: "Analytical" },
        ]}
        buttons={[
          { text: "Download report", icon: <FaDownload />, onClick: () => alert("Downloading...") },
          { text: "Send report", icon: <FaPaperPlane />,  onClick: () => alert("Sending...") },
        ]}
      />
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
