import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  // const clientId = import.meta.env.VITE_CLIENT_ID;
  // const [auth, setAuth] = useState({});
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  //* AUTHENTICATION

  const getUser = async () => {
    const token = localStorage.getItem("token");
    // if (!token) {
    //   // setLoading(false);
    //   console.log("Without Token");
    //   return;
    // }
    const payload = {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    };
    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/auth/success",
        payload
      );
      const data = await response.json();
      console.log(data);
      if (response.status === 200) setUser(data.user);
      navigate("/work-area");
    } catch (error) {
      console.error("Error :(", error);
    }
  };
  // GOOGLE
  const handleGoogleLogIn = () => {
    window.open("http://localhost:4000/api/v1/auth/google", "_self");
  };
  // GITHUB
  const handleGithuLogin = () => {
    window.open("http://localhost:4000/api/v1/auth/github", "_self");
  };

  // LOGOUT
  const logoutSession = async () => {
    window.open("http://localhost:4000/api/v1/auth/logout", "_self");
  };
  // LOCAL SIGIN
  const signIn = async ({ email, password }) => {
    const payload = {
      method: "POST",
      credentials: "include",
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({ email, password }),
    };
    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/auth/signin",
        payload
      );
      // const user = await result.json();
      // if (user && user.token) {
      //   localStorage.setItem("userEco", JSON.stringify(user));
      // }
      const data = await response.json();
      console.log(data);
      if (response.status === 200) setUser(data.user);
      navigate("/work-area");
    } catch (error) {
      console.error("Error :(", error);
    }
  };

  // SIGN UP
  const signUp = async (user) => {
    const payload = {
      method: "POST",
      credentials: "include",
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({ user }),
    };
    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/auth/signup",
        payload
      );
      console.log(response.status);
      const data = await response.json();
      console.log(data);
      if (response.status === 200) navigate("/");
    } catch (error) {
      console.error("Error :(", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        // setAuth,
        // auth,
        user,
        handleGoogleLogIn,
        handleGithuLogin,
        logoutSession,
        signIn,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider };

export default AuthContext;
