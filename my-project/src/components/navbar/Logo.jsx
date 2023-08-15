import { useNavigate } from 'react-router-dom';
import { LogoIcon } from '../../icons/icon';
import { motion } from 'framer-motion';

const Logo = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div
      className="flex-1"
      onClick={handleLogoClick}
      style={{ cursor: 'pointer' }}
    >
      <motion.div
        whileHover={{ scale: 1.2, rotate: 360 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
        }}
      >
        <LogoIcon />
      </motion.div>

      <a className="btn btn-ghost normal-case text-xl hover:bg-transparent">
        CoinSearch
      </a>
    </div>
  );
};

export default Logo;
