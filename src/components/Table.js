import React, { useContext } from 'react';
import DataTableContext from '../context/DataTableContext';

export default function Table() {
  const { filterByName, filterNameInput, filteredData,
    filterCollumn, filterCollumnInput,
    filterComparison, filterComparisonInput,
    filterQuantity, filterQuantityInput, filterSubmit,
    selectColumn, filterByNumericValues, removeFilter,
    removeAllFilters } = useContext(DataTableContext);

  return (
    <div>
      <label htmlFor="filterName">
        Name:
        <input
          id="filterName"
          type="text"
          data-testid="name-filter"
          value={ filterByName }
          onChange={ filterNameInput }
        />
      </label>

      <select
        data-testid="column-filter"
        value={ filterCollumn }
        onChange={ filterCollumnInput }
      >
        {selectColumn.map((filter, index) => (
          <option key={ index }>{filter}</option>
        ))}
      </select>

      <select
        data-testid="comparison-filter"
        value={ filterComparison }
        onChange={ filterComparisonInput }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <label htmlFor="quantity">
        Quantity:
        <input
          id="quantity"
          type="number"
          data-testid="value-filter"
          value={ filterQuantity }
          onChange={ filterQuantityInput }
        />
      </label>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterSubmit }
      >
        Filtrar
      </button>

      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ removeAllFilters }
      >
        Remover Filtros
      </button>

      <ul>
        Filtros Aplicados:
        {
          filterByNumericValues.map((filter, index) => (
            <li key={ index } data-testid="filter">
              {`${filter.column} - ${filter.comparison} - ${filter.value}`}
              <button
                type="button"
                onClick={ () => removeFilter(index) }
              >
                X
              </button>
            </li>
          ))
        }
      </ul>

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
