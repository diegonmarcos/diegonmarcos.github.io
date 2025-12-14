import MapCard from '@/components/MapCard';
import Legend from '@/components/Legend';
import { getAllMaps } from '@/data/maps';

export default function Home() {
  const maps = getAllMaps();

  return (
    <>
      <header className="header">
        <h1 className="header__title">MyMaps</h1>
        <p className="header__subtitle">Strategic Map Collection</p>
      </header>

      <main className="container">
        <h2 className="section-title">Available Maps</h2>

        <div className="cards-grid">
          {maps.map((map) => (
            <MapCard key={map.config.id} config={map.config} />
          ))}
        </div>

        <Legend />
      </main>

      <footer className="footer">
        <p>Data visualization powered by Highcharts</p>
      </footer>
    </>
  );
}
