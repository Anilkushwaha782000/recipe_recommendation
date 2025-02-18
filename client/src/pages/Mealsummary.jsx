import React from "react";
import {   Box,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Container,Checkbox,IconButton} from "@mui/material";
  import DeleteIcon from "@mui/icons-material/Delete";
  import UpdateMealModal from "../component/UpdateMealModal";
import EditIcon from "@mui/icons-material/Edit";
import { motion } from "framer-motion";
import useAuthStore from "../store/userAuthStore";
import { useEffect, useState } from "react";
import axios from "axios";
function MealSummary({ mealPlan }) {
  const [mealtype, setMealType] = useState("");
  const [day, setDay] = useState("");
  const user=useAuthStore((state)=>state.user)
  const [mealData, setMealData] = useState([])
  const [selectedMeal, setSelectedMeal] = useState(null);
  const[sinlemealdata,setSingleMealData]=useState([]);
  const[isEditing,setIsediting]=useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const handleCheckboxChange = (id) => {
    setSelectedMeal(selectedMeal === id ? null : id);
  };
  const handleClose=()=>{
    setIsediting(false);
  }
  const handleDelete = (id) => {
    console.log(`Delete meal with ID: ${id}`);
    setIsDeleting(!isDeleting)
  };

  const handleEdit = (id) => {
    console.log(`Edit meal with ID: ${id}`);
    const singlemeal=mealData.filter((meal)=>meal._id==id)
    setSingleMealData(singlemeal);
    setIsediting(!isEditing)
  };
  useEffect(()=>{
    if(!user)return
    const fetchMealdata=async()=>{
      try {
        const response=await axios.get(`http://localhost:5000/api/v1/getusermeal?userId=${user.id}`)
        setMealData(response.data)
        console.log("response.data  mealsummary",response.data)
      } catch (error) {
        console.error("Error fetching meals:", error.message); 
      }
    }
    fetchMealdata();
  },[user])
  const filtermealdata=mealData.filter(
    (meal) =>
      (mealtype === "" || meal.mealtype === mealtype) &&
      (day === "" || meal.day === day)
  );
  return (
    <Container maxWidth="" sx={{ mt: 3, pb: 5 }}>
      <Typography variant={"h4"} sx={{alignItems:"center",justifyContent:"center",display:"flex"}}>Your weekly Summary</Typography>
      <Box sx={{ p: 3 }}>
        {isEditing&&(
          <UpdateMealModal onClose={handleClose} meal={selectedMeal} mealdata={sinlemealdata}/>
        )}
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <FormControl fullWidth>
          <InputLabel>Meal Type</InputLabel>
          <Select
            value={mealtype}
            onChange={(e) => setMealType(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Breakfast">Breakfast</MenuItem>
            <MenuItem value="Lunch">Lunch</MenuItem>
            <MenuItem value="Dinner">Dinner</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Day</InputLabel>
          <Select value={day} onChange={(e) => setDay(e.target.value)}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Monday">Monday</MenuItem>
            <MenuItem value="Tuesday">Tuesday</MenuItem>
            <MenuItem value="Wednesday">Wednesday</MenuItem>
            <MenuItem value="Thursday">Thursday</MenuItem>
            <MenuItem value="Friday">Friday</MenuItem>
            <MenuItem value="Saturday">Saturday</MenuItem>
            <MenuItem value="Sunday">Sunday</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Select</TableCell>
              <TableCell>Meal Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Day</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mealData&& 
              filtermealdata.map((meal) => (
                <TableRow key={meal._id}>
                  <TableCell>
                  <Checkbox
                    checked={selectedMeal === meal._id}
                    onChange={() => handleCheckboxChange(meal._id)}
                  />
                </TableCell>
                  <TableCell>{meal.mealname}</TableCell>
                  <TableCell>{meal.mealtype}</TableCell>
                  <TableCell>{meal.day}</TableCell>
                  <TableCell>
                  {selectedMeal === meal._id && (
                    <>
                      <IconButton onClick={() => handleEdit(meal._id)} color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(meal._id)} color="error">
                        <DeleteIcon />
                      </IconButton>
                    </>
                  )}
                </TableCell>
                </TableRow>
              ))}
              {filtermealdata.length === 0 && (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    No meals found
                  </TableCell>
                </TableRow>
              )
            }
            
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </Container>
  );
}

export default MealSummary;
