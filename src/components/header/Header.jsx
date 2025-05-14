import React, { useContext } from "react";
import { Typography, Box, Button } from "@mui/material";
import { TaskContext } from "../../context/TaskContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Header = () => {
  const { theme, setTheme } = useContext(TaskContext);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: 600,
          textAlign: "center",
          margin: "20px 0",
          color: theme === "dark" ? "#ffffff" : "#000000",
        }}
      >
        Task Manager
      </Typography>
      <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "dark" ? (
          <DarkModeIcon sx={{ color: "white" }} />
        ) : (
          <LightModeIcon sx={{ color: "black" }} />
        )}
      </Button>
    </Box>
  );
};

export default Header;
