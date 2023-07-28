import React from "react";
import {Helmet} from "react-helmet-async";
import {
    Box,
    Breadcrumbs, Button,
    Card,
    CardContent,
    CardMedia,
    Divider,
    Grid,
    Link,
    List, ListItem,
    Paper,
    Typography
} from "@mui/material";
import {NavLink, useNavigate} from "react-router-dom";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import VaccineImg from "../../../vendor/vaccine.jpg";
import TextField from "@mui/material/TextField";

const ProductDetails = () => {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <Helmet title="Product Details" />
            <Breadcrumbs aria-label="Breadcrumb" mt={2} gutterBottom>
                <Link component={NavLink} to="/">
                    PCT
                </Link>
                <Link component={NavLink} to="/">
                    Supply Chain Operations
                </Link>
                <Link component={NavLink} to="/">
                    Home
                </Link>
                <Typography>Product Details</Typography>
            </Breadcrumbs>
            <Box mt={4}>
                <Paper square={true} sx={{ borderTop: 5 }} elevation={8}>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Product Details
                            </Typography>
                            <Divider />
                        </CardContent>
                    </Card>
                    <Card sx={{ display: 'flex' }}>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={5}>
                                    <CardMedia component="img" sx={{ width: 300, objectFit: "fit" }} image={VaccineImg} />
                                </Grid>
                                <Grid item xs={7}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h3" sx={{ color: "orange" }}>
                                                Vaccination
                                            </Typography>
                                            <Typography variant="body2" component="div">
                                                <List sx={{listStyleType: 'disc', listStylePosition: 'inside'}}>
                                                    <ListItem sx={{ display: 'list-item' }}>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    </ListItem>
                                                    <ListItem sx={{ display: 'list-item' }}>
                                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                    </ListItem>
                                                    <ListItem sx={{ display: 'list-item' }}>
                                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                                    </ListItem>
                                                </List>
                                            </Typography>
                                            <Grid container spacing={2} mt={4}>
                                                <Grid item xs={6}>
                                                    Estimated Cost of Product:
                                                </Grid>
                                                <Grid item xs={6} sx={{ color: "green" }}>
                                                    $1645000000
                                                </Grid>
                                                <Grid item xs={6}>
                                                    Estimated Cost of Delivery:
                                                </Grid>
                                                <Grid item xs={6} sx={{ color: "green" }}>
                                                    $500000
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Divider />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    Required Delivery Date:
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <DatePicker
                                                        value={""}
                                                        onChange={(value) =>
                                                            ""
                                                        }
                                                        renderInput={(params) => (
                                                            <TextField
                                                                margin="normal"
                                                                name="startingDate"
                                                                variant="outlined"
                                                                fullWidth
                                                                my={2}
                                                                {...params}
                                                            />
                                                        )}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Typography component="div" variant="h3">
                                                        $1700000000
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={6} mt={2}>
                                                    <TextField id="outlined-basic" type="number" variant="outlined" fullWidth />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Button
                                                        variant="contained"
                                                        sx={{ backgroundColor: "orange" }}
                                                        fullWidth
                                                        onClick={() => {
                                                            navigate("/psa/requisition-order-form");
                                                        }}
                                                    >
                                                        Order Product
                                                        <LocalMallOutlinedIcon />
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Paper>
            </Box>
        </React.Fragment>
    );
};
export default ProductDetails;
