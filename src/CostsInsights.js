import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

//Material UI
import TextField from "@mui/material/TextField";
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

function CostsInsights() {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v2/all");
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "Country Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Country Native Name",
      selector: (row) => row.nativeName,
    },
    {
      name: "Country Capital",
      selector: (row) => row.capital,
    },
    {
      name: "Country Flag",
      selector: (row) => <img width={50} height={50} src={row.flag} />,
    },
    {
      name: "Country Sub Region",
      selector: (row) => row.subregion,
    },
    {
      name: "Country Time Zone",
      selector: (row) => row.timezones,
    },
    {
      name: "Action",
      cell: (row) => (
        <Button
          variant="contained"
          onClick={() => alert("Sorry, You need admin permission to edit it.")}
        >
          Edit
        </Button>
      ),
    },
  ];

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
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
              Costs Insights
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
      <div
        style={{ margin: 35, border: "1px solid black", borderRadius: "20px" }}
      >
        <DataTable
          columns={columns}
          data={countries}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="600px"
          highlightOnHover
          selectableRows
          //   actions={
          //     <Button variant="contained" color="secondary">
          //       Export
          //     </Button>
          //   }
          //   subHeader
          //   subHeaderComponent={
          //       <input
          //       type="text"
          //       placeholder="Search the country name here"
          //       />
          //   }
        />
      </div>
    </>
  );
}

export default CostsInsights;
