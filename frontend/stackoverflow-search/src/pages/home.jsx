import Search from '../components/search';
import '../styles/App.css'


function HomePage() {
  return (
    <div className="App">
      <h1>StackOverflow Search</h1>
      <p className="title">A StackOverflow search engine</p>
      <Search />
    </div>
  );
}

export default HomePage;