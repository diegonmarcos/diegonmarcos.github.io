'use client';

import dynamic from 'next/dynamic';

const CityMap = dynamic(() => import('./CityMap'), { 
  ssr: false,
  loading: () => <div style={{ height: 'calc(100vh - 200px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading Map...</div>
});

export default function ClientCityMap() {
  return <CityMap />;
}
