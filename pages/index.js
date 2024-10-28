// pages/index.js
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SoundWaveAnimation from "./components/SoundWaveAnimation"; // Import the new component

// Styled components for section backgrounds
const Section = styled(Box)(({ theme, bgColor, textColor }) => ({
  backgroundColor: bgColor,
  color: textColor,
  paddingTop: theme.spacing(8), // Adjust for more or less padding
  paddingBottom: theme.spacing(8),
}));

export default function Home() {
  return (
    <>
      {/* Navbar at the top */}
      <NavBar />

      {/* Hero Section - Black Background with White Text */}
      <Section
        bgColor="#000000"
        textColor="#ffffff"
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg" textAlign="center">
          <Typography variant="h1" color="primary" gutterBottom>
            Your Custom AI Coach to Nail the Interview
          </Typography>
          <Typography variant="h6" color="secondary" paragraph>
            Colleges and recruitment agencies use Contrario AI to deliver
            personalized job interview prep to their users. Experience the real
            job interview...before it even happens
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 4 }}
          >
            Try Contrario Now
          </Button>
          {/* Soundwave Animation */}
          <SoundWaveAnimation />
        </Container>
      </Section>

      {/* Info Section 1 - White Background with Black Text */}
      <Section bgColor="#ffffff" textColor="#000000">
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom>
            A mission-aligned workspace for government data.
          </Typography>
          <Typography variant="body1" paragraph>
            Automatically find answers to complex inter-document questions using
            the latest database of government policy, spending data, and
            contract opportunities.
          </Typography>

          {/* Mockup or visual content */}
          <Box textAlign="center" sx={{ mt: 4 }}>
            <Image
              src="/mockup.png"
              alt="Search Interface Mockup"
              layout="responsive"
              width={800}
              height={400}
              sizes="(max-width: 600px) 100vw, 80vw"
              priority
            />
          </Box>
        </Container>
      </Section>

      {/* Info Section 2 - White Background with Black Text */}
      <Section bgColor="#ffffff" textColor="#000000">
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom>
            We connect policy to dollars
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" sx={{ color: "#000000" }}>
                    Government Policy
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#000000" }}>
                    We've indexed over 50,000 policy documents from
                    publications, directives, military standards, and more.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" sx={{ color: "#000000" }}>
                    Government Funding Lines
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#000000" }}>
                    Our platform allows you to query and track relevant funding
                    lines for your projects.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" sx={{ color: "#000000" }}>
                    Government Contract Opportunities
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#000000" }}>
                    Our customers leverage a full landscape of contracts to
                    identify opportunities for growth.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* Additional Info Section - White Background with Black Text */}
      <Section bgColor="#ffffff" textColor="#000000">
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom>
            Why Contrario AI is Different
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Personalized Interview Prep</Typography>
              <Typography variant="body1" paragraph>
                With AI-driven insights, Contrario AI adapts to your unique
                needs, offering customized feedback on your interview
                performance. It learns from your responses and gets smarter with
                each session to help you improve.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: "center" }}>
                <Image
                  src="/platform-placeholder1.jpg"
                  alt="Platform Feature Image 1"
                  width={500}
                  height={300}
                  layout="responsive"
                  priority
                />
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: "center" }}>
                <Image
                  src="/platform-placeholder2.jpg"
                  alt="Platform Feature Image 2"
                  width={500}
                  height={300}
                  layout="responsive"
                  priority
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Real-Time Market Insights</Typography>
              <Typography variant="body1" paragraph>
                Stay ahead of the competition with up-to-date market trends and
                insights. Our AI engine is constantly analyzing industry data to
                ensure that you have the best preparation for your job
                interviews.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* Feature Highlight Section - White Background with Black Text */}
      <Section bgColor="#ffffff" textColor="#000000">
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom textAlign="center">
            Key Features You’ll Love
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center">
                <Box flexGrow={1}>
                  <Typography variant="h6">
                    Adaptive Model Fixes your Weaknesses
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Your AI coach will learn your weaknesses as you interact
                    with it and ask questions specifically designed to reinforce
                    them.
                  </Typography>
                </Box>
                <Box ml={2}>
                  <Image
                    src="/ai-icon-placeholder.jpg"
                    alt="AI Icon"
                    width={80}
                    height={80}
                  />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center">
                <Box flexGrow={1}>
                  <Typography variant="h6">Real-Time Feedback</Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Instantly provides a detailed report of your performance at
                    the end of your interview.
                  </Typography>
                </Box>
                <Box ml={2}>
                  <Image
                    src="/feedback-icon-placeholder.jpg"
                    alt="Feedback Icon"
                    width={80}
                    height={80}
                  />
                </Box>
              </Box>
            </Grid>

            {/* New Feature 1 */}
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center">
                <Box flexGrow={1}>
                  <Typography variant="h6">
                    Conversational AI for Real Interview Simulations
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Our conversational AI agents simulate real-life interview
                    scenarios & ask personalized questions, giving you a sense
                    of the real deal.
                  </Typography>
                </Box>
                <Box ml={2}>
                  <Image
                    src="/conversation-icon-placeholder.jpg"
                    alt="Conversation Icon"
                    width={80}
                    height={80}
                  />
                </Box>
              </Box>
            </Grid>

            {/* New Feature 2 */}
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center">
                <Box flexGrow={1}>
                  <Typography variant="h6">
                    Available for Any Role in Any Industry
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Contrario AI simulates interviews for any role, across any
                    industry. We get role details from the recruiter, and we
                    handle the rest!
                  </Typography>
                </Box>
                <Box ml={2}>
                  <Image
                    src="/industry-icon-placeholder.jpg"
                    alt="Industry Icon"
                    width={80}
                    height={80}
                  />
                </Box>
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
