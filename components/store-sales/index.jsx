import React from 'react';
import { Grid, Paper, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Typography } from '@mui/material';

// Global variables
class Store {
  constructor(location, minCustomer, maxCustomer, avgCookieSale, hourlySales, totalSales) {
    this.location = location;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookieSale = avgCookieSale;
    this.hourlySales = hourlySales;
    this.totalSales = totalSales;
    this.storeCalculator();
  }

  // Function to calculate hourly sales and total sales
  storeCalculator() {
    for (let i = 0; i < operatingHours.length; i++) {
      const hourlyCustomers = randNumber(this.minCustomer, this.maxCustomer);
      const avgCookiePerCustomer = Math.floor(hourlyCustomers * this.avgCookieSale);
      // Pushes the avg cookie per customer to the hourly sales
      this.hourlySales.push(avgCookiePerCustomer);
      this.totalSales += this.hourlySales[i];
    }
  }

  // Renders the store's sales information
  render() {
    return (
      <TableRow key={this.location}>
        <TableCell>{this.location}</TableCell>
        {this.hourlySales.map((hourlySale, index) => (
          <TableCell key={index}>{hourlySale}</TableCell>
        ))}
        <TableCell>{this.totalSales}</TableCell>
      </TableRow>
    );
  }
}

// Other global variables and functions from the original code
const operatingHours = [
  '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'
];
const allStores = [
  new Store('Seattle', 23, 65, 6.3, [], 0),
  new Store('Tokyo', 3, 24, 1.2, [], 0),
  new Store('Dubai', 1, 38, 3.7, [], 0),
  new Store('Paris', 20, 38, 2.3, [], 0),
  new Store('Lima', 2, 16, 4.6, [], 0)
];

// Function to generate a random number within a range
function randNumber(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

// SalesInfo component
const SalesInfo = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Sales Information
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Location</TableCell>
              {operatingHours.map((hour, index) => (
                <TableCell key={index}>{hour}</TableCell>
              ))}
              <TableCell>Daily Location Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allStores.map((store) => store.render())}
            <TableRow>
              <TableCell>Total Cookies Sold:</TableCell>
              {operatingHours.map((_, index) => (
                <TableCell key={index}>
                  {allStores.reduce((total, store) => total + store.hourlySales[index], 0)}
                </TableCell>
              ))}
              <TableCell>{allSales(allStores)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

// Function to calculate total sales for all stores
const allSales = (stores) => {
  return stores.reduce((total, store) => total + store.totalSales, 0);
};

export { SalesInfo, allStores };
