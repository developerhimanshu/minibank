import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Signup from "./pages/signup";
import SignIn from "./pages/signin";
import Dashboard from "./pages/dashboard";

const ProtectedRoute = ({ children }) => {
  const currUser = localStorage.getItem("user");
  console.log(currUser);
  if (!currUser) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/send"
          element={
            <ProtectedRoute>
              <h1>send</h1>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
