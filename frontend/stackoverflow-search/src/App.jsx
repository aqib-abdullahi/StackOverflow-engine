import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import ResultsPage from './pages/searchResults';
import './styles/App.css'
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;