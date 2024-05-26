import { useEffect, useState } from "react";
import BuyerView from "./BuyerView";
import SellerView from "../seller/SellerView";

function Home() {
  let [userData, setUserData] = useState("");
  console.log("Home ~ userData:-", userData);

  useEffect(() => {
    const firstName = localStorage.getItem("userName");
    const phone = localStorage.getItem("phone");
    const email = localStorage.getItem("email");
    const accountType = localStorage.getItem("accountType");

    if (email && firstName && phone && accountType)
      setUserData({ firstName, email, phone, accountType });
    else setUserData("");
  }, []);

  return (
    <div>
      {userData.accountType == "seller" ? (
        <SellerView userData={userData} />
      ) : (
        <BuyerView userData={userData} />
      )}
    </div>
  );
}

export default Home;
