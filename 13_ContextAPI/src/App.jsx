import { useState } from "react";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h2>Welcome to React ContextAPI</h2>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
