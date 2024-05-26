import { useState } from "react";
import {
  Modal,
  TextField,
  Button,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { IoMdCloseCircle } from "react-icons/io";
import styles from "./Modal.module.css";

function UpdatePropertyModal({ open, onClose, propertyData = {}, onUpdate }) {
  const [formData, setFormData] = useState({ ...propertyData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("in submit", onUpdate, onClose);
    onUpdate(formData);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className={styles.modalWrapper}>
        <IconButton
          aria-label="close"
          className={styles.closeButton}
          onClick={onClose}
        >
          <IoMdCloseCircle />
        </IconButton>
        <div className={styles.content}>
          <h2>Update Property</h2>
          <form onSubmit={handleSubmit}>
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
              type="number"
              value={formData.rent}
              onChange={handleChange}
              fullWidth
              required
            />
            <FormControl className={styles.inputText} fullWidth>
              <InputLabel>Furnished</InputLabel>
              <Select
                label="furnished"
                name="furnished"
                value={formData.furnished}
                onChange={handleChange}
                required
              >
                <MenuItem value="Fully Furnished">Fully Furnished</MenuItem>
                <MenuItem value="Semi Furnished">Semi Furnished</MenuItem>
                <MenuItem value="Unfurnished">Unfurnished</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth className={styles.inputText}>
              <InputLabel>Parking</InputLabel>
              <Select
                label="parking"
                name="parking"
                value={formData.parking}
                onChange={handleChange}
                required
              >
                <MenuItem value="2 Wheeler">2 Wheeler</MenuItem>
                <MenuItem value="4 Wheeler">4 Wheeler</MenuItem>
                <MenuItem value="None">None</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={styles.inputText} fullWidth>
              <InputLabel>BHK Type</InputLabel>
              <Select
                label="bhkType"
                name="bhkType"
                value={formData.bhkType}
                onChange={handleChange}
                required
              >
                <MenuItem value="1 BHK">1 BHK</MenuItem>
                <MenuItem value="2 BHK">2 BHK</MenuItem>
                <MenuItem value="3 BHK">3 BHK</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
            >
              Update Property
            </Button>
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default UpdatePropertyModal;
