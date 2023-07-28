import React from "react";
import { Box, Grid, Pagination, Paper, Typography } from '@mui/material';
import {NavLink} from "react-router-dom";

const itemsPerPage = 8; // Number of items per page

const data = [
    { id: 1, title: 'Item 1', description: 'Description for Item 1' },
    { id: 2, title: 'Item 2', description: 'Description for Item 2' },
    { id: 3, title: 'Item 3', description: 'Description for Item 3' },
    { id: 4, title: 'Item 4', description: 'Description for Item 4' },
    { id: 5, title: 'Item 5', description: 'Description for Item 5' },
    { id: 6, title: 'Item 6', description: 'Description for Item 6' },
    { id: 7, title: 'Item 7', description: 'Description for Item 7' },
    { id: 8, title: 'Item 8', description: 'Description for Item 8' },
    { id: 9, title: 'Item 9', description: 'Description for Item 9' },
    { id: 10, title: 'Item 10', description: 'Description for Item 10' },
    { id: 11, title: 'Item 11', description: 'Description for Item 11' },
    { id: 12, title: 'Item 12', description: 'Description for Item 12' },
    { id: 13, title: 'Item 13', description: 'Description for Item 13' },
    { id: 14, title: 'Item 14', description: 'Description for Item 14' },
    { id: 15, title: 'Item 15', description: 'Description for Item 15' },
    { id: 16, title: 'Item 16', description: 'Description for Item 16' },
    { id: 17, title: 'Item 17', description: 'Description for Item 17' },
    { id: 18, title: 'Item 18', description: 'Description for Item 18' },
    { id: 19, title: 'Item 19', description: 'Description for Item 19' },
    { id: 20, title: 'Item 20', description: 'Description for Item 20' },
    { id: 21, title: 'Item 21', description: 'Description for Item 21' },
    { id: 22, title: 'Item 22', description: 'Description for Item 22' },
    { id: 23, title: 'Item 23', description: 'Description for Item 23' },
    { id: 24, title: 'Item 24', description: 'Description for Item 24' },
    { id: 25, title: 'Item 25', description: 'Description for Item 25' },
    { id: 26, title: 'Item 26', description: 'Description for Item 26' },
    { id: 27, title: 'Item 27', description: 'Description for Item 27' },
    { id: 28, title: 'Item 28', description: 'Description for Item 28' },
    { id: 29, title: 'Item 29', description: 'Description for Item 29' },
    { id: 30, title: 'Item 30', description: 'Description for Item 30' },
];

const ProductsTileTable = () => {
    const [page, setPage] = React.useState(1);

    // Calculate total number of pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Slice data for the current page
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = data.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <Box mt={4}>
            <Grid container spacing={2}>
                {currentPageData.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                        <Paper variant="outlined" sx={{ p: 2 }}>
                            <NavLink to={`/psa/product-details`}>
                                <Typography variant="h6">{item.title}</Typography>
                                <Typography variant="body2">{item.description}</Typography>
                            </NavLink>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            <Box mt={2} display="flex" justifyContent="center">
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                    color="primary"
                />
            </Box>
        </Box>
    );
};
export default ProductsTileTable;
