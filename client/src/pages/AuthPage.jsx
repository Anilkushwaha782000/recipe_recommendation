import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
  Tabs,
  Tab,
  Link,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import userAuthStore from "../store/userAuthStore";
function AuthPage() {
  const navigate=useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const{login}=userAuthStore();
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (activeTab === 0){
      try {
        const responsedata=await axios.post("http://localhost:5000/api/auth/login",{
          password,email
        },{withCredentials: true,
          headers:{
            'Content-Type': 'application/json',
          }
         })
         const {user,token}=responsedata.data;
      if(user&&token){
        login(user,token);
        navigate('/recipes');
      }
      } catch (error) {
        console.log("Error during signup:" + error);
      }
    }
    else {
      try {
        const response=await axios.post("http://localhost:5000/api/auth/signup",{
          username,password,email
        },{withCredentials: true,
          headers:{
            'Content-Type': 'application/json',
          }
         })
        console.log(response.data);

      } catch (error) {
        console.log("Error during signup:" + error);
      }
    }

  };

  return (
    <Container component="main" maxWidth="sm" sx={{ marginTop: 2, marginBottom: '8px' }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
          <Grid item xs={12} md={6}>
            <Box
              padding={4}
              sx={{
                background: "linear-gradient(135deg, #3e328f 0%, #fad0c4 100%)",
                borderRadius: 3,
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Box display="flex" justifyContent="center" marginBottom={2}>
                <Typography variant="h5" fontWeight="bold" sx={{ color: "#fff" }}>
                  {activeTab === 0 ? "Login to Your Recipe Finder" : "Create an Account"}
                </Typography>
              </Box>

              <Box display="flex" justifyContent="center" marginBottom={3}>
                <Typography variant="body1" sx={{ color: "#fff" }}>
                  {activeTab === 0
                    ? "Discover new recipes and save your favorites."
                    : "Join us and start exploring delicious recipes."}
                </Typography>
              </Box>

              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                TabIndicatorProps={{
                  style: { backgroundColor: "white" },
                }}
                textColor="inherit"
                centered
                sx={{
                  "& .MuiTab-root": { color: "#fff", fontWeight: "bold" },
                }}
              >
                <Tab label="Login" />
                <Tab label="Sign Up" />
              </Tabs>

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2} sx={{ marginTop: 2}}>
                  <Grid item xs={12}>
                    {activeTab === 1 && (
                      <TextField
                        fullWidth
                        label="Username"
                        variant="filled"
                        required
                        type="text"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        sx={{
                          background: "#fff",
                          borderRadius: 2,
                          marginBottom:2 
                        }}
                      />
                    )}
                    <TextField
                      fullWidth
                      label="Email Address"
                      variant="filled"
                      required
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      sx={{
                        background: "#fff",
                        borderRadius: 2,
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Password"
                      variant="filled"
                      required
                      type="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      sx={{
                        background: "#fff",
                        borderRadius: 2,
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="secondary"
                      type="submit"
                      sx={{
                        marginTop: 2,
                        borderRadius: 2,
                        padding: "10px",
                        fontWeight: "bold",
                        backgroundColor: "#ff758c",
                        "&:hover": { backgroundColor: "#ff5c75" },
                      }}
                    >
                      {activeTab === 0 ? "Log In" : "Sign Up"}
                    </Button>
                  </Grid>
                </Grid>
              </Box>

              <Box display="flex" justifyContent="center" marginTop={2}>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  {activeTab === 0 ? "Don't have an account? " : "Already have an account? "}
                  <Link
                    href="#"
                    fontWeight="bold"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(activeTab === 0 ? 1 : 0);
                    }}
                    sx={{ textDecoration: "underline", color: "#fff" }}
                  >
                    {activeTab === 0 ? "Sign up" : "Log in"}
                  </Link>
                </Typography>
              </Box>

              <Box display="flex" justifyContent="center" marginTop={3}>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  By signing up, you agree to our{" "}
                  <Link href="#" fontWeight="bold" sx={{ textDecoration: "underline", color: "#fff" }}>
                    Terms and Conditions
                  </Link>
                  .
                </Typography>
              </Box>
            </Box>
          </Grid>
      </Paper>
    </Container>
  );
}

export default AuthPage;
