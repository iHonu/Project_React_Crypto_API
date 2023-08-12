import { useNavigate } from 'react-router-dom';
import AppLogo from './AppLogo';
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
      <AppLogo />
      <a className="btn btn-ghost normal-case text-xl hover:bg-transparent">
        CoinSearch
      </a>
    </div>
  );
};

export default Logo;
