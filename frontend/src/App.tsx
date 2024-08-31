import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import SignIn from "./pages/signin";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        <Route path="/send" element={<h1>send</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
