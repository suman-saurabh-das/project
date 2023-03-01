import './App.css';
import Header from './components/Header';
import FilterMenu from './components/FilterMenu';
import SearchResults from './components/SearchResults';

function App() {
  return (
    // App Container
    <div className="App font-inter max-w-screen-2xl m-auto">
      {/* Header */}
      <Header />

      {/* Filters Section */}
      <FilterMenu />

      {/* Search Results */}
      <SearchResults />
    </div>
  );
}

export default App;
