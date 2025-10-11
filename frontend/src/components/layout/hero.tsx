import React from "react";
import { Typography, Container, Box, useTheme, Button } from "@mui/material";
import heroImage from "../../assets/images/hero-image.png";

export default function Hero() {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default, py: 4 }}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: 4,
        }}
      >
        {/* Left Section — Text */}
        <Box sx={{ flex: 1 , 
            gap: 4
        }}
        >
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Upgrade Your Tech Game
          </Typography>
          <Typography variant="h6">
            Shop the latest phones and laptops at unbeatable prices.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2 }}
          >
            Shop Now
          </Button>
        </Box>

        {/* Right Section — Hero Image */}
        <Box
          sx={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={heroImage}
            alt="tech-products"
            sx={{
              width: "100%",
              maxWidth: 750,
              borderRadius: 2,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}