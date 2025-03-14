import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import RightSidebar from "./components/RightSidebar";
// import Sidebar from "./components/Sidebar"; // Sidebar for navigation
import Heading from "./components/Heading";

import Analytics from "./pages/Analytics";
// import Covid from "./pages/Covid";
import Messages from "./pages/Messages";
import Calendar from "./pages/Calendar";
import Files from "./pages/Files";
import Contacts from "./pages/Contacts";
import Blog from "./pages/Blog";
import WebApp from "./pages/WebApp";

import { FaDownload, FaPaperPlane } from "react-icons/fa";

// Route Configurations for Breadcrumbs & Buttons
const routesConfig = {
  // "/": { title: "Dashboard", breadcrumbs: ["Dashboard", "Analytics"], buttons: [] },
  "/dashboard/analytics": { 
    title: "Analytics", 
    breadcrumbs: [
      { text: "Dashboard" },
      { text: "Analytical" },
    ], 
    buttons: [
      { text: "Download Report", icon: <FaDownload />, onClick: () => alert("Downloading...") },
      { text: "Send Report", icon: <FaPaperPlane />, onClick: () => alert("Sending...") }
    ]
  },
  // "/dashboard/covid": { title: "Covid-19", breadcrumbs: [{text:"Dashboard"}, {text:"Covid-19"}], buttons: [] },
  "/app/messages": { title: "Inbox", breadcrumbs: [{text:"App"},{text: "Messages"}], buttons: [] },
  "/app/calendar": { title: "Calendar", breadcrumbs: [{text:"App"}, {text:"Calendar"}], buttons: [] },
  "/app/files": { title: "Files", breadcrumbs: [{text:"App"}, {text:"Files"}], buttons: [] },
  "/app/contacts": { title: "Contacts", breadcrumbs: [{text:"App"}, {text:"Contacts"}], buttons: [] },
  "/app/blog": { title: "Blog", breadcrumbs: [{text:"App"}, {text:"Blog"}], buttons: [] },
  "/app/web-app": { title: "Web App", breadcrumbs: [{text:"App"}, {text:"Web App"}], buttons: [] },
};

// Layout Component to Render Sidebar & Content
const MainLayout = () => {
  const location = useLocation();
  const currentRoute = routesConfig[location.pathname] || {
    title: "Page Not Found",
    breadcrumbs: ["404"],
    buttons: [],
  };

  return (
    <>
      <Navbar />
      <RightSidebar/>
        {/* <Sidebar /> */}
        
          <Heading 
            title={currentRoute.title} 
            breadcrumbs={currentRoute.breadcrumbs} 
            buttons={currentRoute.buttons} 
          />
          <Routes>
            {/* Redirect root to Analytics */}
            <Route path="/" element={<Navigate to="/dashboard/analytics" replace />} />
            
            {/* Dashboard Pages */}
            <Route path="/dashboard/analytics" element={<Analytics />} />
            {/* <Route path="/dashboard/covid" element={<Covid />} /> */}

            {/* App Pages */}
            <Route path="/app/messages" element={<Messages />} />
            <Route path="/app/calendar" element={<Calendar />} />
            <Route path="/app/files" element={<Files />} />
            <Route path="/app/contacts" element={<Contacts />} />
            <Route path="/app/blog" element={<Blog />} />
            <Route path="/app/web-app" element={<WebApp />} />

            {/* Fallback for unknown routes */}
            <Route path="*" element={<h1 className="text-center text-red-500 mt-5">404 - Page Not Found</h1>} />
          </Routes>
        
    </>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;
