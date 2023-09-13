const express = require("express");
const cors = require("cors");
const axios = require("axios");
require('dotenv').config();

const app = express();

app.use(cors());

app.get("/getWeather", async (req, res) => {
  const inputLocation = req.query.location;
  const API_KEY = process.env.API_KEY;
  const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${inputLocation}&days=7&aqi=yes&alerts=yes`;

  try {
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching weather data" });
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
