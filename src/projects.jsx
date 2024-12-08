import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { keyframes } from "@emotion/react";

// Animation for fade-in
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

// Project data with background images
const projects = [
  {
    name: "GoRide Ride Hailing App",
    link: "https://go-rideng.netlify.app",
    description: "A seamless ride-hailing application connecting users to drivers in real-time.",
    backgroundImage: "../assets/goride.jpg", 
  },
  {
    name: "TaskMate Task Management App",
    link: "https://tasker-matec.netlify.app",
    description: "Manage your tasks effortlessly with a user-friendly task management app.",
    backgroundImage: "../assets/welcomeImagetas.jpg", 
  },
  {
    name: "U-Wealth Online Banking App",
    link: "https://uwealth-example.com",
    description: "A secure and modern platform for online banking and financial management.",
    backgroundImage: "../assets/banking.jpg", 
  },
  {
    name: "NetWorld Social Media App",
    link: "https://networld-example.com",
    description: "A dynamic social media platform for connecting with friends and communities.",
    backgroundImage: "../assets/socialmedia.jpg", 
  },
];

const ProjectsSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(145deg, #0f0c29, #302b63, #24243e)",
        color: "#fff",
        py: 8,
        px: 4,
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 6,
          fontWeight: "bold",
          textTransform: "uppercase",
          color: "#f50057", // Red color for header
          animation: `${fadeIn} 1s ease-out`,
        }}
      >
        Projects
      </Typography>

      {/* Projects Grid */}
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  borderRadius: "8px",
                  p: 4,
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  height: "300px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  backgroundImage: `url(${project.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  "&:hover": {
                    transform: "scale(1.05)", // Slight scale
                    backgroundColor: "rgba(255, 255, 255, 0.1)", // Slight overlay
                    opacity: 0.9,
                  },
                  animation: `${fadeIn} ${1 + index * 0.2}s ease-out`, // Staggered animation
                }}
              >
                {/* Overlay for better text visibility */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0, 0, 0, 0.5)", // Dark overlay
                    zIndex: 1,
                  }}
                />

                {/* Content */}
                <Box sx={{ position: "relative", zIndex: 2 }}>
                  {/* Project Name */}
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 1,
                      fontWeight: "bold",
                      color: "#f50057", // Red color for titles
                    }}
                  >
                    {project.name}
                  </Typography>

                  {/* Project Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      lineHeight: 1.5,
                      color: "#fff",
                    }}
                  >
                    {project.description}
                  </Typography>
                </Box>
              </Box>
            </a>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsSection;
