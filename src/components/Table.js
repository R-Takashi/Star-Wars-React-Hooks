import React, { useContext, useEffect, useState } from 'react';
import DataTableContext from '../context/DataTableContext';

export default function Table() {
  const { data } = useContext(DataTableContext);

  const [filterName, setFilterName] = useState({
    filterByName: {
      name: '',
    },
  });
  // const [filterName, setFilterName] = useState('');

  const [filteredData, setFilteredData] = useState([...data]);

  const inputFilterName = ({ target }) => {
    // setFilterName(target.value);
    setFilterName({
      filterByName: {
        name: target.value,
      },
    });
  };

  useEffect(() => {
    setFilteredData(data.filter((planet) => (
      planet.name.toLowerCase().includes(filterName.filterByName.name)
    )));
  }, [data, filterName]);

  return (
    <div>
      <label htmlFor="filterName">
        Name:
        <input
          id="filterName"
          type="text"
          name="filterByName"
          data-testid="name-filter"
          onChange={ inputFilterName }
        />
      </label>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          { filteredData.map((planet, index) => (
            <tr key={ index }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>
                {planet.films.map((film, indexFilm) => (<p key={ indexFilm }>{film}</p>))}
              </td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
