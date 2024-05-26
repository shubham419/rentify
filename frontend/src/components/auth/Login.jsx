import { useState } from "react";
import styles from "./Auth.module.css";
import Header from "../header/Header";
import { SERVER } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const persistLogin = ({ token, userName, accountType, phone, email }) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userName", userName);
    localStorage.setItem("accountType", accountType);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${SERVER}/auth/login`, formData);

      console.log("handleSubmit ~ response:-", response);
      if (!response.data.isLoggedIn) {
        enqueueSnackbar("Invalid Credential", { variant: "error" });
      } else {
        enqueueSnackbar("Logged in successfully", { variant: "success" });
        persistLogin(response.data);
        navigate("/");
      }
    } catch (error) {
      if (e.response)
        enqueueSnackbar(e.response.data.message, { variant: "error" });
      else
        enqueueSnackbar(
          "Something went wrong. Check that the backend is running, reachable and returns valid JSON.",
          { variant: "error" }
        );
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <p>
            don't have account?{" "}
            <span
              onClick={() => {
                navigate("/register");
              }}
            >
              Create Account
            </span>
          </p>
          <div className={styles.formGroup}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
