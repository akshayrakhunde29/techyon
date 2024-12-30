import React from "react";
import "./styles/App.scss";
import "./styles/AppTable.scss";
import Dashboard from "./component/Dashboard";
import HomeLayout from "./component/HomeLayout";

function App() {
  return (
    <div className="app">
      <HomeLayout>
        <Dashboard />
      </HomeLayout>
    </div>
  );
}

export default App;
