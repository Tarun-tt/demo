import { Autocomplete, Box, Checkbox, FormControlLabel, FormGroup, Paper, TextField, Typography, useTheme, Tab, Tabs, Grid, Button } from "@mui/material";
import { tokens } from "../../styles/theme";
import Header from "../../components/Header";
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import Contacts from './Contacts'
const top100Films = [
    { label: 'Tarun1', year: 1994 },
    { label: 'Data1', year: 1972 },
    { label: 'Data Part II', year: 1974 },
    { label: 'Data 3', year: 2008 },
]
const Team = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    const handleTabChange = (e, tabIndex) => {
        console.log(tabIndex);
        setCurrentTabIndex(tabIndex);
    };

    return (
        <Box m="20px">

            {/* <Header title="Main" subtitle="SIETZ TECHNOLOGIES INDIA PVT LTD." /> */}

            <Tabs value={currentTabIndex} onChange={handleTabChange}>
                <Tab style={{ fontWeight: "900" }} label='Main' />
                <Tab style={{ fontWeight: "900" }} label='Item' />

            </Tabs>

            {/* TAB 1 Contents */}
            {currentTabIndex === 0 && (
                <Box sx={{ p: 3 }}>

                    <Box component={Paper} sx={{ width: "18%", ml: 50 }}>
                        
                        <FormGroup sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            mt: 2,
                            ml: 2,
                            my: 3
                        }}>
                            
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="One Time PO" />
                                <FormControlLabel value="male" control={<Radio />} label="Open PO" />
                               
                            </RadioGroup>
                        </FormGroup>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    my: 2,
                                    ml: 5

                                }}
                            >
                                Division Name
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="  Division Name" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    my: 2,
                                    ml: 5

                                }}
                            >
                                Category
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label=" Category" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    my: 2,
                                    ml: 5

                                }}
                            >
                                PO Number
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label=" PO Number" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    my: 2,
                                    ml: 5

                                }}
                            >
                                Store
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="  Store" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    my: 2,
                                    ml: 5

                                }}
                            >
                                PO Date
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="   PO Date" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    my: 2,
                                    ml: 5

                                }}
                            >
                                PO Amend Date
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="PO Amend Date" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    my: 2,
                                    ml: 5

                                }}
                            >
                                PO Eff. Date
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="   PO Eff. Date " />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    my: 2,
                                    ml: 5

                                }}
                            >
                                PO End Date
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label=" PO End Date" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    my: 2,
                                    ml: 5

                                }}
                            >
                                Vendor
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="   Vendor" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    my: 2,
                                    ml: 5

                                }}
                            >
                                Vendor Ref No.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="    Vendor Ref No." />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    my: 2,
                                    ml: 5

                                }}
                            >
                                Currency
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="  Currency" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    my: 2,
                                    ml: 5

                                }}
                            >
                                Currency Converter
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label=" Currency Converter" />}
                            />
                        </Grid>
                        <Grid item xs={12} component={Paper} sx={{ width: "100%", mx: 50, mt: 2 }}>
                            <FormGroup sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                mt: 2,
                                right:1
                            }}>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="PO Direct to OSP" />
                                <FormControlLabel control={<Checkbox />} label="Quality Assured " />
                                <FormControlLabel control={<Checkbox />} label="None" />


                            </FormGroup>
                        </Grid>
                        <Grid item xs={12} align='left'>
                            <Typography
                                variant="h4"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    mb: 2,
                                    mt: 2

                                }}
                            >
                                Terms and Conditions
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    mb: 2,
                                    mt: 2

                                }}
                            >
                                Payment Terms
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label=" Payment Terms" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    mb: 2,
                                    mt: 2

                                }}
                            >
                                Mode of Transport
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label=" Mode of Transport" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    mb: 2,
                                    mt: 2

                                }}
                            >
                                Price Basis
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label=" Price Basis" />}
                            />
                        </Grid>
                        <Grid container spacing={2} my={5}>
                            <Grid item xs={12} sm={6} align="right">
                                <Button variant='outlined' style={{ fontSize: "15px" }} > Reset </Button>
                            </Grid>
                            <Grid item xs={12} sm={6} align="left">
                                <Button variant="contained" style={{ fontSize: "15px" }} color="success"> Next </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </Box>
            )}

            {/* TAB 2 Contents */}
            {currentTabIndex === 1 && (
                <Box sx={{ p: 3 }}>
                    <Contacts />
                </Box>
            )}


        </Box>
    );
};

export default Team;