const Layout = ({ children }) => {
  return (
    <div style={{ backgroundColor: '#333' }}>
      <div
        style={{
          maxWidth: '640px',
          minHeight: '100vh',
          margin: '0 auto',
          display: 'flex',
        }}>
        <div style={{ flex: 1 }}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
