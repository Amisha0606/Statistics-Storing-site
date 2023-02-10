import "./App.css";
import "./asset.css";

//Highcahrts
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsSankey from "highcharts/modules/sankey";

//Material UI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { grey } from "@mui/material/colors";
import { AccountCircle, Help, Settings } from "@mui/icons-material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";

import { Link } from "react-router-dom";


// SANKEY CHART
HighchartsSankey(Highcharts);

const SankeyChart = {
  title: {
    text: "Highcharts Sankey Diagram",
  },
  chart: {
    // Edit chart spacing
    spacingBottom: 25,
    spacingTop: 25,
    spacingLeft: 100,
    spacingRight: 100,
    // Explicitly tell the width and height of a chart
    width: null,
    height: 700,
    borderColor: grey[900],
    borderWidth: 1,
    borderRadius: 10,
    type: "line",
  },
  accessibility: {
    point: {
      valueDescriptionFormat:
        "{index}. {point.from} to {point.to}, {point.weight}.",
    },
  },
  series: [
    {
      keys: ["from", "to", "weight"],
      data: [
        ["Running", "Portugal", 5],
        ["Running", "France", 5],
        ["Running", "Spain", 1],
        ["Running", "England", 1],
        ["Failure", "Portugal", 1],
        ["Failure", "France", 5],

        ["Portugal", "Senegal", 1],
        ["Portugal", "Morocco", 1],
        ["Portugal", "South Africa", 3],

        ["France", "Senegal", 3],
        ["France", "Mali", 3],
        ["France", "Morocco", 3],
        ["France", "South Africa", 1],
        ["Spain", "Senegal", 1],
        ["Spain", "Morocco", 3],
        ["Spain", "South Africa", 1],
        ["England", "Angola", 1],
        ["England", "Senegal", 1],
        ["England", "Morocco", 2],
        ["England", "South Africa", 7],
      ],
      type: "sankey",
      name: "Sankey demo series",
    },
  ],
};

export default function greySanky() {
  return (
    <div>
      {/* Material UI */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: grey[50] }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 6, color: grey[900] }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: grey[900] }}
            >
              KPIs and KRIs
            </Typography>

            {/* HOME BUTTON */}
            <Button type="submit">
              <Link to="/main">
                <HomeIcon sx={{ color: grey[900], fontSize: 50 }} />
              </Link>
            </Button>

            {/* MATERIAL ICONS--GRID */}
            <Grid>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <AccountCircle sx={{ color: grey[900], fontSize: 50 }} />
                </Grid>
                <Grid item xs={8}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ flexGrow: 1, color: grey[900] }}
                    >
                      User:login
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
          </Toolbar>
        </AppBar>
      </Box>

      {/* SANKY CHART */}
      <div style={{ margin: 15 }}>
        <HighchartsReact
          className={grey}
          highcharts={Highcharts}
          options={SankeyChart}
        />
      </div>
    </div>
  );
}


