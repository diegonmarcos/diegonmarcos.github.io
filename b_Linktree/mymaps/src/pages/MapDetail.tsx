import { Link, useParams } from 'react-router-dom';
import MapViewer from '@/components/MapViewer';
import Legend from '@/components/Legend';
import { getMapById } from '@/data/maps';
import CityMapWrapper from '@/components/CityMapWrapper';

export default function MapDetail() {
  const { id } = useParams<{ id: string }>();
  const mapData = getMapById(id || '');

  if (!mapData) {
    return (
      <div className="container">
        <h2>Map not found</h2>
        <Link to="/">Return Home</Link>
      </div>
    );
  }

  return (
    <>
      <header className="header" style={{ position: 'relative' }}>
        <Link
          to="/"
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#888',
            fontSize: '0.9rem',
            textDecoration: 'none'
          }}
        >
          ← Back to Maps
        </Link>
        <h1 className="header__title">{mapData.config.title}</h1>
        <p className="header__subtitle">Map: {mapData.config.mapPath}</p>
      </header>

      {mapData.config.type === 'City' ? (
        <div className="city-map-wrapper">
          <CityMapWrapper />
        </div>
      ) : (
        <MapViewer mapData={mapData} />
      )}

      <div className="container">
        <Legend />
      </div>
    </>
  );
}
