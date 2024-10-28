import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";

// Styled Footer Section
const FooterSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#000000", // Black background
  color: "#ffffff", // White text
  paddingTop: theme.spacing(8), // Vertical padding
  paddingBottom: theme.spacing(8),
  textAlign: "center",
}));

export default function Footer() {
  return (
    <FooterSection>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left side: Built by the Best Engineers From */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              Built by the Best Engineers From:
            </Typography>
            {/* Company Logos */}
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Image
                src="/past-logos/bcg-logo-black.png" // Replace with actual image paths
                alt="BCG"
                width={100}
                height={100}
              />
              <Image
                src="/past-logos/DoD-logo.png"
                alt="DoD"
                width={80}
                height={80}
              />
              <Image
                src="/past-logos/Juniper-logo.webp"
                alt="Juniper"
                width={200}
                height={50}
              />
              <Image
                src="/past-logos/Stanford-logo.jpg"
                alt="Stanford"
                width={200}
                height={70}
              />
              <Image
                src="/past-logos/nasa-logo.png"
                alt="NASA"
                width={50}
                height={50}
              />
            </Box>
          </Grid>

          {/* Right side: Description */}
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              Our founding engineers know firsthand the frustration of applying
              for jobs – the tedious preparation, and even worse, the nagging
              fear that the interview won't match what you’ve prepared for.
              After experiencing this broken process themselves, they knew it
              was time for a change. That’s why we created Contrario AI.
            </Typography>
          </Grid>
        </Grid>

        {/* Footer Bottom Row */}
        <Box mt={4} display="flex" justifyContent="space-between">
          {/* Left: Copyright */}
          <Typography variant="body2">
            © 2024 Contrario. All rights reserved.
          </Typography>

          {/* Right: Contact and CTA */}
          <Box>
            <Button variant="outlined" color="secondary" sx={{ mr: 2 }}>
              Contact Us
            </Button>
            <Button variant="contained" color="primary">
              Try Contrario Now
            </Button>
          </Box>
        </Box>
      </Container>
    </FooterSection>
  );
}
