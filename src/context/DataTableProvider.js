import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DataTableContext from './DataTableContext';

const collumnFilter = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

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

  const [filterByName, setfilterByName] = useState('');

  const filterNameInput = ({ target }) => {
    setfilterByName(target.value);
  };

  const [filteredData, setFilteredData] = useState([...data]);

  const [filterByNumericValues, setfilterByNumericValues] = useState([]);

  useEffect(() => {
    const filteredByName = data.filter((planet) => (
      planet.name.toLowerCase().includes(filterByName)
    ));

    console.log(filterByNumericValues);
    const newList = filterByNumericValues
      .reduce((acc, filterKey) => acc.filter((planet) => {
        switch (filterKey.comparison) {
        case 'maior que':
          return Number(planet[filterKey.column]) > Number(filterKey.value);
        case 'menor que':
          return Number(planet[filterKey.column]) < Number(filterKey.value);
        case 'igual a':
          return Number(planet[filterKey.column]) === Number(filterKey.value);
        default:
          return planet;
        }
      }), filteredByName);
    setFilteredData(newList);
  }, [data, filterByName, filterByNumericValues]);

  const [filterCollumn, setfilterCollumn] = useState('population');

  const filterCollumnInput = ({ target }) => {
    setfilterCollumn(target.value);
  };

  const [filterComparison, setfilterComparison] = useState('maior que');

  const filterComparisonInput = ({ target }) => {
    setfilterComparison(target.value);
  };

  const [filterQuantity, setfilterQuantity] = useState(0);

  const filterQuantityInput = ({ target }) => {
    setfilterQuantity(target.value);
  };

  const [selectColumn, setSelectColumn] = useState(collumnFilter);

  const filterSubmit = () => {
    const newFilter = {
      column: filterCollumn,
      comparison: filterComparison,
      value: filterQuantity,
    };
    setfilterByNumericValues([...filterByNumericValues, newFilter]);
    const newSelect = selectColumn.filter((select) => select !== filterCollumn);
    setSelectColumn(newSelect);
  };

  const contextValue = {
    data,
    filterByName,
    filterNameInput,
    filteredData,
    filterCollumn,
    filterCollumnInput,
    filterComparison,
    filterComparisonInput,
    filterQuantity,
    filterQuantityInput,
    filterSubmit,
    selectColumn,
  };

  return (
    <DataTableContext.Provider value={ contextValue }>
      {children}
    </DataTableContext.Provider>
  );
}

DataTableProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataTableProvider;
