import './App.css';
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css'

function App() {
  return (
    <div className="App">
      <h1>Stack Overflow Search</h1>
      <form>
        <div class="input-bar">
        <i class="las la-search"></i><input type="text" placeholder="Enter search query"/>
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;