import React, { useContext } from 'react';
import DataTableContext from '../../context/DataTableContext';
import FormStyled from './style';

export default function Form() {
  const { filterByName, filterNameInput, filterCollumn, filterCollumnInput,
    filterComparison, filterComparisonInput, filterQuantity, filterQuantityInput,
    filterSubmit, selectColumn, filterByNumericValues, removeFilter, removeAllFilters,
    collumnFilter, orderCollumn, orderColumnInput, sortInput, orderPlanets,
  } = useContext(DataTableContext);

  return (
    <FormStyled renderFilter={ filterByNumericValues.length > 0 }>

      <div className="filterName">
        <h1>Planeta</h1>
        <input
          id="filterName"
          type="text"
          data-testid="name-filter"
          value={ filterByName }
          onChange={ filterNameInput }
        />
      </div>

      <form>

        <div>
          Coluna:
          <select
            data-testid="column-filter"
            value={ filterCollumn }
            onChange={ filterCollumnInput }
          >
            {selectColumn.map((filter, index) => (
              <option key={ index }>{filter}</option>
            ))}
          </select>
        </div>

        <div>
          Operador:
          <select
            data-testid="comparison-filter"
            value={ filterComparison }
            onChange={ filterComparisonInput }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </div>

        <div>
          Quantidade:
          <input
            type="number"
            data-testid="value-filter"
            value={ filterQuantity }
            onChange={ filterQuantityInput }
          />
        </div>

        <button
          type="button"
          data-testid="button-filter"
          onClick={ filterSubmit }
        >
          Filtrar
        </button>

        <div>
          Ordenar Planetas:
          <select
            id="orderColumn"
            data-testid="column-sort"
            value={ orderCollumn }
            onChange={ orderColumnInput }
          >
            <option value="">Selecione</option>
            {collumnFilter.map((filter, index) => (
              <option key={ index }>{filter}</option>
            ))}
          </select>
        </div>

        <div className="sort">

          <label htmlFor="sortAsc">
            ASCENDENTE:
            <input
              type="radio"
              name="sort"
              id="sortAsc"
              value="ASC"
              data-testid="column-sort-input-asc"
              onClick={ sortInput }
            />
          </label>
          <label htmlFor="sortDesc">
            DESCENDENTE:
            <input
              type="radio"
              name="sort"
              id="sortDesc"
              value="DESC"
              data-testid="column-sort-input-desc"
              onClick={ sortInput }
            />
          </label>
        </div>

        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ orderPlanets }
        >
          Ordernar
        </button>

      </form>
      <section>
        {filterByNumericValues.length > 0 && (
          <>
            <ul>
              Filtros Aplicados:
              {filterByNumericValues.map((filter, index) => (
                <li key={ index } data-testid="filter">
                  {`${filter.column} - ${filter.comparison} - ${filter.value}`}
                  <button
                    type="button"
                    onClick={ () => removeFilter(index) }
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
            <button
              id="removeAllFilters"
              className="removeAll"
              type="button"
              data-testid="button-remove-filters"
              onClick={ removeAllFilters }
            >
              Remover Filtros
            </button>
          </>
        )}
      </section>
    </FormStyled>
  );
}
