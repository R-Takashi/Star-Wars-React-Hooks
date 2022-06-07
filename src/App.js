import React from 'react';
import './App.css';
import Table from './components/Table';
import DataTableProvider from './context/DataTableProvider';

function App() {
  return (
    <DataTableProvider>
      <h1>stá uórs</h1>
      <Table />
    </DataTableProvider>
  );
}

export default App;
