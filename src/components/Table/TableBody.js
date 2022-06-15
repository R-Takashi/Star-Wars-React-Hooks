import React, { useContext } from 'react';
import DataTableContext from '../../context/DataTableContext';

export default function TableBody() {
  const { filteredData } = useContext(DataTableContext);
  return (
    <tbody>
      { filteredData.map((planet, index) => (
        <tr key={ index }>
          <td data-testid="planet-name">{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.population}</td>
          <td>
            {planet.films.map((film, indexFilm) => <p key={ indexFilm }>{film}</p>)}
          </td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>{planet.url}</td>
        </tr>
      ))}
    </tbody>
  );
}
