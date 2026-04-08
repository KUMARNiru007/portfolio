import './loader.css';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-background">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
