import { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";

const HomeLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="dashboard">
      <Header isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div style={{ display: "flex", background: "white" }}>
        <Navbar isSidebarOpen={isSidebarOpen} />
        {children}
      </div>
    </div>
  );
};
export default HomeLayout;
