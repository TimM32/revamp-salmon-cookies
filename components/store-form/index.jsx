'use client';

import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';

import salmon from '@/images/salmon.png';
import Image from 'next/image';


export default function StoreForm({ onStoreAdded }) {
    const [location, setLocation] = useState('');
    const [minCustomer, setMinCustomer] = useState('');
    const [maxCustomer, setMaxCustomer] = useState('');
    const [avgCookieSale, setAvgCookieSale] = useState('');

    const addStore = (event) => {
        event.preventDefault();
        const storeLocation = location.trim();
        const minCustomers = parseInt(minCustomer);
        const maxCustomers = parseInt(maxCustomer);
        const avgCookieSales = parseFloat(avgCookieSale);

        // Create a new store object
        const newStore = {
            location: storeLocation,
            minCustomer: minCustomers,
            maxCustomer: maxCustomers,
            avgCookieSale: avgCookieSales,
            hourlySales: [],
            totalSales: 0
        };

        // Call the onStoreAdded callback to pass the new store to the parent component
        onStoreAdded(newStore);

        // Reset the form fields
        setLocation('');
        setMinCustomer('');
        setMaxCustomer('');
        setAvgCookieSale('');
    };

    return (
        <Box sx={{ maxWidth: 400, margin: '0 auto' }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12}>
                    <Image src={salmon} alt="Salmon" height="50" width="200" />
                    <Typography variant="h5" align="center">
                        Want to see if you could run an Upstream Cookies Store?
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Store Location"
                        variant="outlined"
                        fullWidth
                        required
                        placeholder="Store Location, i.e NYC"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Minimum Customers"
                        variant="outlined"
                        fullWidth
                        type="number"
                        required
                        placeholder="1"
                        value={minCustomer}
                        onChange={(event) => setMinCustomer(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Maximum Customers"
                        variant="outlined"
                        fullWidth
                        type="number"
                        required
                        placeholder="20"
                        value={maxCustomer}
                        onChange={(event) => setMaxCustomer(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Avg Cookies Per Customer"
                        variant="outlined"
                        fullWidth
                        type="number"
                        step="0.1"
                        required
                        placeholder="2.1"
                        value={avgCookieSale}
                        onChange={(event) => setAvgCookieSale(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} textAlign="center">
                    <Button type="submit" variant="contained" onClick={addStore}>
                        Create Store
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}
