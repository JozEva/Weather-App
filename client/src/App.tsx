import "./App.css";
import { SideNavigation } from "./components/SideNavigation/SideNavigation";
import WeatherPage from "./pages/WeatherPage/WeatherPage";
import { Container } from "@mui/material";

function App() {
  return (
    <Container
      sx={{
        display: "flex",
        backgroundColor: "#F5F5F5",
        padding: "30px",
        margin: "100px auto",
        borderRadius: '20px'
      }}
    >
      <SideNavigation />
      <WeatherPage />
    </Container>
  );
}

export default App;
