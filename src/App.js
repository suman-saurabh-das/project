import React, { createContext, useState } from 'react';

import Header from './components/Header';
import FilterMenu from './components/FilterMenu';
import SearchResults from './components/SearchResults';
import Sidebar from './components/Sidebar';

export const SideBarContext = createContext()

function App() {

  // useState hook and function to toggle sidebar in small devices
  const [isSidebarVisible, setIsSidebarVisible] = useState("-left-[540px]")
  const handleSideBarVisibility = (value) => {
    value ? setIsSidebarVisible("") : setIsSidebarVisible("-left-[540px]")
  }
  // Disable scrolling when sidebar is open
  isSidebarVisible ? document.body.style.overflow="auto" : document.body.style.overflow="hidden"

  return (
    // App Container
    <SideBarContext.Provider value={[handleSideBarVisibility, isSidebarVisible]}>
      <div className="App font-inter max-w-screen-2xl m-auto">
        {/* Sidebar */}
        <Sidebar />

        {/* Header */}
        <Header />

        {/* Filters Section */}
        <FilterMenu />

        {/* Search Results */}
        <SearchResults />
      </div>
    </SideBarContext.Provider>
  );
}

export default App;
