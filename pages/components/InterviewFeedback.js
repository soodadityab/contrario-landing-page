import React from "react";
import {
  Box,
  Card,
  Text,
  Meter,
  List,
  Heading,
  ResponsiveContext,
} from "grommet";
import {
  StatusGood,
  StatusCritical,
  Download,
  FormNextLink,
} from "grommet-icons";

// Custom Divider Component
const Divider = () => (
  <Box
    border={{ color: "light-4", size: "xsmall", side: "bottom" }}
    margin={{ vertical: "small" }}
  />
);

// Function to calculate the average score
const calculateOverallScore = (scores) => {
  const scoreValues = Object.values(scores);
  const total = scoreValues.reduce((acc, score) => acc + score, 0);
  const average = total / scoreValues.length;
  return parseFloat(average.toFixed(1)); // Round to one decimal place
};

// Component to display individual score items
const ScoreItem = ({ label, value }) => (
  <Box direction="row" align="center" gap="small" margin={{ bottom: "medium" }}>
    <Text color="black" weight="bold" style={{ width: "150px" }}>
      {label}
    </Text>
    <Meter
      values={[{ value: (value / 5) * 100 }]}
      thickness="small"
      size="small"
      color={value >= 3 ? "status-ok" : "status-critical"}
      aria-label={`${label}: ${value}/5`}
    />
    <Text color="black">{value}/5</Text>
  </Box>
);

const InterviewFeedback = ({ feedback }) => {
  // Calculate the overall score
  const overallScore = calculateOverallScore(feedback.scores);

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box pad="medium" align="center" overflow="auto">
          <Card
            background="white"
            elevation="medium"
            pad="large"
            width={size !== "small" ? "large" : "100%"}
            round="small"
          >
            <Box gap="medium">
              {/* Top Section */}
              <Box direction="row" justify="between" align="center">
                {/* Left Side - Position and Company */}
                <Box>
                  <Heading
                    level="2"
                    margin={{ bottom: "none", top: "xsmall" }} // Moved the text a bit higher by reducing top margin
                    color="status-ok" // Changed text color to green (Grommet's default 'status-ok' color)
                  >
                    {feedback.position} at {feedback.company}
                  </Heading>
                  <Box
                    direction="row"
                    gap="medium"
                    wrap
                    align="center"
                    margin={{ top: "small" }}
                  >
                    <Text size="medium" color="black">
                      <strong>Candidate:</strong> {feedback.name}
                    </Text>
                    <Text size="medium" color="black">
                      <strong>Interview ID:</strong> {feedback.interviewId}
                    </Text>
                    <Text size="medium" color="black">
                      <strong>Job Description:</strong>{" "}
                      {feedback.jobDescription}
                    </Text>
                  </Box>
                </Box>
                {/* Right Side - Overall Score */}
                <Box align="center" gap="small" margin={{ left: "medium" }}>
                  <Text size="medium" weight="bold" color="black">
                    Score
                  </Text>
                  <Meter
                    type="circle"
                    size="xsmall"
                    thickness="small"
                    values={[{ value: (overallScore / 5) * 100 }]}
                    aria-label={`Overall Score: ${overallScore}/5`}
                  />
                  <Text size="medium" weight="bold" color="black">
                    {overallScore}/5
                  </Text>
                </Box>
              </Box>

              <Divider />

              {/* Middle Section - Technical and Behavioral Buckets */}
              <Box
                direction="row" // Ensure row direction for both evaluations
                justify="between" // Align both sections evenly
                gap="medium"
                pad={{ horizontal: "medium" }} // Equal padding on both sides
              >
                {/* Technical Evaluation */}
                <Box flex="grow" basis="1/2" pad={{ right: "medium" }}>
                  {" "}
                  {/* Added padding to the right */}
                  <Heading level="3" margin={{ bottom: "small" }} color="black">
                    Technical Evaluation
                  </Heading>
                  {/* Technical Subscores */}
                  {["accuracy", "problemSolving", "communication"].map(
                    (scoreKey) => (
                      <ScoreItem
                        key={scoreKey}
                        label={
                          scoreKey === "problemSolving"
                            ? "Clean Code"
                            : scoreKey.charAt(0).toUpperCase() +
                              scoreKey.slice(1)
                        }
                        value={feedback.scores[scoreKey]}
                      />
                    )
                  )}
                </Box>

                {/* Behavioral Evaluation */}
                <Box flex="grow" basis="1/2" pad={{ left: "medium" }}>
                  {" "}
                  {/* Added padding to the left */}
                  <Heading level="3" margin={{ bottom: "small" }} color="black">
                    Behavioral Evaluation
                  </Heading>
                  {/* Behavioral Subscores */}
                  {["confidence", "eloquence", "wording"].map((scoreKey) => (
                    <ScoreItem
                      key={scoreKey}
                      label={
                        scoreKey.charAt(0).toUpperCase() + scoreKey.slice(1)
                      }
                      value={feedback.scores[scoreKey]}
                    />
                  ))}
                </Box>
              </Box>

              <Divider />

              {/* Strengths and Weaknesses */}
              <Box
                direction="row" // Keep side by side even on small screens
                gap="large"
                pad={{ horizontal: "medium" }} // Ensure equal padding on both sides
                wrap={false} // Prevent stacking in smaller screens
              >
                {/* Strengths */}
                <Box flex="grow" basis="1/2" pad={{ right: "medium" }}>
                  <Box
                    direction="row"
                    align="center"
                    gap="small"
                    margin={{ bottom: "small" }}
                  >
                    <StatusGood color="status-ok" />
                    <Text weight="bold" color="black">
                      Strengths
                    </Text>
                  </Box>
                  <List
                    data={feedback.strengths}
                    pad={{ left: "small" }}
                    primaryKey={(item) => (
                      <Box direction="row" gap="small" align="center">
                        <StatusGood color="status-ok" size="small" />
                        <Text color="black">{item}</Text>
                      </Box>
                    )}
                  />
                </Box>

                {/* Weaknesses */}
                <Box flex="grow" basis="1/2" pad={{ left: "medium" }}>
                  <Box
                    direction="row"
                    align="center"
                    gap="small"
                    margin={{ bottom: "small" }}
                  >
                    <StatusCritical color="status-critical" />
                    <Text weight="bold" color="black">
                      Weaknesses
                    </Text>
                  </Box>
                  <List
                    data={feedback.weaknesses}
                    pad={{ left: "small" }}
                    primaryKey={(item) => (
                      <Box direction="row" gap="small" align="center">
                        <StatusCritical color="status-critical" size="small" />
                        <Text color="black">{item}</Text>
                      </Box>
                    )}
                  />
                </Box>
              </Box>

              <Divider />

              {/* Bottom Section - Transcript and Technical Questions */}
              <Box
                direction="row"
                justify="center"
                gap="large"
                align="center"
                margin={{ top: "medium" }}
              >
                {/* Transcript */}
                <Box align="center" direction="row" gap="small">
                  <Text size="medium" weight="bold" color="black">
                    Transcript
                  </Text>
                  <Download color="black" />{" "}
                  {/* Added Download icon next to Transcript */}
                </Box>

                {/* Technical Questions */}
                <Box align="center">
                  <Text size="medium" weight="bold" color="black">
                    Technical Questions
                  </Text>
                  <List
                    data={feedback.technical_qs}
                    pad={{ left: "small" }}
                    primaryKey={(item) => (
                      <Box direction="row" gap="small" align="center">
                        <FormNextLink color="black" size="small" />{" "}
                        {/* Tech-inspired bullet */}
                        <Text color="#00739D">
                          {" "}
                          {/* Grommet's default link blue color */}
                          {item}
                        </Text>
                      </Box>
                    )}
                  />
                </Box>
              </Box>
            </Box>
          </Card>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default InterviewFeedback;
