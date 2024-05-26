import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import Header from "../header/Header";
import FilterComponent from "./FilterComponent";
import PropertyView from "./PropertyView";
import axios from "axios";
import { SERVER } from "../../utils/constants";

function BuyerView({ userData }) {
  const [data, setData] = useState([]);

  const [filters, setFilters] = useState({
    furnished: "",
    bedrooms: [],
    parking: [],
    rentRange: [0, 500000],
  });

  useEffect(() => {
    const fetchData = async () => {
      const url = `${SERVER}/property/get`;
      const res = await axios.get(url);
      console.log(res);
      setData(res.data);
    };
    fetchData();
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className={styles.wrapper}>
      <Header showAuthButthon={true} />
      <div className={styles.body}>
        <FilterComponent onFilterChange={handleFilterChange} />
        <PropertyView filters={filters} allData={data} userData={userData} />
      </div>
    </div>
  );
}

export default BuyerView;
