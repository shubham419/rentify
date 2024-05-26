import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Button, Stack, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import Box from "@mui/material/Box";

function Header({ showAuthButthon }) {
  const navigate = useNavigate();
  let [user, setUser] = useState("");
  useEffect(() => {
    const username = localStorage.getItem("userName");
    if (username) setUser(username);
    else setUser("");
  }, []);

  return (
    <div className={styles.wrapper}>
      <img src="src/assets/rentify_logo.png" alt="rentify-logo" />
      <div className={styles.tagLine}>
        <h1>RENTIFY</h1>
        <p>The Way You Want</p>
      </div>

      {!showAuthButthon ? (
        <>
          <Stack>
            <Button
              className="explore-button"
              startIcon={<MdKeyboardBackspace />}
              variant="text"
              onClick={() => {
                navigate("/");
              }}
            >
              Back to explore
            </Button>
          </Stack>
        </>
      ) : user ? (
        <>
          <Box display="flex" alignItems="center">
            <Avatar src="avatar.png" alt={user} />
            <p>{user}</p>
            <Button
              variant="text"
              onClick={() => {
                localStorage.removeItem("userName");
                localStorage.removeItem("token");
                localStorage.removeItem("accountType");
                localStorage.removeItem("email");
                localStorage.removeItem("phone");
                setUser("");
                navigate("/login");
              }}
            >
              LOGOUT
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Stack direction="row" spacing={2}>
            <Button
              className="button"
              variant="text"
              onClick={() => {
                navigate("/login");
              }}
            >
              LOGIN
            </Button>
            <Button
              className="button"
              variant="contained"
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </Button>
          </Stack>
        </>
      )}
    </div>
  );
}

export default Header;
