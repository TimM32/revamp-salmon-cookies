import React, { useState } from 'react';
import Layout from '@/components/layout';
import { SalesInfo, allStores, allSales } from '@/components/store-sales';
import StoreForm from '@/components/store-form';

export default function SalesInfoPage() {
  const [stores, setStores] = useState(allStores);

  const handleStoreAdded = (newStore) => {
    const updatedStores = [...stores, newStore];
    setStores(updatedStores);
    console.log('Updated Store: ', updatedStores);
  };

  const totalSales = allSales(stores);

  return (
    <Layout>
      <>
        <SalesInfo stores={stores} />
        <StoreForm onStoreAdded={handleStoreAdded} />
        <div>Total Sales: {totalSales}</div>
      </>
    </Layout>
  );
}
