'use client';

import { Link } from 'react-router-dom';
import { MapConfig } from '@/data/types';

interface MapCardProps {
  config: MapConfig;
}

export default function MapCard({ config }: MapCardProps) {
  return (
    <Link to={`/map/${config.id}`} className="card">
      <div className="card__icon">{config.icon}</div>
      <div className="card__title">{config.title}</div>
      <div className="card__description">{config.description}</div>
      <div className="card__meta">
        <span>{config.type}</span>
        <span>{config.mapPath}</span>
      </div>
    </Link>
  );
}
