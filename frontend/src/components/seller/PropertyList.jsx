import React, { useEffect, useState } from "react";
import styles from "./Seller.module.css";
import axios from "axios";
import { SERVER } from "../../utils/constants";
import SellerPropertyCard from "./SellerPropertyCard";
import LinearProgress from "@mui/material/LinearProgress";

function PropertyList({ userData, reload, doReload }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `${SERVER}/seller/property?email=${userData.email}`;
      const res = await axios.get(url);
      console.log(res);
      setData(res.data);
    };
    if (userData) fetchData();
  }, [userData, reload]);

  return (
    <div className={styles.wrapper}>
      {data.length ? (
        data.map((property, index) => (
          <SellerPropertyCard
            key={property._id}
            state={property.state}
            city={property.city}
            place={property.place}
            furnished={property.furnished}
            bedrooms={property.bhkType}
            parking={property.parking}
            rent={property.rent}
            email={userData.email}
            propertyID={property._id}
            doReload={doReload}
          />
        ))
      ) : (
        <div className={styles.noData}>
          <h1>NO DATA AVAILABLE...</h1>
          <LinearProgress />
        </div>
      )}
    </div>
  );
}

export default PropertyList;
