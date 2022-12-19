import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const FormSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setConfirmPassword] = useState("");
  const { signUp } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = email.substring(0, email.lastIndexOf("@"));
    const user = { name, email, password, password_confirm };
    signUp(user);

    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <>
      <div className="w-full max-w-lg my-10 bg-white md:shadow sm:rounded-lg p-3 md:p-10">
        <h2 className="text-light text-center text-2xl">Sign Up </h2>

        <div className="flex justify-center">
          <span className="text-center"> - or -</span>
        </div>
        <form className="pt-6" onSubmit={handleSubmit}>
          <div className="group my-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="focus:outline-none 
                    border 
                       w-full  p-3
                        text-sm
                        rounded-r-md bg-gray-50
                      "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="group my-4">
            <input
              type="password"
              name="password"
              id="Password"
              placeholder="Password"
              className="focus:outline-none 
                       w-full  p-3
                        text-sm
                        rounded-r-md border bg-gray-50
                        "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="group my-4">
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm Password"
              className="focus:outline-none 
                       w-full  p-3
                        text-sm
                        rounded-r-md border bg-gray-50
                        "
              value={password_confirm}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Sign In"
            className="
                bg-sky-600 mb-5  mt-8 w-full py-3 text-white  text-sm uppercase
                font-bold rounded hover:cursor-pointer hover:bg-sky-800
                transition-colors"
          />
        </form>
        <nav className="text-center  md:flex md:justify-between text-light  items-center"></nav>
      </div>
    </>
  );
};

export default FormSignUp;
