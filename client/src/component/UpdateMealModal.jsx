import React,{useState} from 'react'
import { createPortal } from 'react-dom'
import {
    TextField,
    Button,
    Paper,
    Box,
    Typography,
    IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function UpdateMealModal({onClose,meal,mealdata}) {
    const [formData, setFormData] = useState(mealdata[0]);
    console.log("mealdata",mealdata)
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    const handleSubmit = (e) => {
    e.preventDefault();
      };
    return createPortal(
        <Box
            sx={{
                position: "fixed",
                inset: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex:"10",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
        >
            <Paper elevation={5} sx={{ p: 4, borderRadius: 3, width: "90%", maxWidth: 400, position: "relative" }}>
                <IconButton onClick={onClose}
                    sx={{ position: "absolute", top: 10, right: 10 }}
                >
                     <CloseIcon  />
                </IconButton>

                <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
                    Edit Profile
                </Typography>

                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Meal Name"
                        name="mealname"
                        fullWidth
                        value={formData.mealname}
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        label="Meal type"
                        name="mealtype"
                        fullWidth
                        value={formData.mealtype}
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                        type="text"
                    />
                    <TextField
                        label="Day"
                        name="day"
                        fullWidth
                        value={formData.day}
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                        type="text"
                    />
                    <TextField
                        label="Calories"
                        name="calories"
                        fullWidth
                        value={formData.calories}
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                        type="text"
                    />

                    <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                        <Button  color="secondary" sx={{ mr: 1 }} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button type="submit" color="primary" variant="contained">
                            Save
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Box>,
        document.getElementById("meal-root")
  )
}

export default UpdateMealModal