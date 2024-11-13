import Png from "./assets/images/grad.png";
import image from "./assets/images/image.png";
import lock from "./assets/images/lock.png";
import google from "./assets/images/google.png";
import facebook from "./assets/images/facebook.png";
import { useState } from "react";
import axios from "axios";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const url = "http://139.59.11.142:4142/api/user/sign-in";

      const loginData = {
        email: username,
        password: password,
      };

      const response = await axios.post(url, loginData);

      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("userData", JSON.stringify(response.data.data));
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Invalid username or password");
    }
  };

  const handleMouseDown = () => {
    setShowPassword(true);
  };
  const handleMouseUp = () => {
    setShowPassword(false);
  };

  return (
    <div className="form-sec">
      <div className="formsec-2">
        <div className="gradlogo2">
          <img src={Png} alt="png" className="gradlogo" />
        </div>
        <div className="sigename">
          <h1 className="sigh1">Sign In</h1>
        </div>
        <form onSubmit={handleLogin} className="formiput">
          <div>
            <div className="emailiput">
              <img src={image} alt="image" className="emaillogo" />
              <input
                type="email"
                placeholder="Your email"
                className="emeput2"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div
              className="emailiput1"
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={lock} alt="lock" className="emaillogo2" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="emeput3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{
                  position: "absolute",
                  right: "10px",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                👁️
              </button>
            </div>
            <input
              type="submit"
              name="login"
              id="login"
              value="Log In"
              className="ilogin"
            />
          </div>
        </form>
        <div className="forlink">
          <a href="">Forget Password?</a>
        </div>
        <p className="background">
          <span>or</span>
        </p>
        <div className="inputbtn">
          <button className="gbtn">
            <img src={google} alt="google" className="glogo" />
            Google
          </button>
          <button className="fbtn">
            <img src={facebook} alt="facebook" className="flogo" />
            Facebook
          </button>
        </div>
        <div className="lline">
          Don’t have an account?<span className="lline2">Sign Up</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
