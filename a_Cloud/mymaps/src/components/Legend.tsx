interface LegendProps {
  items: Array<{
    label: string;
    color: string;
    icon?: string;
    count?: number;
  }>;
  title?: string;
}

export default function Legend({ items, title = 'Legend' }: LegendProps) {
  if (items.length === 0) return null;

  return (
    <div className="map-legend">
      <h4>{title}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="legend-item">
            {item.icon ? (
              <img src={item.icon} alt={item.label} className="legend-icon" />
            ) : (
              <span
                className="legend-color"
                style={{ backgroundColor: item.color }}
              />
            )}
            <span className="legend-label">{item.label}</span>
            {item.count !== undefined && (
              <span className="legend-count">({item.count})</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
