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

    const sortedNewList = newList.sort((a, b) => {
      const MAGIC = -1;
      if (a.name < b.name) return MAGIC;
      if (a.name > b.name) return 1;
      return 0;
    });
    setFilteredData(sortedNewList);
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
    setfilterCollumn(newSelect[0]);
  };

  const removeFilter = (index) => {
    setfilterByNumericValues(
      filterByNumericValues.filter((_filter, filterIndex) => filterIndex !== index),
    );
  };

  const removeAllFilters = () => {
    setfilterByNumericValues([]);
    setSelectColumn(collumnFilter);
  };

  useEffect(() => {
    const selectReturn = collumnFilter.reduce((acc, select) => {
      if (filterByNumericValues.some((filt) => filt.column === select)) {
        return acc;
      }
      acc.push(select);
      return acc;
    }, []);
    setSelectColumn(selectReturn);
  }, [filterByNumericValues]);

  const [orderCollumn, setOrderCollumn] = useState('');

  const orderColumnInput = ({ target }) => {
    setOrderCollumn(target.value);
  };

  const [sortType, setSortType] = useState('');

  const sortInput = ({ target }) => {
    setSortType(target.value);
  };

  const [order, setOrder] = useState({
    column: '',
    sort: '',
  });

  const orderPlanets = () => {
    setOrder({
      column: orderCollumn,
      sort: sortType,
    });
  };

  const [planetsData, setPlanetsData] = useState({
    unknownData: [],
    planets: [],
  });

  useEffect(() => {
    const unknownData = data
      .filter((planet) => planet[order.column] === 'unknown');
    const planets = data.filter((planet) => planet[order.column] !== 'unknown');
    setPlanetsData({
      unknownData,
      planets,
    });
  }, [order, data]);

  useEffect(() => {
    let sortedList = [];
    const { unknownData, planets } = planetsData;

    if (order.sort === 'ASC') {
      sortedList = planets
        .sort((a, b) => Number(a[order.column]) - Number(b[order.column]));
      return setFilteredData([...sortedList, ...unknownData]);
    }
    if (order.sort === 'DESC') {
      sortedList = planets
        .sort((a, b) => Number(b[order.column]) - Number(a[order.column]));
      return setFilteredData([...sortedList, ...unknownData]);
    }
  }, [order, planetsData]);

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
    filterByNumericValues,
    removeFilter,
    removeAllFilters,
    collumnFilter,
    orderCollumn,
    orderColumnInput,
    sortInput,
    orderPlanets,
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
