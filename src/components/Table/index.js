import React from 'react';
import Form from '../Form';
import TableStyle from './style';
import TableBody from './TableBody';
import TableHead from './TableHead';
import logo from '../../images/star-wars-logo.png';

export default function Table() {
  return (
    <TableStyle>
      <header>
        <img src={ logo } alt="star-wars-logo" />
        <h2> PLANETS SEARCH</h2>
      </header>
      <div>
        <Form />
        <section>
          <table>
            <TableHead />
            <TableBody />
          </table>
        </section>
      </div>
    </TableStyle>
  );
}
