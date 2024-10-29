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
import Head from "next/head";

// Google Apps Script URL
const GOOGLE_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbxI-sQY8eHA1LuPCqSkcbzZq84ch-5E_zGDUoWbQnaFhgJHu4LW2aYVVhX2C5ox3rXEBA/exec";

// Styled Box for form background
const FormBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#f0f0f0",
  padding: theme.spacing(4, 4), // Smaller padding on mobile
  borderRadius: theme.spacing(1),
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  width: "100%",
  fontFamily: "Inter, sans-serif",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(6),
  },
  [theme.breakpoints.down("700")]: {
    maxWidth: "480px", // Limit width for better readability on mobile
  },
}));

export default function Waitlist() {
  const [companyType, setCompanyType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [payment, setPayment] = useState("");
  const [companyName, setCompanyName] = useState("");
  const isFormValid = name && email && companyName && companyType;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      companyType,
      companyName,
      payment,
    };

    try {
      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        mode: "no-cors",
      });

      alert("Submission successful!");
      setName("");
      setEmail("");
      setCompanyType("");
      setCompanyName("");
      setPayment("");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  // Dynamic question based on company type
  const questionText =
    companyType === "university_college"
      ? "How much would you be willing to pay for an AI agent that improves student placement success rates?"
      : "How much would you pay for an AI agent to screen candidates every month?";

  return (
    <>
      <Head>
        <title>Waitlist | Contrario</title>
        <meta
          name="description"
          content="Join the waitlist for Contrario's AI-powered talent screening tool."
        />
      </Head>
      {/* Navbar */}
      <NavBar />
      {/* Main content */}
      <Container
        maxWidth="sm"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          paddingY: 8,
          paddingTop: 12,
        }}
      >
        <FormBox>
          {/* Two-line title with responsive font size */}
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "black",
              fontSize: { xs: "1.5rem", sm: "2rem" },
              lineHeight: "1.2",
              textAlign: "center",
              whiteSpace: "normal", // Ensures it breaks correctly on small screens
            }}
          >
            Join the Waitlist for <br /> Contrario AI
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ color: "black", marginBottom: 4, textAlign: "center" }}
          >
            Sign up to stay updated on our latest software.
          </Typography>
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            {/* Form Fields */}
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "16px",
                  mb: 0.5,
                }}
              >
                Name:
              </Typography>
              <TextField
                placeholder="First Last"
                variant="outlined"
                fullWidth
                margin="dense"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
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
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "16px",
                  mb: 0.5,
                }}
              >
                Email:
              </Typography>
              <TextField
                placeholder="example@domain.com"
                variant="outlined"
                fullWidth
                margin="dense"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "16px",
                  mb: 0.5,
                }}
              >
                Company Name:
              </Typography>
              <TextField
                placeholder="Your Company"
                variant="outlined"
                fullWidth
                margin="dense"
                required
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
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
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "16px",
                  mb: 0.5,
                }}
              >
                Company Type:
              </Typography>
              <TextField
                select
                variant="outlined"
                fullWidth
                margin="dense"
                required
                value={companyType}
                onChange={(e) => setCompanyType(e.target.value)}
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
                  "& .MuiSelect-icon": { color: "black" },
                }}
                SelectProps={{
                  displayEmpty: true,
                  MenuProps: {
                    PaperProps: {
                      sx: {
                        bgcolor: "#e0e0e0",
                        "& .MuiMenuItem-root": { color: "black" },
                        "& .Mui-selected": {
                          backgroundColor: "#c0c0c0 !important",
                        },
                        "& .MuiMenuItem-root:hover": {
                          backgroundColor: "#b0b0b0",
                        },
                      },
                    },
                  },
                }}
              >
                <MenuItem value="" disabled>
                  Choose below:
                </MenuItem>
                <MenuItem value="recruiting_agency">Recruiting Agency</MenuItem>
                <MenuItem value="series_c_plus">Series C+ Company</MenuItem>
                <MenuItem value="large_corp">Large Corporation</MenuItem>
                <MenuItem value="university_college">
                  University/College
                </MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
            </Box>

            {companyType && (
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "16px",
                    mb: 0.5,
                  }}
                >
                  {questionText}
                </Typography>
                <TextField
                  placeholder="2500"
                  variant="outlined"
                  type="number"
                  fullWidth
                  margin="dense"
                  required
                  value={payment}
                  onChange={(e) => setPayment(e.target.value)}
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
              </Box>
            )}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                marginTop: 3,
                fontWeight: "bold",
                fontFamily: "Inter, sans-serif",
              }}
              disabled={!isFormValid}
            >
              Join Waitlist
            </Button>
          </form>
        </FormBox>
      </Container>
      <Box sx={{ paddingTop: (theme) => theme.spacing(8) }}>
        <Footer />
      </Box>
    </>
  );
}
