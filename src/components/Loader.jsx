import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const Loader = () => {
  return (
    <div>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          bgcolor: "white",
          zIndex: 1300, // stays above all other elements
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress
          size={70}
          thickness={5}
          sx={{ color: "primary.main" }}
        />
        <Typography
          variant="h6"
          sx={{
            mt: 3,
            color: "primary.main",
            animation: "pulse 1.5s infinite",
          }}
        >
          Loading, please wait...
        </Typography>

        {/* Pulse animation */}
        <style>
          {`
              @keyframes pulse {
                0% { opacity: 0.6; }
                50% { opacity: 1; }
                100% { opacity: 0.6; }
              }
            `}
        </style>
      </Box>
    </div>
  );
};

export default Loader;
