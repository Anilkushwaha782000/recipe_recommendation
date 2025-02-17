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
  Container } from "@mui/material";
import { motion } from "framer-motion";
import useAuthStore from "../store/userAuthStore";
import { useEffect, useState } from "react";
import axios from "axios";
function MealSummary({ mealPlan }) {
  const [mealtype, setMealType] = useState("");
  const [day, setDay] = useState("");
  const user=useAuthStore((state)=>state.user)
  const [mealData, setMealData] = useState([])
  useEffect(()=>{
    if(!user)return
    const fetchMealdata=async()=>{
      try {
        const response=await axios.get(`http://localhost:5000/api/v1/getusermeal?userId=${user.id}`)
        setMealData(response.data)
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
            <MenuItem value="Tuesday">Friday</MenuItem>
            <MenuItem value="Wednesday">Saturday</MenuItem>
            <MenuItem value="Thursday">Sunday</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Meal Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Meal Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Day</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mealData&& 
              filtermealdata.map((meal) => (
                <TableRow key={meal.id}>
                  <TableCell>{meal.mealname}</TableCell>
                  <TableCell>{meal.mealtype}</TableCell>
                  <TableCell>{meal.day}</TableCell>
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
