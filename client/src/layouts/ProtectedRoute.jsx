import { Outlet, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Header from "../components/work-area/Header";
// import Sidebar from "../components/work-area/Sidebar";
// import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";
const ProtectedRoute = () => {
  // const navigate = useNavigate();
  const { user } = useAuth();
  return (
    <>
      {user ? (
        <div className=" bg-gradient-to-r from-blue-dark-deep to-blue-deep">
          <div className="relative flex min-h-screen">
            {/* <div className=" border-r border-primary-dark text-white ">
              {" "}
              <Sidebar />
            </div> */}
            <div className="flex-1">
              <div className="bg-blue text-white w-full">
                <Navbar />
              </div>
              <main className=" text-white w-full  md:min-h-screen md:p-10 ">
                <Outlet />
              </main>
            </div>
          </div>
          {/* <footer className=" p-4  text-center text-white font-bold">
            <Footer />{" "}
          </footer> */}
        </div>
      ) : (
        <Navigate to={"/"} />
        // navigate("/")
      )}
    </>
  );
};

export default ProtectedRoute;
