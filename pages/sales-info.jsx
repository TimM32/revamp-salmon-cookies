import React from 'react';

import Layout from '@/components/layout';
import { SalesInfo, allStores } from '@/components/store-sales';
import { StoreForm } from '@/components/store-info/store-form'

export default function SalesInfoPage() {
  return (
    <Layout>
      <React.StrictMode>
        <div>
          <SalesInfo stores={allStores} />
   <StoreForm />
        </div>
      </React.StrictMode>
    </Layout>
  );
}
