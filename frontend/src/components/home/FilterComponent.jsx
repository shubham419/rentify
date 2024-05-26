import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Slider,
  Button,
  Typography,
} from "@mui/material";
import styles from "./Filter.module.css";

function FilterComponent({ onFilterChange }) {
  const [furnished, setFurnished] = useState("");
  const [bedrooms, setBedrooms] = useState([]);
  const [parking, setParking] = useState([]);
  const [rentRange, setRentRange] = useState([0, 500000]);

  const handleFurnishedChange = (event) => {
    setFurnished(event.target.value);
    onFilterChange({
      furnished: event.target.value,
      bedrooms,
      parking,
      rentRange,
    });
  };

  const handleBedroomsChange = (event) => {
    const value = event.target.value;
    const newBedrooms = bedrooms.includes(value)
      ? bedrooms.filter((item) => item !== value)
      : [...bedrooms, value];
    setBedrooms(newBedrooms);
    onFilterChange({ furnished, bedrooms: newBedrooms, parking, rentRange });
  };

  const handleParkingChange = (event) => {
    const value = event.target.value;
    const newParking = parking.includes(value)
      ? parking.filter((item) => item !== value)
      : [...parking, value];
    setParking(newParking);
    onFilterChange({ furnished, bedrooms, parking: newParking, rentRange });
  };

  const handleRentRangeChange = (event, newValue) => {
    setRentRange(newValue);
    onFilterChange({ furnished, bedrooms, parking, rentRange: newValue });
  };

  const clearAllFilters = () => {
    setFurnished("");
    setBedrooms([]);
    setParking([]);
    setRentRange([0, 50000]);
    onFilterChange({
      furnished: "",
      bedrooms: [],
      parking: [],
      rentRange: [0, 5000],
    });
  };

  return (
    <div className={styles.filterContainer}>
      <FormControl fullWidth className={styles.formControl}>
        <InputLabel id="furnished-label">Furnishing</InputLabel>
        <Select
          labelId="furnished-label"
          value={furnished}
          onChange={handleFurnishedChange}
          label="Furnishing"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Fully Furnished"}>Fully Furnished</MenuItem>
          <MenuItem value={"Semi Furnished"}>Semi Furnished</MenuItem>
          <MenuItem value={"Unfurnished"}>Unfurnished</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth className={styles.formControl}>
        <Typography variant="subtitle2">BHK Type</Typography>
        <div className={styles.checkboxGroup}>
          <FormControlLabel
            control={
              <Checkbox
                checked={bedrooms.includes("1")}
                onChange={handleBedroomsChange}
                value={1}
                color="primary"
              />
            }
            label="1 BHK"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={bedrooms.includes("2")}
                onChange={handleBedroomsChange}
                value={2}
                color="primary"
              />
            }
            label="2 BHK"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={bedrooms.includes("3")}
                onChange={handleBedroomsChange}
                value={3}
                color="primary"
              />
            }
            label="3 BHK"
          />
        </div>
      </FormControl>

      <FormControl fullWidth className={styles.formControl}>
        <Typography variant="subtitle2">Parking</Typography>
        <div className={styles.checkboxGroup}>
          <FormControlLabel
            control={
              <Checkbox
                checked={parking.includes("2 Wheeler")}
                onChange={handleParkingChange}
                value={"2 Wheeler"}
                color="primary"
              />
            }
            label="2 Wheeler"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={parking.includes("4 Wheeler")}
                onChange={handleParkingChange}
                value={"4 Wheeler"}
                color="primary"
              />
            }
            label="4 Wheeler"
          />
        </div>
      </FormControl>

      <FormControl fullWidth className={styles.formControl}>
        <Typography variant="subtitle2">
          Rent Range: ₹ {rentRange[0]} to ₹ {rentRange[1]}
        </Typography>
        <Slider
          value={rentRange}
          onChange={handleRentRangeChange}
          valueLabelDisplay="auto"
          min={0}
          max={500000}
        />
      </FormControl>

      <Button
        variant="contained"
        color="secondary"
        onClick={clearAllFilters}
        className={styles.clearButton}
      >
        Clear All
      </Button>
    </div>
  );
}

export default FilterComponent;
