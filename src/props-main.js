// This page is a subpage of props page. Here we have added all the elements of props page.
import systaldyn from "./systaldynLogo.png";
import "./App.css";
import Props from "./props.js";

import "./asset.js";

// ICONS IMPORT
import Monitoring from "./icons/Frame9.png";
import KPIs from "./icons/Frame-11.png";
import EventAnalysis from "./icons/Frame-11-2.png";
import MultiEvent from "./icons/Frame-15-3.png";
import Asset from "./icons/Frame-11-1.png";
import Failure from "./icons/Frame-14.png";
import Costs from "./icons/Frame-12.png";
import Skid from "./icons/Frame-11-3.png";
import HSE from "./icons/Frame 11-4.png";
import Helpdesk from "./icons/Frame-15-1.png";
import Repair from "./icons/Frame-16.png";
import Guide from "./icons/Frame-15.png";
import Esclation from "./icons/Frame-11-6.png";
import SatAlarm from "./icons/Frame-11-5.png";
import User from "./icons/Frame-15-2.png";
import Store from "./icons/Frame-13.png";

//Material UI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import { AccountCircle, Help, Settings } from "@mui/icons-material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Grid from "@mui/material/Grid";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Button from "@mui/material/Button";

//Router
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="background">
      <div>
        {/* Navbar */}
        <Box sx={{ flexGrow: 2 }}>
          <AppBar position="static" sx={{ backgroundColor: grey[300] }}>
            <Toolbar sx={{ marginTop: 1 }}>
              <Grid container spacing={12}>
                <Grid item xs={5}>
                  <img src={systaldyn} className="logo" />
                </Grid>
                <Grid item xs={2}>
                  <Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <AccountCircle
                          sx={{ color: grey[900], fontSize: 50 }}
                        />
                      </Grid>
                      <Grid item xs={8}>
                        <Grid item xs={12}>
                          <Typography
                            //   variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, color: grey[900] }}
                          >
                            Hello Admin
                          </Typography>
                        </Grid>
                        <Grid item xs={12} container spacing={2}>
                          <Grid item xs={4}>
                            <Help sx={{ color: grey[900] }} />
                          </Grid>
                          <Grid item xs={4}>
                            <Settings sx={{ color: grey[900] }} />
                          </Grid>
                          <Grid item xs={4}>
                            <ArrowCircleRightIcon sx={{ color: grey[900] }} />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                {/* <Grid item xs={3}>
                <img src={systaldyn} className="logo" />
              </Grid> */}
              </Grid>
            </Toolbar>
          </AppBar>
        </Box>
      </div>

      {/* CARD--SECTION */}
      <div style={{ margin: 15 }}>
        <div className="card--section">
          <Props img={Monitoring} title="Fleet Monitoring" link="/assets" />
          <Props img={KPIs} title="KPIs and KRIs" link="/kpis" />
          <Props img={EventAnalysis} title="Event Analysis" link="/event" />
          <Props img={Costs} title="Costs Insight" link="/costs" />
          <Props
            img={MultiEvent}
            title="Multi-Event Prediction"
            link="/assets"
          />
          <Props img={Asset} title="Asset Similarity" link="/kpis" />
          <Props img={Failure} title="Failure Prediction" link="/event" />
          <Props img={Skid} title="Skid Monitoring" link="/costs" />
          <Props img={HSE} title="HSE Control" link="/assets" />
          <Props img={Helpdesk} title="Helpdesk Operations" link="/kpis" />
          <Props img={Repair} title="Repair & Maintainance" link="/event" />
          <Props img={Guide} title="SOP Guide" link="/costs" />
          <Props img={Esclation} title="Esclation Management" link="/assets" />
          <Props img={SatAlarm} title="SatAlarm Configurations" link="/kpis" />
          <Props img={User} title="User Management" link="/event" />
          <Props img={Store} title="SYSTALDYN Store" link="/costs" />
        </div>
      </div>

      {/* <div style={{ position: "fixed", bottom: 20, right: 20 }}>
        <Link to="/">
          <Button variant="contained">
            Back to form
            <KeyboardDoubleArrowLeftIcon
              sx={{ color: grey[50], fontSize: 20 }}
            />
          </Button>
        </Link>
      </div> */}
    </div>
  );
}

export default App;
