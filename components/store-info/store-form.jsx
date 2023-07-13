import { useState } from 'react';

export default function StoreForm() {
    const [location, setLocation] = useState('');
    const [minCustomer, setMinCustomer] = useState('');
    const [maxCustomer, setMaxCustomer] = useState('');
    const [avgCookieSale, setAvgCookieSale] = useState('');

    function addStore(event) {
        event.preventDefault();
        const storeLocation = location.trim();
        const minCustomers = parseInt(minCustomer);
        const maxCustomers = parseInt(maxCustomer);
        const avgCookieSales = parseFloat(avgCookieSale);

        setLocation('');
        setMinCustomer('');
        setMaxCustomer('');
        setAvgCookieSale('');
    }

    return (
        <div className="addStore">
            <img src="images/salmon.png" alt="Salmon" height="50" width="200" />
            <h2>Want to see if you could run an Upstream Cookies Store?</h2>
            {/* {/* <!-- form --> /} */}
            <form onSubmit={addStore}>
                <label>
                    Store Location
                    <input
                        type="text"
                        name="storeLocation"
                        required
                        placeholder="Store Location, i.e NYC"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                    />
                </label>
                <label>
                    Minimum Customers
                    <input
                        type="number"
                        name="minCustomer"
                        required
                        placeholder="1"
                        value={minCustomer}
                        onChange={(event) => setMinCustomer(event.target.value)}
                    />
                </label>
                <label>
                    Maximum Customers
                    <input
                        type="number"
                        name="maxCustomer"
                        required
                        placeholder="20"
                        value={maxCustomer}
                        onChange={(event) => setMaxCustomer(event.target.value)}
                    />
                </label>
                <label>
                    Avg Cookies Per Customer
                    <input
                        type="number"
                        step="0.1"
                        name="avgCookie"
                        required
                        placeholder="2.1"
                        value={avgCookieSale}
                        onChange={(event) => setAvgCookieSale(event.target.value)}
                    />
                </label>
                <div className="submission">
                    <img
                        src="images/cartoonSalmon.png"
                        alt=""
                        height="40px"
                        width="50px"
                    />
                    {/ <!-- Submission Button --> */}
                    <button type="submit">Create Store</button>
                </div>
            </form>
        </div>
    );
}
