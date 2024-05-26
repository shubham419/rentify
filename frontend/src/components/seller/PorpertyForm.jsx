import React, { useState, useEffect } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
} from "@mui/material";
import styles from "./Seller.module.css";
import { useSnackbar } from "notistack";
import axios from "axios";
import { SERVER } from "../../utils/constants";

function PropertyForm({ userData, reload }) {
  const { enqueueSnackbar } = useSnackbar();

  const [formData, setFormData] = useState({
    state: "",
    city: "",
    place: "",
    rent: "",
    furnished: "",
    parking: "",
    bhkType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetForm = () => {
    setFormData({
      state: "",
      city: "",
      place: "",
      rent: "",
      furnished: "",
      parking: "",
      bhkType: "",
    });
  };

  const listProperty = async (data) => {
    try {
      if (!userData) throw "Error in finding user";
      const result = await axios.post(`${SERVER}/property/post`, {
        ...data,
        phone: userData.phone,
        firstName: userData.firstName,
        email: userData.email,
      });
      console.log("postPropertyData ~ result:-", result);
      if (result.status === 201) {
        enqueueSnackbar("Property Listed Successfully", { variant: "success" });
        reload((prv) => prv + 1);
      }
    } catch (error) {
      console.log(error);
      enqueueSnackbar("error in listing property, please try again", {
        variant: "error",
      });
    }
  };

  const postPropertyData = async (data) => {
    try {
      if (!userData) throw "Error in finding user";
      const result = await axios.post(`${SERVER}/seller/addproperty`, {
        ...userData,
        property: { ...data, phone: userData.phone },
      });

      console.log("postPropertyData ~ result:-", result);
      if (result.status === 201) {
        enqueueSnackbar("Property Added Successfully", { variant: "success" });
        resetForm();
        reload((prv) => prv + 1);
      }
    } catch (error) {
      console.log(error);
      enqueueSnackbar("error occoured, please try again", { variant: "error" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = Object.values(formData);
    const allFieldsFilled = formValues.every((value) => value !== "");
    if (allFieldsFilled) {
      postPropertyData(formData);
      listProperty(formData);
    } else {
      enqueueSnackbar("Please fill in all fields before submitting.", {
        variant: "warning",
      });
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <TextField
          className={styles.inputText}
          name="state"
          label="State"
          value={formData.state}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          className={styles.inputText}
          name="city"
          label="City"
          value={formData.city}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          className={styles.inputText}
          name="place"
          label="Place"
          value={formData.place}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          className={styles.inputText}
          name="rent"
          label="Rent"
          value={formData.rent}
          onChange={handleChange}
          type="number"
          fullWidth
          required
        />

        <FormControl fullWidth required>
          <InputLabel>Furnished</InputLabel>
          <Select
            label="furnished"
            name="furnished"
            value={formData.furnished}
            onChange={handleChange}
          >
            <MenuItem value="">Select Furnished</MenuItem>
            <MenuItem value="Fully Furnished">Fully Furnished</MenuItem>
            <MenuItem value="Semi Furnished">Semi Furnished</MenuItem>
            <MenuItem value="Unfurnished">Unfurnished</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth required>
          <Typography variant="subtitle2">BHK Type</Typography>
          <div className={styles.checkboxGroup}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.bhkType === "1 BHK"}
                  onChange={handleChange}
                  name="bhkType"
                  value="1 BHK"
                />
              }
              label="1 BHK"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.bhkType === "2 BHK"}
                  onChange={handleChange}
                  name="bhkType"
                  value="2 BHK"
                />
              }
              label="2 BHK"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.bhkType === "3 BHK"}
                  onChange={handleChange}
                  name="bhkType"
                  value="3 BHK"
                />
              }
              label="3 BHK"
            />
          </div>
        </FormControl>

        <FormControl fullWidth required>
          <Typography variant="subtitle2">Parking</Typography>
          <div className={styles.checkboxGroup}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.parking === "2 Wheeler"}
                  onChange={handleChange}
                  name="parking"
                  value="2 Wheeler"
                />
              }
              label="2 Wheeler"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.parking === "4 Wheeler"}
                  onChange={handleChange}
                  name="parking"
                  value="4 Wheeler"
                />
              }
              label="4 Wheeler"
            />
          </div>
        </FormControl>

        <Button type="submit" variant="contained" color="secondary" fullWidth>
          Add Property
        </Button>
      </form>
    </div>
  );
}

export default PropertyForm;
