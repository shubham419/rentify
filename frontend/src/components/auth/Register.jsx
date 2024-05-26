import { useState } from "react";
import styles from "./Auth.module.css";
import Header from "../header/Header";
import axios from "axios";
import { useSnackbar } from "notistack";
import { SERVER } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

function Register() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    accountType: "buyer",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const result = await axios.post(`${SERVER}/auth/signup`, formData);
      if (result.status === 200) {
        enqueueSnackbar("Account Created Successfully", { variant: "success" });
      }
      navigate("/login");
    } catch (error) {
      if (error) {
        console.log(error);
        enqueueSnackbar(`Error: ${error.message}`, { variant: "error" });
      }
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
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
          <div className={styles.formGroup}>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <select
              name="accountType"
              value={formData.accountType}
              onChange={handleChange}
            >
              <option value="buyer">Buyer Account</option>
              <option value="seller">Seller Account</option>
            </select>
          </div>
          <p>
            already have account?{" "}
            <span
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </span>
          </p>

          <div className={styles.formGroup}>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
