import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import PropertyForm from "./PorpertyForm";
import PropertyList from "./PropertyList";
import styles from "./Seller.module.css";

function SellerView({ userData }) {
  let [reload, setReload] = useState(0);

  return (
    <div className={styles.topWrapper}>
      <Header showAuthButthon={true} />
      <div className={styles.body}>
        <PropertyForm userData={userData} reload={setReload} />
        <PropertyList
          userData={userData}
          reload={reload}
          doReload={setReload}
        />
      </div>
    </div>
  );
}

export default SellerView;
