import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import WebIcon from "@mui/icons-material/Web";
import CodeIcon from "@mui/icons-material/Code";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useInView } from "react-intersection-observer"; // Import useInView
import { keyframes } from "@emotion/react"; // Animations

// Slide-in from bottom animation
const slideInFromBottom = keyframes`
  0% { opacity: 0; transform: translateY(50px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const services = [
  {
    icon: <ComputerIcon sx={{ fontSize: "3rem", color: "#f50057" }} />,
    title: "IT SUPPORT",
    description: "Monitoring and maintaining computer systems and networks.",
  },
  {
    icon: <WebIcon sx={{ fontSize: "3rem", color: "#f50057" }} />,
    title: "WEB DESIGN",
    description: "Designing visually appealing layouts using modern frameworks.",
  },
  {
    icon: <CodeIcon sx={{ fontSize: "3rem", color: "#f50057" }} />,
    title: "WEB DEVELOPMENT",
    description: "Building scalable and secure web applications.",
  },
  {
    icon: <LightbulbIcon sx={{ fontSize: "3rem", color: "#f50057" }} />,
    title: "BRIGHT IDEAS",
    description: "Providing innovative solutions for optimization and growth.",
  },
  {
    icon: <AppSettingsAltIcon sx={{ fontSize: "3rem", color: "#f50057" }} />,
    title: "APP DEVELOPMENT",
    description: "Creating web and mobile applications like e-commerce.",
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: "3rem", color: "#f50057" }} />,
    title: "SQA",
    description: "Ensuring quality and performance through detailed testing.",
  },
];

const ServicesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Replay animations on revisit
    threshold: 0.2, // Trigger animation when 20% of section is visible
  });

  return (
    <Box
      ref={ref}
      sx={{
        background: "linear-gradient(145deg, #0f0c29, #302b63, #24243e)",
        color: "#fff",
        py: 8,
        px: 4,
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 6,
          fontWeight: "bold",
          textTransform: "uppercase",
          color: "#f50057",
          animation: inView ? `${slideInFromBottom} 1s ease-out` : "none",
        }}
      >
        What Can I Do?
      </Typography>

      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                textAlign: "center",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                p: 4,
                transition: "transform 0.3s ease",
                animation: inView
                  ? `${slideInFromBottom} ${1 + index * 0.2}s ease-out`
                  : "none", // Staggered animations
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <Box sx={{ mb: 2 }}>{service.icon}</Box>
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: "bold", color: "#f50057" }}
              >
                {service.title}
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                {service.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
