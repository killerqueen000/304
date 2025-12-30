function FeatureList({ items }) {
  return (
    <div className="feature-grid">
      {items.map((item, index) => (
        <div className="feature-item" key={index}>
          <div className="number-circle">{index + 1}</div>
          
          <div className="feature-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeatureList;
