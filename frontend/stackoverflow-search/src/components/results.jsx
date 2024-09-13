import '../styles/App.css'
// import query from '../pages/searchResults';

function Result({ results }) {
    return (
      <div className="results">
        {/* <h1>Search Results for "{query}"</h1> */}
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
          <p>No results found</p>
        )}
      </div>
    );
  }
  
  export default Result;  