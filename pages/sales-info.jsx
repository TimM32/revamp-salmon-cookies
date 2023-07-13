import React from 'react';

import Layout from '@/components/layout';
import { SalesInfo, allStores } from '@/components/store-sales';
import StoreForm from '@/components/store-form';

export default function SalesInfoPage() {
  const handleStoreAdded = (newStore) => {
    // Handle the new store data
    console.log(newStore);
  };
  return (
    <React.StrictMode>
      <Layout>
        <>
          <SalesInfo stores={allStores} />
          <StoreForm onStoreAdded={handleStoreAdded} />
        </>
      </Layout>
    </React.StrictMode>
  );
}
