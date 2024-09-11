import './App.css';
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, sethasSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    sethasSearched(false);

    try {
      const response = await axios.get(`http://localhost:8000/api/search/?q=${query}`);
      setResults(response.data.items);
    } catch (err) {
      setError('An error occured while fetching results.');
      console.error('errror fetching results:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setHasSearched(false);
  };

  return (
    <div className="App">
      <h1>StackOverflow Search</h1>
      <p className='title'>A StackOverflow search engine</p>
      <form onSubmit={handleSearch}>
        <div class="input-bar">
        <i class="las la-search"></i><input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Enter search query"/>
        {query && <button type="button" className="clear-button" onClick={handleClear}>×</button>}
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && <p className="error">{error}</p>}
      <div className="results">
        {results.length > 0 ? (
          results.map((item) => (
            <div key={item.question_id} className="result-item">
              <h3>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </h3>
              <p>Score: {item.score}</p>
              <p>Tags: {item.tags.join(', ')}</p>
            </div>
          ))
        
        ) : (
          hasSearched && <p>No results found</p>
        )}
      </div>

    </div>
  );
}

export default App;