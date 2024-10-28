import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { styled } from "@mui/system";

// Styled Box for form background
const FormBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper, // White background for form
  padding: theme.spacing(4),
  borderRadius: theme.spacing(1),
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
}));

export default function Contact() {
  return (
    <>
      {/* Navbar */}
      <NavBar />

      {/* Main content */}
      <Container
        maxWidth="lg"
        sx={{
          paddingTop: (theme) => theme.spacing(34), // Increased top padding for more space between Navbar and "Contact Us" section
          paddingBottom: (theme) => theme.spacing(6), // Increased bottom padding
        }}
      >
        <Grid
          container
          spacing={4}
          alignItems="flex-start"
          justifyContent="center"
        >
          {/* Contact Info Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom color="primary">
              Contact Us
            </Typography>
            <Typography variant="body1" gutterBottom>
              Email: contact-us@contrario.ai
            </Typography>
            <Typography variant="body1" gutterBottom>
              Location: Stanford, CA
            </Typography>
          </Grid>

          {/* Contact Form Section */}
          {/* Contact Form Section */}
          <Grid item xs={12} md={6}>
            <FormBox>
              <Typography variant="h5" gutterBottom color="tertiary.main">
                Message Us
              </Typography>
              <form noValidate autoComplete="off">
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black", // Set the default border color to black
                      },
                      "&:hover fieldset": {
                        borderColor: "black", // Set the hover border color to black
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black", // Set the focused border color to black
                      },
                    },
                  }}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black", // Set the default border color to black
                      },
                      "&:hover fieldset": {
                        borderColor: "black", // Set the hover border color to black
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black", // Set the focused border color to black
                      },
                    },
                  }}
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  multiline
                  rows={4}
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black", // Set the default border color to black
                      },
                      "&:hover fieldset": {
                        borderColor: "black", // Set the hover border color to black
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black", // Set the focused border color to black
                      },
                    },
                  }}
                />

                <Button
                  variant="contained"
                  color="tertiary"
                  fullWidth
                  sx={{ marginTop: (theme) => theme.spacing(2.5) }}
                >
                  Submit
                </Button>
              </form>
            </FormBox>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ paddingTop: (theme) => theme.spacing(8) }}>
        {" "}
        {/* Adds space between the content and footer */}
        <Footer />
      </Box>
    </>
  );
}
