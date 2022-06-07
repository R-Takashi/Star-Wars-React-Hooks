import React from 'react';
import './App.css';
import Table from './components/Table';
import DataTableProvider from './context/DataTableProvider';

function App() {
  return (
    <DataTableProvider>
      <Table />
    </DataTableProvider>
  );
}

export default App;
