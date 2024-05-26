import { useState } from "react";
import styles from "./Property.module.css";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  IconButton,
  Button,
} from "@mui/material";
import { FaHeart } from "react-icons/fa";
import OwnerDetailModal from "../modal/OwnerDetailModal";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { BiSolidLike } from "react-icons/bi";

function PropertyCard({
  state,
  city,
  place,
  furnished,
  bedrooms,
  parking,
  rent,
  email,
  phone,
  firstName,
  userData,
}) {
  console.log("userData:-", userData);
  const [ownerDetailModal, setOwnerDetailModal] = useState(false);
  const navigate = useNavigate();

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
                Rent
              </Typography>
              <Typography variant="body2" color="textSecondary">
                ${rent} / month
              </Typography>
            </div>
            <div className={styles.row}>
              <IconButton aria-label="like">
                <BiSolidLike color="#1976d2" />
              </IconButton>
              <Button
                variant="outlined"
                startIcon={<FaHeart />}
                className={styles.interestedButton}
                onClick={() => {
                  if (userData) {
                    setOwnerDetailModal(true);
                  } else {
                    enqueueSnackbar("please login to see user details", {
                      variant: "warning",
                    });
                    navigate("/login");
                  }
                }}
              >
                Interested
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <OwnerDetailModal
        open={ownerDetailModal}
        onClose={() => {
          setOwnerDetailModal(false);
        }}
        ownerData={{ email, phone, firstName }}
      />
    </>
  );
}

export default PropertyCard;
