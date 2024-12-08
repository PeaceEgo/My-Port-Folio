import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { useInView } from "react-intersection-observer"; // Import useInView hook
import { keyframes } from "@emotion/react"; // For animations

// Keyframe animation to slide in from top with scale
const slideInFromTop = keyframes`
  0% { opacity: 0; transform: translateY(-100px) scale(0.8); }
  50% { opacity: 0.5; transform: translateY(-50px) scale(1.1); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;

// Keyframe animation to slide in from left with bounce
const slideInFromLeft = keyframes`
  0% { opacity: 0; transform: translateX(-150px); }
  80% { transform: translateX(10px); }
  100% { opacity: 1; transform: translateX(0); }
`;

// Keyframe animation to slide in from right with bounce
const slideInFromRight = keyframes`
  0% { opacity: 0; transform: translateX(150px); }
  80% { transform: translateX(-10px); }
  100% { opacity: 1; transform: translateX(0); }
`;

const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Ensure animations replay when the section is revisited
    threshold: 0.2, // Trigger animations when 20% of the section is in view
  });

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(145deg, #0f0c29, #302b63, #24243e)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        padding: "2rem",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "15%",
          width: { xs: "150px", lg: "300px" },
          height: { xs: "150px", lg: "300px" },
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          filter: "blur(100px)",
        }}
      />
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            animation: inView ? `${slideInFromTop} 2s ease-in-out` : "none",
          }}
        >
          {/* Animated h4 */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "2rem", sm: "3rem" },
              animation: inView ? `${slideInFromTop} 2s ease-in-out` : "none",
            }}
          >
            FULL-STACK DEVELOPER
          </Typography>

          {/* Animated h2 */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
              animation: inView ? `${slideInFromTop} 3s ease-in-out` : "none",
            }}
          >
            NNOROM PEACE
          </Typography>

          {/* Animated body text */}
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              borderLeft: "3px solid #6200ea",
              paddingLeft: "1rem",
              animation: inView ? `${slideInFromLeft} 3s ease-out` : "none",
            }}
          >
            I'm a full-stack developer with expertise in building modern,
            scalable web and Mobile applications.
          </Typography>

          {/* Animated Button */}
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            sx={{
              backgroundColor: "#f50057",
              padding: "10px 20px",
              fontSize: "1rem",
              animation: inView ? `${slideInFromRight} 3s ease-out` : "none",
              "&:hover": { backgroundColor: "#ff4081", transform: "scale(1.05)" },
            }}
          >
            Download Resume
          </Button>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            animation: inView ? `${slideInFromRight} 2s ease-in-out` : "none",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "400px",
              margin: "auto",
              overflow: "hidden",
              border: "10px solid",
              borderImage: "linear-gradient(145deg, #0f0c29, #302b63, #24243e) 1",
              padding: "10px",
            }}
          >
            <img
              src="./assets/Profilep.jpg"
              alt="Profile Picture"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
