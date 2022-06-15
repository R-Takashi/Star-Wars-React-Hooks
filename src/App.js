import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Table from './components/Table';
import DataTableProvider from './context/DataTableProvider';
import background from './images/background.svg';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
}

body{
  background-color: #000;
  background-size: 70px,100%;
  background-image: url(${background});
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <DataTableProvider>
        <Table />
      </DataTableProvider>
    </>
  );
}

export default App;
