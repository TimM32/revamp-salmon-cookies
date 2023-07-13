import React from 'react';

let addStoreForm = document.getElementById(`addStoreForm`);
addStoreForm.addEventListener(`submit`, addStore);

function addStore(event) {
  event.preventDefault();
  let form = event.target;
  let location = form.storeLocation.value;
  let minCustomer = parseInt(form.minCustomer.value);
  let maxCustomer = parseInt(form.maxCustomer.value);
  let avgCookieSale = form.avgCookie.value;
  let store = new Store(location, minCustomer, maxCustomer, avgCookieSale, [], 0);
  location = location.toLowerCase();
  if (location == allStores.location) {
    alert("That is already a store");
  }
  else {
    allStores.push(store);
    store.render();
    footRow.innerHTML = "";
    tableFooter(allStores, operatingHours);
    parentElement.innerHTML = "";
    finalCookies(allStores);
  }
}

