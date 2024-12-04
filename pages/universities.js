// Import necessary components
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SoundWaveAnimation from "./components/SoundWaveAnimation";
import React, { useEffect } from "react";
import CalendarIcon from "@mui/icons-material/CalendarToday";
import BarChartIcon from "@mui/icons-material/BarChart";
import CheckmarkIcon from "@mui/icons-material/CheckCircle";
import { useRouter } from "next/router";

// Styled component for alternating section colors
const Section = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "bgColor" && prop !== "textColor" && prop !== "minHeight",
})(({ theme, bgColor, textColor, minHeight }) => ({
  backgroundColor: bgColor,
  color: textColor,
  display: "flex",
  alignItems: "center",
  minHeight: minHeight || "100vh",
  padding: theme.spacing(8),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4),
  },
}));

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("isRecruitingMode");
      if (
        savedMode !== null &&
        JSON.parse(savedMode) === false &&
        router.pathname === "/universities"
      ) {
        // Redirect to / if toggle is off and we're on the wrong page
        router.replace("/");
      }
    }
  }, [router]);
  // Realistic metrics for university/college career services
  const statsData = [
    {
      icon: <CalendarIcon sx={{ fontSize: "3rem", color: "#000000" }} />, // Flipped color
      initialValue: 90,
      finalValue: 60,
      label: "Days to Job Offer Post-Graduation",
    },
    {
      icon: <BarChartIcon sx={{ fontSize: "3rem", color: "#000000" }} />, // Flipped color
      initialValue: 1200,
      finalValue: 800,
      label: "Career Services Cost per Student",
      prefix: "$",
    },
    {
      icon: <CheckmarkIcon sx={{ fontSize: "3rem", color: "#000000" }} />, // Flipped color
      initialValue: 75,
      finalValue: 85,
      label: "Graduate Placement Rate",
      suffix: "%",
    },
  ];

  // StatCard with flipped section colors
  function StatCard({ icon, initialValue, finalValue, label, prefix, suffix }) {
    const [value, setValue] = React.useState(initialValue);

    React.useEffect(() => {
      let startTime;
      const duration = 3000;

      function animate(time) {
        if (!startTime) startTime = time;
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue =
          initialValue + (finalValue - initialValue) * progress;

        setValue(Math.round(currentValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setTimeout(() => {
            startTime = null;
            requestAnimationFrame(animate);
          }, 3000);
        }
      }

      requestAnimationFrame(animate);
      return () => {
        startTime = null;
      };
    }, [initialValue, finalValue]);

    return (
      <Box
        sx={{
          backgroundColor: "#ffffff", // Flipped to white
          color: "#000000", // Flipped to black
          padding: "24px",
          textAlign: "center",
          padding: "8px 0",
          flex: 1,
          margin: 0,
        }}
      >
        {icon}
        <Typography variant="h3" sx={{ fontWeight: "bold", fontSize: "3rem" }}>
          {prefix}
          {value}
          {suffix}
        </Typography>
        <Typography
          variant="h6"
          sx={{ marginTop: "8px", fontSize: "0.875rem" }}
        >
          {label}
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <NavBar />

      {/* Hero Section - Black background, white text */}
      <Section bgColor="#ffffff" textColor="#000000" minHeight="100vh">
        <Container maxWidth="xl">
          <Grid container alignItems="center" spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: "left", mt: 0 }}>
                <Typography
                  variant="h1"
                  gutterBottom
                  sx={{
                    fontSize: "clamp(2rem, 5vw, 4rem)",
                    fontWeight: "bold",
                    lineHeight: "1.2",
                    marginBottom: "20px",
                    maxWidth: "95%",
                  }}
                >
                  AI-Powered Mock Interviews
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="h5"
                    paragraph
                    sx={{
                      fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
                      lineHeight: "1.5",
                      marginBottom: "10px",
                      maxWidth: "95%",
                    }}
                  >
                    University & college career centers rely on Contrario to
                    prepare students with customized, real-world interview
                    simulations, featuring questions tailored to top companies
                    worldwide.
                  </Typography>
                  <Button
                    href="https://www.youtube.com/watch?v=grTjbvJSVhU&feature=youtu.be"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    sx={{
                      color: "#ffffff",
                      backgroundColor: "#000000",
                      borderColor: "#000000",
                      fontSize: "1.1rem",
                      padding: "8px 16px",
                      fontFamily: "Inter, sans-serif",
                      "&:hover": {
                        backgroundColor: "#ffffff",
                        color: "#000000",
                      },
                      mt: 1,
                      width: { xs: "80%", sm: "40%" },
                    }}
                  >
                    See Live Demo{" "}
                    <span style={{ marginLeft: "8px", fontSize: "1rem" }}>
                      ↗
                    </span>
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              justifyContent="center"
              sx={{ mt: -4 }}
            >
              <SoundWaveAnimation />
            </Grid>

            <Grid item xs={12} sx={{ mt: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  flexWrap: "wrap",
                  width: "100%",
                  margin: 0,
                  padding: 0,
                  gap: { xs: 2, sm: 0 },
                }}
              >
                {statsData.map((stat, index) => (
                  <StatCard {...stat} key={index} />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* Info Section - Black background, white text */}
      <Section
        bgColor="#000000"
        textColor="#ffffff"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Grid container spacing={0} alignItems="center">
            {/* Left Side - Text Content */}
            <Grid item xs={12} md={5}>
              <Box sx={{ textAlign: "left", padding: "0 24px" }}>
                <Typography
                  variant="overline"
                  display="block"
                  sx={{
                    fontSize: "1.2rem",
                    color: "#ccc",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Interview Training
                </Typography>
                <Typography
                  variant="h1"
                  gutterBottom
                  sx={{
                    fontWeight: "700",
                    fontSize: "3rem",
                    lineHeight: "1.2",
                    color: "#fff",
                  }}
                >
                  Career Prep Software for Student Success
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: "1rem", color: "#ddd", marginTop: "16px" }}
                >
                  Automatically evaluate students with tailored technical and
                  behavioral asssessments based on their resumes and chosen
                  career paths. Seamlessly integrates with career services
                  software to boost student readiness and increase placement
                  success.
                </Typography>
                <Box sx={{ marginTop: "30px" }}>
                  <a
                    href="https://calendly.com/contrarioai/contrario"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        backgroundColor: "#ffffff",
                        color: "#000000",
                        padding: "14px 28px",
                        borderRadius: "8px",
                        fontWeight: "600",
                        fontSize: "1rem",
                        fontFamily: "Inter, sans-serif",
                        transition: "background-color 0.3s",
                        "&:hover": { backgroundColor: "#333" },
                      }}
                    >
                      Try Contrario Now{" "}
                      <span style={{ marginLeft: "8px", fontSize: "1rem" }}>
                        ↗
                      </span>
                    </Box>
                  </a>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "100%", sm: "98%" },
                  padding: { xs: "0", sm: "10px" },
                  border: "1px solid #e0e0e0",
                  borderRadius: { xs: "0", sm: "16px" },
                  boxShadow: { sm: "0 4px 12px rgba(0, 0, 0, 0.1)" },
                  overflow: "hidden",
                  marginTop: { xs: "30px", sm: "0" }, // Added marginTop for mobile
                }}
              >
                <Image
                  src="/product.png"
                  alt="Contrario AI Product Interface"
                  layout="responsive"
                  width={1000}
                  height={600}
                  objectFit="cover"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Section>
      {/* Second Info Section */}
      <Section
        bgColor="#ffffff" // Changed from "#ffffff" to "#000000"
        textColor="#000000" // Changed from "#000000" to "#ffffff"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Grid container spacing={6} alignItems="center">
            {/* Left Side - Image on Desktop */}
            <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
              {" "}
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "100%", sm: "98%" },
                  padding: { xs: "0", sm: "10px" },
                  border: "1px solid #e0e0e0",
                  borderRadius: { xs: "6px", sm: "16px" },
                  boxShadow: { sm: "0 4px 12px rgba(0, 0, 0, 0.1)" },
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/coding.png"
                  alt="Contrario AI Product Interface"
                  layout="responsive"
                  width={1000}
                  height={600}
                  objectFit="cover"
                />
              </Box>
            </Grid>

            {/* Right Side - Text Content on Desktop */}
            <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
              {" "}
              <Box sx={{ textAlign: "left", padding: "0 24px" }}>
                <Typography
                  variant="overline"
                  display="block"
                  sx={{
                    fontSize: "1.2rem",
                    color: "#666", // Changed from "#666" to "#ccc"
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Skill Readiness
                </Typography>
                <Typography
                  variant="h1"
                  gutterBottom
                  sx={{
                    fontWeight: "700",
                    fontSize: "3rem",
                    lineHeight: "1.2",
                    color: "#000", // Changed from "#000" to "#fff"
                  }}
                >
                  Instant AI Coding Feedback
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: "1rem", color: "#555", marginTop: "16px" }} // Changed color from "#555" to "#ddd"
                >
                  Contrario provides students with hands-on coding practice,
                  delivering real-time feedback that mirrors technical
                  interviews. Prepares students across multiple coding
                  languages, with additional assessment tools launching soon.
                </Typography>
                <Box sx={{ marginTop: "30px" }}>
                  <a
                    href="https://calendly.com/contrarioai/contrario"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        backgroundColor: "#000",
                        color: "#fff",
                        padding: "14px 28px",
                        borderRadius: "8px",
                        fontWeight: "600",
                        fontSize: "1rem",
                        fontFamily: "Inter, sans-serif",
                        transition: "background-color 0.3s",
                        "&:hover": { backgroundColor: "#333" },
                      }}
                    >
                      Try Contrario Now{" "}
                      <span style={{ marginLeft: "8px", fontSize: "1rem" }}>
                        ↗
                      </span>
                    </Box>
                  </a>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Section>
      {/* Third Info Section */}
      <Section
        bgColor="#000000"
        textColor="#ffffff"
        style={{ fontFamily: "Inter, sans-serif", padding: 0, margin: 0 }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Grid container spacing={6} alignItems="center">
            {/* Left Side - Text Content */}
            <Grid item xs={12} md={5}>
              <Box sx={{ textAlign: "left", padding: "0 24px" }}>
                <Typography
                  variant="overline"
                  display="block"
                  sx={{
                    fontSize: "1.2rem",
                    color: "#fff",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Instant Feedback
                </Typography>
                <Typography
                  variant="h1"
                  gutterBottom
                  sx={{
                    fontWeight: "700",
                    fontSize: "3rem",
                    lineHeight: "1.2",
                    color: "#fff",
                  }}
                >
                  Job Readiness Score
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: "1rem", color: "#fff", marginTop: "16px" }}
                >
                  After each mock interview, we generate a quick, detailed
                  assessment for students, including skill scores and key focus
                  areas for improvement — accessible immediately for self-guided
                  practice.
                </Typography>
                <Box sx={{ marginTop: "30px" }}>
                  <a
                    href="https://calendly.com/contrarioai/contrario"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        backgroundColor: "#fff",
                        color: "#000",
                        padding: "14px 28px",
                        borderRadius: "8px",
                        fontWeight: "600",
                        fontSize: "1rem",
                        fontFamily: "Inter, sans-serif",
                        transition: "background-color 0.3s",
                        "&:hover": { backgroundColor: "#333" },
                      }}
                    >
                      Try Contrario Now{" "}
                      <span style={{ marginLeft: "8px", fontSize: "1rem" }}>
                        ↗
                      </span>
                    </Box>
                  </a>
                </Box>
              </Box>
            </Grid>

            {/* Right Side - Strategically Placed Larger Image on Mobile */}
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "100%", sm: "98%" }, // Full width on mobile, slight padding on larger screens
                  padding: { xs: "0", sm: "10px" }, // Remove padding on mobile to maximize image size
                  border: "1px solid #e0e0e0",
                  borderRadius: { xs: "0", sm: "16px" },
                  boxShadow: { sm: "0 4px 12px rgba(0, 0, 0, 0.1)" },
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/evaluation.png"
                  alt="Contrario AI Product Interface"
                  layout="responsive"
                  width={1000}
                  height={600}
                  objectFit="cover"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Section>

      <Footer />
    </>
  );
}
