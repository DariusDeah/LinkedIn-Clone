import React, { useEffect } from "react";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { userSelector } from "./redux/userSlice";
import Login from "./components/Login/Login";
import Widgets from "./components/Widgets/Widgets";
function App() {
  const user = useSelector(userSelector);
  useEffect(() => {
    console.log(userSelector);
  }, []);

  return (
    <div className="app">
      {/* Header / Nav */}
      <Header />

      {/* Login */}
      {!user && <Login />}

      {/* Body */}
      {user && (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
