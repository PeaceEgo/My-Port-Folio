import React from "react";
import { Box, CircularProgress, Typography, Grid } from "@mui/material";
import { keyframes } from "@emotion/react"; // For animations

// Animation for fade-in
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

// Skills data
const skills = [
  { name: "CSS", level: 8 },
  { name: "Tailwind", level: 7 },
  { name: "JS", level: 9 },
  { name: "React", level: 9 },
  { name: "MUI", level: 7 },
  { name: "Node.js", level: 7 },
  { name: "Express", level: 8 },
  { name: "Redux", level: 8 },
  { name: "WebSocket", level: 8 },
  { name: "MongoDb", level: 8 },
];

const Skills = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(145deg, #0f0c29, #302b63, #24243e)", // Matching gradient
        color: "#fff",
        textAlign: "center",
        padding: "2rem 1rem",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        sx={{
          color: "#f50057", // Pink header color
          mb: 4,
          fontWeight: "bold",
          textTransform: "uppercase",
          animation: `${fadeIn} 1s ease-out`, // Fade-in animation
        }}
      >
        My Skills
      </Typography>

      {/* Skills Grid */}
      <Grid container spacing={4} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={6} md={3} key={index}>
            <Box
              sx={{
                position: "relative",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "rgba(255, 255, 255, 0.1)", 
                borderRadius: "8px",
                p: 2,
                animation: `${fadeIn} ${1 + index * 0.2}s ease-out`, 
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              {/* Circular Progress */}
              <CircularProgress
                variant="determinate"
                value={(skill.level / 10) * 100}
                size={100}
                thickness={5}
                sx={{
                  color: "#f50057", // Pink color
                  background: "linear-gradient(145deg, #0f0c29, #302b63, #24243e)",
                  borderRadius: "50%",
                  "& circle": { strokeLinecap: "round" },
                }}
              />
              {/* Skill Details */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold", color: "#ffffff" }}
                >
                  {skill.level * 10}%
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", color: "#ffffff", mt: 1 }}
                >
                  {skill.name}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
