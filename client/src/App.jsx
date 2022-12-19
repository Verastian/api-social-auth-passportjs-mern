import "./app.css";
import "./index.css";
import Home from "./pages/Home";
// import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import { AuthProvider } from "./context/AuthProvider";
import ProtectedRoute from "./layouts/ProtectedRoute";
import FormSignIn from "./components/auth/FormSignIn";
import FormSignUp from "./components/auth/FormSignUp";
const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<FormSignIn />} />
            <Route path="/signup" element={<FormSignUp />} />
          </Route>
          <Route path="/work-area" element={<ProtectedRoute />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
