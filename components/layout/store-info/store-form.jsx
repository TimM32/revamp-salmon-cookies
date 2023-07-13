import React from 'react';

let addStoreForm = document.getElementById(`addStoreForm`);

export default function StoreForm() {

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

    return (
        
            <div class="addStore">
                <img src="images/salmon.png" alt="Salmon" height="50" width="200" />
                <h2>Want to see if you could run an Upstream Cookies Store?</h2>
                {/* <!-- form --> */}
                <form id="addStoreForm" />
                    <label>
                        Store Location
                        <input
                            type="text"
                            name="storeLocation"
                            required
                            placeholder="Store Location, i.e NYC"
                        />
                    </label>
                    <label>
                        Minimum Customers
                        <input type="number" name="minCustomer" required placeholder="1" />
                    </label>
                    <label>
                        Maximum Customers
                        <input type="number" name="maxCustomer" required placeholder="20" />
                    </label>
                    <label>
                        Avg Cookies Per Customer
                        <input
                            type="number"
                            step="0.1"
                            name="avgCookie"
                            required
                            placeholder="2.1"
                        />
                    </label>
                    <div class="submission">
                        <img
                            src="images/cartoonSalmon.png"
                            alt=""
                            height="40px"
                            width="50px"
                        />
                        {/* <!-- Submission Button --> */}
                        <button type="submit">Create Store</button>
                    </div>
                    </div>
                
                );

    
}