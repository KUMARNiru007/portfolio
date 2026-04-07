import './loader.css';

const Loader = () => {
  // Detect theme from document
  const isDark = typeof window !== 'undefined' 
    ? document.documentElement.classList.contains('dark')
    : true;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50"
      style={{
        backgroundColor: isDark ? 'rgb(20, 20, 20)' : 'rgb(255, 255, 255)',
      }}>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
