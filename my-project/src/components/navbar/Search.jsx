import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';

const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const { data: coinList } = useFetch('/coins/list');

  const handleSearch = (e) => {
    e.preventDefault();
    const matchedCoin = coinList.find(
      (coin) =>
        coin.name.toLowerCase() === query.toLowerCase() ||
        coin.id.toLowerCase() === query.toLowerCase() ||
        coin.symbol.toLowerCase() === query.toLowerCase(),
    );

    if (matchedCoin) {
      navigate(`/coin/${matchedCoin.id}`);
    } else {
      navigate('/coin-not-found');
    }

    setQuery('');
  };

  return (
    <form onSubmit={handleSearch} className="form-control">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-24 md:w-auto"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default Search;
