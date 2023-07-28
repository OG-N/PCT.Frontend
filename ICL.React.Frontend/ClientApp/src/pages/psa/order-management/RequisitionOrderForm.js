import React from "react";
import {Helmet} from "react-helmet-async";
import {Box, Breadcrumbs, Button, Card, CardContent, Divider, Grid, Link, Paper, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import TextField from "@mui/material/TextField";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import { DataGrid } from '@mui/x-data-grid';
import faker from 'faker';
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

const columns = [
    {
        field: 'productName',
        headerName: 'Product Name',
        flex: 1,
        editable: false,
    },
    {
        field: 'productCategory',
        headerName: 'Product Category',
        flex: 1,
        editable: false,
    },
    {
        field: 'qualitySelection',
        headerName: 'Quantity Selection',
        type: 'number',
        flex: 1,
        editable: false,
    },
    {
        field: 'requiredDeliveryDate',
        headerName: 'Requested Delivery Date',
        sortable: false,
        flex: 1,
    },
];

const rows = [];
const totalRows = 20;

for (let id = 1; id <= totalRows; id++) {
    const productName = faker.commerce.productName();
    const productCategory = faker.commerce.department();
    const qualitySelection = getRandomInt(0, 100);
    const requiredDeliveryDate = getRandomDate('2023-01-01', '2023-12-31');

    rows.push({
        id,
        productName,
        productCategory,
        qualitySelection,
        requiredDeliveryDate: requiredDeliveryDate.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }),
    });
}

// Function to generate a random date within a given range
function getRandomDate(start, end) {
    const startDate = new Date(start).getTime();
    const endDate = new Date(end).getTime();
    const randomTimestamp = Math.random() * (endDate - startDate) + startDate;
    return new Date(randomTimestamp);
}

// Function to generate a random integer within a given range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const OrdersDataTable = () => {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
            />
        </Box>
    );
};

const RequisitionOrderForm = () => {
    return (
        <React.Fragment>
            <Helmet title="Requisition Order Form" />
            <Breadcrumbs aria-label="Breadcrumb" mt={2} gutterBottom>
                <Link component={NavLink} to="/">
                    PCT
                </Link>
                <Link component={NavLink} to="/psa">
                    Supply Chain Operations
                </Link>
                <Link component={NavLink} to="/psa/create-new-order">
                    Home
                </Link>
                <Typography>Requisition Order Form</Typography>
            </Breadcrumbs>
            <Box mt={4}>
                <Paper square={true} sx={{ borderTop: 5 }}>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Requisition Order Form
                            </Typography>
                            <Divider />
                        </CardContent>
                    </Card>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                    >
                        <Grid container spacing={2}>
                            <Grid item md={6}>
                                <TextField id="outlined-basic" label="Product Name" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item md={6}>
                                <TextField id="outlined-basic" label="Quantity Selection" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item md={6}>
                                <DatePicker
                                    label="Required Delivery Date"
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
                            <Grid item md={6} mt={6}>
                                <Button variant="contained">
                                    ADD TO LIST
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                    <OrdersDataTable />
                    <Grid container spacing={2} mt={2}>
                        <Grid item md={6}>&nbsp;</Grid>
                        <Grid item md={3}>
                            <Button
                                variant="contained"
                                sx={{ backgroundColor: "black" }}
                                fullWidth
                            >
                                CANCEL
                            </Button>
                        </Grid>
                        <Grid item md={3}>
                            <Button
                                variant="contained"
                                sx={{ backgroundColor: "orange" }}
                                fullWidth
                            >
                                SAVE ORDER REQUISITION
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </React.Fragment>
    );
};
export default RequisitionOrderForm;
