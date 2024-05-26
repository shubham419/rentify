import { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import styles from "./Property.module.css";
import LinearProgress from "@mui/material/LinearProgress";

function PropertyView({ filters, allData = [], userData }) {
  console.log("PropertyView ~ filters:-", filters);
  console.log("PropertyView ~ allData:-", allData);
  const [filteredData, setFilteredData] = useState(allData);
  console.log("PropertyView ~ filteredData:-", filteredData);

  useEffect(() => {
    let data = allData;

    if (filters.furnished) {
      data = data.filter(
        (property) => property.furnished === filters.furnished
      );
    }
    if (filters.bedrooms.length > 0) {
      data = data.filter((property) =>
        filters.bedrooms.includes("" + property.bedrooms)
      );
    }
    if (filters.parking.length > 0) {
      data = data.filter((property) =>
        filters.parking.includes(property.parking)
      );
    }
    data = data.filter(
      (property) =>
        property.rent >= filters.rentRange[0] &&
        property.rent <= filters.rentRange[1]
    );

    setFilteredData(data);
  }, [filters, allData]);

  return (
    <div className={styles.wrapper}>
      {filteredData.length ? (
        filteredData.map((property, index) => (
          <PropertyCard
            key={index}
            state={property.state}
            city={property.city}
            place={property.place}
            furnished={property.furnished}
            bedrooms={property.bhkType}
            parking={property.parking}
            rent={property.rent}
            email={property.email}
            phone={property.phone}
            firstName={property.firstName}
            userData={userData}
          />
        ))
      ) : (
        <div>
          <h1>NO DATA AVAILABLE...</h1>
          <LinearProgress />
        </div>
      )}
    </div>
  );
}

export default PropertyView;
