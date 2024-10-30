import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SoundWaveAnimation from "./components/SoundWaveAnimation";

// Styled component for the hero section
const Section = styled(Box)(({ theme, bgColor, textColor }) => ({
  backgroundColor: bgColor,
  color: textColor,
  display: "flex",
  alignItems: "center",
  minHeight: "100vh",
  padding: theme.spacing(8),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4),
  },
}));

export default function Home() {
  return (
    <>
      {/* Navbar at the top */}
      <NavBar />

      {/* Hero Section */}
      <Section bgColor="#000000" textColor="#ffffff">
        <Container maxWidth="xl">
          <Grid container alignItems="center" spacing={4}>
            {/* Left Side - Text Content */}
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: "left", mt: 0 }}>
                <Typography
                  variant="h1"
                  gutterBottom
                  sx={{
                    fontSize: "clamp(2rem, 5vw, 4rem)", // Dynamically adjust font size for two lines
                    fontWeight: "bold",
                    lineHeight: "1.2",
                    marginBottom: "20px",
                    maxWidth: "95%",
                  }}
                >
                  AI-Powered Talent Screening
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="h5"
                    paragraph
                    sx={{
                      fontSize: "clamp(1rem, 2.5vw, 1.4rem)", // Dynamically adjust font size for four lines
                      lineHeight: "1.5",
                      marginBottom: "10px",
                      maxWidth: "95%",
                    }}
                  >
                    Recruitment agencies, Series C+ companies, & talent
                    acquisition teams leverage Contrario to compress
                    time-to-hire, vet qualified candidates, and automate their
                    hiring processes. Universities & colleges also use our
                    software to prepare students for interviews and increase job
                    placement success.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Right Side - Centered Animation with reduced gap */}
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
          </Grid>
        </Container>
      </Section>

      {/* Info Section */}
      <Section
        bgColor="#ffffff"
        textColor="#000000"
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
            {/* Left Side - Text Content */}
            <Grid item xs={12} md={5}>
              <Box sx={{ textAlign: "left", padding: "0 24px" }}>
                <Typography
                  variant="overline"
                  display="block"
                  sx={{
                    fontSize: "1.2rem",
                    color: "#666",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Our Platform
                </Typography>
                <Typography
                  variant="h1"
                  gutterBottom
                  sx={{
                    fontWeight: "700",
                    fontSize: "3rem",
                    lineHeight: "1.2",
                    color: "#000",
                  }}
                >
                  Recruitment software for faster hires
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: "1rem", color: "#555", marginTop: "16px" }}
                >
                  Automatically screen candidates on technical and behavioral
                  skills tailored to their resume and job description, with
                  seamless integration into existing ATS and recruitment
                  software for streamlined hiring decisions and better job
                  placements.
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

            {/* Right Side - Strategically Placed Larger Image on Mobile */}
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "100%", sm: "98%" }, // Full width on mobile, slight padding on larger screens
                  padding: { xs: "0", sm: "10px" }, // Remove padding on mobile to maximize image size
                  border: { xs: "none", sm: "1px solid #e0e0e0" },
                  borderRadius: { xs: "0", sm: "16px" },
                  boxShadow: { sm: "0 4px 12px rgba(0, 0, 0, 0.1)" },
                  overflow: "hidden",
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

      {/* Footer */}
      <Footer />
    </>
  );
}
