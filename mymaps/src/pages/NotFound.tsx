import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The requested map or page does not exist.</p>
      <Link to="/" style={{ color: '#0070f3' }}>Go back home</Link>
    </div>
  );
}
