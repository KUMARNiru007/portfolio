import { useTheme } from '@/hooks/useTheme';
import './loader.css';

const Loader = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50 transition-opacity duration-300"
      style={{
        backgroundColor: theme === 'dark' ? 'rgba(20, 20, 20, 0.8)' : 'rgba(255, 255, 255, 0.8)',
      }}>
      <div className="loader" style={{
        background: theme === 'dark' ? '#1a1a1a' : '#ffffff',
      }}></div>
    </div>
  );
};

export default Loader;
