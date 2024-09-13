import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Result from '../components/results';
import '../styles/App.css'

function ResultsPage() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    if (query) {
      const fetchResults = async () => {
        setIsLoading(true);
        setError(null);

        try {
          const response = await axios.get(`http://localhost:8000/api/search/?q=${query}`);
          setResults(response.data.items);
        } catch (err) {
          setError('An error occurred while fetching results.');
          console.error('Error fetching results:', err);
        } finally {
          setIsLoading(false);
        }
      };

      fetchResults();
    }
  }, [query]);

  return (
    <div className="App">
      {/* <h1>Search Results for "{query}"</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>} */}
      <Result results={results} query={query} />
    </div>
  );
}

export default ResultsPage;