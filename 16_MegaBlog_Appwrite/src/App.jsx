import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import authService from "./appwrite/auth";
import { Header, Footer } from "./Components/index.js";
import { Outlet } from "react-router-dom";

function App() {
  const  [Loading, setLoading ] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !Loading ? (
    <div className=" min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className=" w-full block">
        <Header />
        <main>
          {/* <h1>Hello, Welcopme top blog website</h1> */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
