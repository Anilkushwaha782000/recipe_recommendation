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
function EditProfileModal({ onClose, user, onSave }) {
    const [formData, setFormData] = useState(user);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFormData = { ...formData, id: user.id };
    onSave(updatedFormData);
      };
    return createPortal(
        <Box
            sx={{
                position: "fixed",
                inset: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
        >
            <Paper elevation={5} sx={{ p: 4, borderRadius: 3, width: "90%", maxWidth: 400, position: "relative" }}>
                <IconButton
                    sx={{ position: "absolute", top: 10, right: 10 }}
                    onClick={onClose}
                >
                     <CloseIcon />
                </IconButton>

                <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
                    Edit Profile
                </Typography>

                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Username"
                        name="username"
                        fullWidth
                        value={formData.username}
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        label="Email"
                        name="email"
                        fullWidth
                        value={formData.email}
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                        type="email"
                    />

                    <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                        <Button onClick={onClose} color="secondary" sx={{ mr: 1 }}>
                            Cancel
                        </Button>
                        <Button type="submit" color="primary" variant="contained">
                            Save
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Box>,
        document.getElementById("portal-root")
    )
}

export default EditProfileModal