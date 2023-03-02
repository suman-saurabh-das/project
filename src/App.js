import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header';
import FilterMenu from './components/FilterMenu';
import SearchResults from './components/SearchResults';
import Sidebar from './components/Sidebar';

export const SideBarContext = createContext()

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState("-left-[500px]")
  const handleSideBarVisibility = (value) => {
    value ? setIsSidebarVisible("") : setIsSidebarVisible("-left-[500px]")
  }

  return (
    // App Container
    <SideBarContext.Provider value={[handleSideBarVisibility, isSidebarVisible]}>
      <div className="App font-inter max-w-screen-2xl m-auto">
        {/* Sidebar */}
        <Sidebar />

        <div className="App font-inter max-w-screen-2xl m-auto">
          {/* Header */}
          <Header />

          {/* Filters Section */}
          <FilterMenu />

          {/* Search Results */}
          <SearchResults />
        </div>
      </div>
    </SideBarContext.Provider>
  );
}

export default App;
