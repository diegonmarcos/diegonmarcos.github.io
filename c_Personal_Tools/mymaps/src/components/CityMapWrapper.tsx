import React, { Suspense, lazy } from 'react';

const CityMap = lazy(() => import('./CityMap'));

export default function CityMapWrapper() {
  return (
    <Suspense fallback={<div style={{ height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading Map...</div>}>
      <CityMap />
    </Suspense>
  );
}
