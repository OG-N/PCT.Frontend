import React from "react";
import {Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
import styled from "@emotion/styled";
import { spacing } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Button as MuiButton,
} from "@mui/material";
import ReplyIcon from '@mui/icons-material/Reply';

const Button = styled(MuiButton)(spacing);
const theme = createTheme({
  palette: {
    secondary: {
      main: "#05C3DE",
    },
  },
});

const CommodityTracker = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid container spacing={6}>
        <Grid item>
          <ThemeProvider theme={theme}>
            <Button
              mr={2}
              variant="contained"
              color="secondary"
              onClick={() => navigate("/enable")}
            >
              <ReplyIcon />
            </Button>
          </ThemeProvider>
        </Grid>
      </Grid>
      <br />
      <Grid container justifyContent="center" spacing={1} alignItems="stretch" sx={{ minHeight: "800px" }}>
        <Grid item md={12} zeroMinWidth>
          <iframe title="LIT ICL Dashboards - Chain of custody" width="100%" height="100%"
                  src="https://app.powerbi.com/view?r=eyJrIjoiNjU5YzA2ODgtZWYyNi00M2NkLWI0OGQtODE0ODM0N2M3NmE3IiwidCI6ImU3OTQyOTc0LTk3MzgtNGE0YS1iNjQ2LTJhYjkwZjc5ZGIwZiIsImMiOjF9&pageName=ReportSectionb69e2243123e0610a062"
                  frameBorder="0" allowFullScreen="true"></iframe>
        </Grid>
      </Grid>
    </>
  );
};
export default CommodityTracker;