import Link from 'next/link';
import { notFound } from 'next/navigation';
import MapViewer from '@/components/MapViewer';
import Legend from '@/components/Legend';
import { getMapById, getAllMaps } from '@/data/maps';

interface MapPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const maps = getAllMaps();
  return maps.map((map) => ({
    id: map.config.id,
  }));
}

export default async function MapPage({ params }: MapPageProps) {
  const { id } = await params;
  const mapData = getMapById(id);

  if (!mapData) {
    notFound();
  }

  return (
    <>
      <header className="header" style={{ position: 'relative' }}>
        <Link
          href="/"
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#888',
            fontSize: '0.9rem',
          }}
        >
          ← Back to Maps
        </Link>
        <h1 className="header__title">{mapData.config.title}</h1>
        <p className="header__subtitle">Map: {mapData.config.mapPath}</p>
      </header>

      <MapViewer mapData={mapData} />

      <div className="container">
        <Legend />
      </div>
    </>
  );
}
