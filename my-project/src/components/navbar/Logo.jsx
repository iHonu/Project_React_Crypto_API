import { useNavigate } from 'react-router-dom';
import { LogoIcon } from '../../icons/icon';

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
      <LogoIcon />
      <a className="btn btn-ghost normal-case text-xl hover:bg-transparent">
        CoinSearch
      </a>
    </div>
  );
};

export default Logo;
