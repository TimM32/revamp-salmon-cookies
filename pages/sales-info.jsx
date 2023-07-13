import React from 'react';
import Layout from '@/components/layout';
import { SalesInfo, allStores } from '@/components/store-sales';

export default function SalesInfoPage() {
  return (
    <Layout>
      <React.StrictMode>
        <div>
          <SalesInfo stores={allStores} />
        </div>
      </React.StrictMode>
    </Layout>
  );
}
