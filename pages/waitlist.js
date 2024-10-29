import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  MenuItem,
} from "@mui/material";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { styled } from "@mui/system";

// Styled Box for form background
const FormBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#f0f0f0", // Light gray background for form
  padding: theme.spacing(8),
  borderRadius: theme.spacing(1),
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  width: "80%", // Extended width to take up more screen space
  fontFamily: "Inter, sans-serif", // Apply Inter font to entire form
}));

export default function Waitlist() {
  const [companyType, setCompanyType] = useState(""); // State to manage dropdown selection

  return (
    <>
      {/* Navbar */}
      <NavBar />

      {/* Main content */}
      <Container
        maxWidth={false} // Extend to full screen width
        sx={{
          minHeight: "100vh", // Full viewport height
          display: "flex",
          alignItems: "flex-start", // Align form lower on the page
          justifyContent: "center",
          paddingY: 8,
          paddingTop: 16, // Lower form by adding top padding
        }}
      >
        <FormBox>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", color: "black" }}
          >
            Join the Waitlist for Contrario AI software
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ color: "black", marginBottom: 4 }}
          >
            Sign up to stay updated on our AI screening agent software.
          </Typography>
          <form noValidate autoComplete="off">
            {/* Name Field */}
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                color: "black",
                fontSize: "20px",
                marginBottom: "4px", // Reduces space below the label
              }}
            >
              Name:
            </Typography>
            <TextField
              placeholder="First Last"
              variant="outlined"
              fullWidth
              margin="dense" // Adjusts spacing to reduce gap
              required
              InputProps={{
                style: { color: "black", fontFamily: "Inter, sans-serif" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "black" },
                  "&:hover fieldset": { borderColor: "black" },
                  "&.Mui-focused fieldset": { borderColor: "black" },
                },
              }}
            />

            {/* Email Field */}
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                color: "black",
                fontSize: "20px",
                marginBottom: "2px", // Reduces space below the label
              }}
            >
              Email:
            </Typography>
            <TextField
              placeholder="example@domain.com"
              variant="outlined"
              fullWidth
              margin="dense" // Adjusts spacing to reduce gap
              required
              InputProps={{
                style: { color: "black", fontFamily: "Inter, sans-serif" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "black" },
                  "&:hover fieldset": { borderColor: "black" },
                  "&.Mui-focused fieldset": { borderColor: "black" },
                },
              }}
            />

            {/* Company Field with Dropdown */}
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                color: "black",
                fontSize: "20px",
                marginBottom: "4px", // Reduces space below the label
              }}
            >
              Company:
            </Typography>
            <TextField
              select
              variant="outlined"
              fullWidth
              margin="dense" // Adjusts spacing to reduce gap
              required
              value={companyType} // Controlled value
              onChange={(e) => setCompanyType(e.target.value)} // Update state on change
              InputProps={{
                style: {
                  color: companyType ? "black" : "#888888",
                  fontFamily: "Inter, sans-serif",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "black" },
                  "&:hover fieldset": { borderColor: "black" },
                  "&.Mui-focused fieldset": { borderColor: "black" },
                },
                "& .MuiSelect-icon": {
                  color: "black", // Set the arrow color to black
                },
              }}
              SelectProps={{
                displayEmpty: true, // Show the placeholder text in the dropdown box
                MenuProps: {
                  PaperProps: {
                    sx: {
                      bgcolor: "#e0e0e0", // Set dropdown background color
                      "& .MuiMenuItem-root": {
                        color: "black", // Set dropdown item text color to black
                      },
                      "& .Mui-selected": {
                        backgroundColor: "#c0c0c0 !important", // Selected item background
                      },
                      "& .MuiMenuItem-root:hover": {
                        backgroundColor: "#b0b0b0", // Hover color for options
                      },
                    },
                  },
                },
              }}
            >
              {/* Placeholder option */}
              <MenuItem value="" disabled sx={{ color: "black" }}>
                Choose below:
              </MenuItem>
              <MenuItem value="recruiting_agency">Recruiting Agency</MenuItem>
              <MenuItem value="series_c_plus">Series C+ Company</MenuItem>
              <MenuItem value="large_corp">Large Corporation</MenuItem>
              <MenuItem value="university_college">University/College</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </TextField>

            {/* Conditional Payment Question */}
            {companyType === "recruiting_agency" ||
            companyType === "series_c_plus" ||
            companyType === "large_corp" ? (
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "20px",
                  marginBottom: "4px", // Reduces space below the label
                }}
              >
                How much would you pay for an AI agent to screen candidates for
                you every month?:
              </Typography>
            ) : companyType === "university_college" ? (
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "20px",
                  marginBottom: "4px", // Reduces space below the label
                }}
              >
                How much would you pay every month for an AI agent that helps
                students secure better job roles?:
              </Typography>
            ) : null}
            {companyType === "recruiting_agency" ||
            companyType === "series_c_plus" ||
            companyType === "large_corp" ||
            companyType === "university_college" ? (
              <TextField
                placeholder="2500"
                variant="outlined"
                type="number"
                fullWidth
                margin="dense" // Adjusts spacing to reduce gap
                required
                InputProps={{
                  style: { color: "black", fontFamily: "Inter, sans-serif" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "black" },
                    "&:hover fieldset": { borderColor: "black" },
                    "&.Mui-focused fieldset": { borderColor: "black" },
                  },
                }}
              />
            ) : null}

            {/* Submit Button */}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                marginTop: 4,
                fontWeight: "bold",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Join Waitlist
            </Button>
          </form>
        </FormBox>
      </Container>

      {/* Footer */}
      <Box sx={{ paddingTop: (theme) => theme.spacing(8) }}>
        <Footer />
      </Box>
    </>
  );
}
