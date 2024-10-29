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

// Google Apps Script URL
const GOOGLE_SHEETS_URL =
  "https://script.google.com/a/macros/stanford.edu/s/AKfycbxI-sQY8eHA1LuPCqSkcbzZq84ch-5E_zGDUoWbQnaFhgJHu4LW2aYVVhX2C5ox3rXEBA/exec";

// Styled Box for form background
const FormBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#f0f0f0",
  padding: theme.spacing(8),
  borderRadius: theme.spacing(1),
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  width: "80%",
  fontFamily: "Inter, sans-serif",
}));

export default function Waitlist() {
  const [companyType, setCompanyType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [payment, setPayment] = useState("");

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      companyType,
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
      setPayment("");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <NavBar />

      <Container
        maxWidth={false}
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          paddingY: 8,
          paddingTop: 16,
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
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                color: "black",
                fontSize: "20px",
                marginBottom: "4px",
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

            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                color: "black",
                fontSize: "20px",
                marginBottom: "2px",
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

            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                color: "black",
                fontSize: "20px",
                marginBottom: "4px",
              }}
            >
              Company:
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
              <MenuItem value="" disabled sx={{ color: "black" }}>
                Choose below:
              </MenuItem>
              <MenuItem value="recruiting_agency">Recruiting Agency</MenuItem>
              <MenuItem value="series_c_plus">Series C+ Company</MenuItem>
              <MenuItem value="large_corp">Large Corporation</MenuItem>
              <MenuItem value="university_college">University/College</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </TextField>

            {(companyType === "recruiting_agency" ||
              companyType === "series_c_plus" ||
              companyType === "large_corp" ||
              companyType === "university_college") && (
              <>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "20px",
                    marginBottom: "4px",
                  }}
                >
                  How much would you pay for an AI agent to screen candidates
                  every month?:
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
              </>
            )}

            <Button
              type="submit"
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

      <Box sx={{ paddingTop: (theme) => theme.spacing(8) }}>
        <Footer />
      </Box>
    </>
  );
}
