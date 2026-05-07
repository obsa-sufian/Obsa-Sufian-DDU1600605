const SimpleMap = () => (
  <div>
    <h2>Simple Map</h2>
    <div className="ratio ratio-16x9">
      <iframe
        title="Map"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
        style={{ border: '1px solid black' }}
      ></iframe>
    </div>
    <small>
      <a href="https://www.openstreetmap.org/#map=19/51.47735/-0.00185" target="_blank" rel="noreferrer">
        View Larger Map
      </a>
    </small>
  </div>
);
export default SimpleMap;

