import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DataTableContext from './DataTableContext';

function DataTableProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
        const { results } = await response.json();
        const planets = results.map((planet) => {
          delete planet.residents;
          return planet;
        });
        setData(planets);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  const contextType = {
    data,
    setData,
  };

  return (
    <DataTableContext.Provider value={ contextType }>
      {children}
    </DataTableContext.Provider>
  );
}

DataTableProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataTableProvider;
