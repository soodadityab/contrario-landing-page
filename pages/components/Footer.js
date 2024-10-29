import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

// Keyframes for scrolling animation
const scrollAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

// Styled Footer Section
const FooterSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#000000",
  color: "#ffffff",
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  textAlign: "center",
}));

// Scrolling Container for Logos
const ScrollingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  width: "100%",
  marginTop: theme.spacing(4),
  padding: theme.spacing(2, 0),
}));

// Inner Scrolling Content
const ScrollingContent = styled(Box)({
  display: "flex",
  alignItems: "center",
  animation: `${scrollAnimation} 30s linear infinite`,
  whiteSpace: "nowrap",
  willChange: "transform",
});

// Logo Container Box for setting consistent height
const LogoBox = styled(Box)({
  flex: "0 0 auto",
  height: "80px",
  margin: "0 48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const logos = [
  {
    src: "/past-logos/bcg-logo-black.png",
    alt: "BCG",
    width: 100,
    height: 100,
  },
  { src: "/past-logos/DoD-logo.png", alt: "DoD", width: 100, height: 100 },
  {
    src: "/past-logos/Juniper-logo.webp",
    alt: "Juniper",
    width: 200,
    height: 50,
  },
  {
    src: "/past-logos/stanfordlogo.png",
    alt: "Stanford",
    width: 100,
    height: 100,
  },
  { src: "/past-logos/nasa.png", alt: "NASA", width: 100, height: 100 },
  {
    src: "/past-logos/microsoft-logo.png",
    alt: "Microsoft",
    width: 200,
    height: 70,
  },
];

export default function Footer() {
  return (
    <FooterSection>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left-aligned Title with Two Lines */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontWeight: "bold", textAlign: "left", fontSize: "3rem" }}
            >
              Built by the Best <br />
              Engineers From:
            </Typography>
          </Grid>

          {/* Right side: Description */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h7"
              paragraph
              sx={{
                textAlign: "left",
                color: "lightgray",
                fontSize: "1.2rem",
              }}
            >
              Our team brings firsthand experience from Juniper Networks, NASA,
              and BCG, inspiring us to build Contrario AI to streamline hiring
              through automation.
            </Typography>
          </Grid>
        </Grid>

        {/* Scrolling Logo Row */}
        <ScrollingContainer>
          <ScrollingContent>
            {/* Display logos twice for seamless infinite scroll */}
            {logos.map((logo, index) => (
              <LogoBox key={index}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  style={{ objectFit: "contain", maxHeight: "100%" }}
                />
              </LogoBox>
            ))}
            {logos.map((logo, index) => (
              <LogoBox key={`dup-${index}`}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  style={{ objectFit: "contain", maxHeight: "100%" }}
                />
              </LogoBox>
            ))}
          </ScrollingContent>
        </ScrollingContainer>

        {/* Footer Bottom Row */}
        <Box mt={4} display="flex" justifyContent="space-between">
          {/* Left: Copyright */}
          <Typography variant="body2">
            © 2024 Contrario. All rights reserved.
          </Typography>

          {/* Right: Contact and CTA */}
          <Box display="flex" gap={2}>
            {/* Waitlist Link */}
            <Link href="/waitlist" passHref>
              <Button
                sx={{
                  color: "#ffffff",
                  fontSize: "1.1rem",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "bold",
                  backgroundColor: "transparent",
                  "&:hover": {
                    color: "#888888",
                    backgroundColor: "transparent",
                  },
                }}
              >
                Waitlist
              </Button>
            </Link>

            {/* Try Contrario Now Button */}
            <Button
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
              href="https://calendly.com/contrarioai/contrario"
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Security measure for new tab
            >
              Try Contrario Now{" "}
              <span style={{ marginLeft: "8px", fontSize: "1rem" }}>↗</span>
            </Button>
          </Box>
        </Box>
      </Container>
    </FooterSection>
  );
}
