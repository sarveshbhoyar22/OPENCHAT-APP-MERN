import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/SignUp.jsx";
import { Routes,Route } from "react-router-dom";
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
import Logout from "./pages/logout/Logout.jsx";

function App() {
  const {authUser} = useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/logout" /> : <Signup />}
        />

        <Route
        path="/logout"
        element={authUser ? <Logout /> : <Navigate to="/login" />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
