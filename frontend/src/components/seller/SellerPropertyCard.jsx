import React, { useState } from "react";
import styles from "../home/Property.module.css";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  IconButton,
  Button,
} from "@mui/material";
import { BsEyeFill } from "react-icons/bs";
import OwnerDetailModal from "../modal/OwnerDetailModal";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { SERVER } from "../../utils/constants";
import axios from "axios";
import UpdatePropertyModal from "../modal/UpdatePropertyModal";

function SellerPropertyCard({
  state,
  city,
  place,
  furnished,
  bedrooms,
  parking,
  rent,
  email,
  propertyID,
  doReload,
}) {
  const [updatePropertyModal, setUpdatePropertyModal] = useState(false);

  const deleteProperty = async () => {
    try {
      const url = `${SERVER}/seller/property/${email}/${propertyID}`;
      const res = await axios.delete(url);
      console.log(res);
      doReload((prv) => prv + 1);
      enqueueSnackbar("Property deleted successfully", { variant: "success" });
    } catch (error) {
      console.error("Error deleting property:", error);
      enqueueSnackbar("Failed to delete property", { variant: "error" });
    }
  };
  const updateProperty = async (updatedPropertyData) => {
    console.log("updateProperty ~ updatedPropertyData:-", updatedPropertyData)
    try {
      const url = `${SERVER}/seller/property/${email}/${propertyID}`;
      const res = await axios.put(url, updatedPropertyData);
      console.log(res);
      doReload((prv) => prv + 1);
      enqueueSnackbar("Property updated successfully", { variant: "success" });
    } catch (error) {
      console.error("Error updating property:", error);
      enqueueSnackbar("Failed to update property", { variant: "error" });
    }
  };

  return (
    <>
      <Card className={styles.card}>
        <CardContent className={styles.content}>
          <div className={styles.row}>
            <div className={styles.column}>
              <Typography variant="h6" component="div">
                {state}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                State
              </Typography>
            </div>
            <Divider
              orientation="vertical"
              flexItem
              className={styles.verticalDivider}
            />
            <div className={styles.column}>
              <Typography variant="h6" component="div">
                {city}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                City
              </Typography>
            </div>
            <Divider
              orientation="vertical"
              flexItem
              className={styles.verticalDivider}
            />
            <div className={styles.column}>
              <Typography variant="h6" component="div">
                {place}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Place
              </Typography>
            </div>
          </div>

          <Divider light className={styles.divider} />

          <div className={styles.row}>
            <div className={styles.column}>
              <Typography variant="h6" component="div">
                {furnished}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Furnished
              </Typography>
            </div>
            <Divider
              orientation="vertical"
              flexItem
              className={styles.verticalDivider}
            />
            <div className={styles.column}>
              <Typography variant="h6" component="div">
                {bedrooms}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                No. of Bedrooms
              </Typography>
            </div>
            <Divider
              orientation="vertical"
              flexItem
              className={styles.verticalDivider}
            />
            <div className={styles.column}>
              <Typography variant="h6" component="div">
                {parking}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Parking
              </Typography>
            </div>
          </div>

          <Divider light className={styles.divider} />
          <Divider light className={styles.divider} />

          <div className={styles.row}>
            <div className={styles.column}>
              <Typography variant="h6" component="div">
                ${rent} / month
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Rent
              </Typography>
            </div>
            <div className={styles.row}>
              <IconButton
                aria-label="edit"
                onClick={() => {
                  setUpdatePropertyModal(true);
                }}
              >
                <FaEdit color="#1976d2" />
              </IconButton>
              <IconButton
                aria-label="delete"
                onClick={() => {
                  if (confirm("Do you want to delet property"))
                    deleteProperty();
                }}
              >
                <MdDelete color="#1976d2" />
              </IconButton>
              <Button
                variant="outlined"
                startIcon={<BsEyeFill />}
                className={styles.interestedButton}
                onClick={() => {}}
              >
                Views
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <UpdatePropertyModal
        open={updatePropertyModal}
        onClose={() => {
          setUpdatePropertyModal(false);
        }}
        onUpdate={(formData) => {
            updateProperty(formData)            
        }}
        propertyData={{
          state,
          city,
          place,
          furnished,
          bhkType: bedrooms,
          parking,
          rent,
        }}
      />
    </>
  );
}

export default SellerPropertyCard;
