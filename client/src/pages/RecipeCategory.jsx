import React, { useEffect, useState } from 'react'
import axios from "axios";
import categories from '../Mealdata/mealdata';
import { useSearchParams } from "react-router-dom";
import useAuthStore from '../store/userAuthStore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import config from '../config';
import { Grid, Card, CardContent, Typography, CardMedia, Box, CircularProgress, Skeleton, CardActions, IconButton } from "@mui/material";
function RecipeCategory() {
    const [searchParams] = useSearchParams();
    const user = useAuthStore(state => state.user)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const category = searchParams.get("category")
    const [meal, setMeal] = useState([]);
    const [favoritedItems, setFavoritedItems] = useState({meal});
    const getRandomMeal = (category) => {
        if (categories[category]) {
            const mealArray = categories[category]
            const randomMeal = mealArray[Math.floor(Math.random() * mealArray.length)];
            return randomMeal;
        }
        return "no meal found for provided category";
    }
    const mealname = getRandomMeal(category)
    useEffect(() => {
        const meallisting = async () => {
            try {
                const response = await axios.get(`${config.backend_URL}/api/v1/getcategorizedmeal?category=${mealname}&userId=${user.id}`)
                if (response.statusText == "OK") {
                    setMeal(response.data.recipes);
                    setLoading(false);
                }
            } catch (error) {
                console.log("There is some error while fetching the data" + error.message)
                setLoading(false);
            }
        }
        meallisting();
    }, [category])
    const handlesave = (id) => {
        setFavoritedItems((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
          }));
    }
    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Grid container spacing={4}>
                    {[...Array(6)].map((_, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Skeleton variant="rectangular" width="100%" height={200} />
                            <Skeleton width="60%" />
                            <Skeleton width="40%" />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        );
    }
    if (error) {
        return <Typography color="error" align="center">{error}</Typography>;
    }
    return (
        <Box p={2}>
            <Grid container spacing={4}>
                {meal?.map((mealitem) => {
                    const isFavorited = favoritedItems[mealitem.recipe_id];
                    return(
                    <Grid item xs={12} sm={6} md={4} key={mealitem.recipe_id}>
                        <Card
                            sx={{
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="120"
                                image={mealitem.image_url}
                                alt={mealitem.title}
                                sx={{ objectFit: "cover" }}
                            />
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: 600, textTransform: "capitalize" }}>
                                    {mealitem.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ textTransform: "capitalize" }}>
                                    {category}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton aria-label="add to favorites" onClick={() => handlesave(mealitem.recipe_id)}>
                                    {isFavorited ? (
                                        <FavoriteIcon size={24} style={{ color: 'red' }} />
                                    ) : (
                                        <FavoriteBorderIcon size={24} />
                                    )}
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                )})}
            </Grid>
        </Box>
    )
}

export default RecipeCategory