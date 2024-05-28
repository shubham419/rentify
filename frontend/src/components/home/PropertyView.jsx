import { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import styles from "./Property.module.css";
import LinearProgress from "@mui/material/LinearProgress";
import { Button } from "@mui/material";
import { useSnackbar } from "notistack";

function PropertyView({ filters, allData = [], userData }) {
  const [filteredData, setFilteredData] = useState(allData);

  const [pageState, setPageState] = useState([0, 1]);
  const [pagedData, setPagedData] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  function handlePaginition(e) {
    console.log("PropertyView ~ pageState:-", pageState)
    if (e.target.textContent == "Next") {
      const hasData = pageState[0] + 6 < filteredData.length; 
      if (hasData) {
        handlePagingData(pageState[0] + 6);
        setPageState([pageState[0] + 6, pageState[1] + 1]);
      }else {
        enqueueSnackbar("No next page available. all data is on current page.", {variant: "info"})
      }
    } else {
      if (pageState[1] > 1) {
        handlePagingData(pageState[0] - 6);
        setPageState([pageState[0] - 6, pageState[1] - 1]);
      }else {
        enqueueSnackbar("No previous page available. all data is on current page.", {variant: "info"})
      }
    }
  }

  const handlePagingData = (indexNo, data = []) => {
    const newData = [];
    const prvData = data.length ? data : filteredData;

    for (let i = indexNo; i < indexNo + 6; i++) {
      if (prvData[i]) newData.push(prvData[i]);
    }
    setPagedData(newData);
  };

  

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
    handlePagingData(0, data);
    setFilteredData(data);
    setPageState([0,1])
  }, [filters, allData]);

  return (
    <div>
      {pagedData.length ? (
        <div>
          <div className={styles.wrapper}>
            {pagedData.map((property, index) => (
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
            ))}
          </div>
          <div className={styles.paginition}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handlePaginition}
            >
              Previous
            </Button>
            <span className={styles.pagenumber}>{pageState[1]}</span>
            <Button
              variant="contained"
              color="secondary"
              onClick={handlePaginition}
            >
              Next
            </Button>
          </div>
        </div>
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
