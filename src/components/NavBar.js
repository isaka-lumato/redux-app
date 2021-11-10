/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ links }) {
  return (
    <div>
      <ul>
        {links.map((linky) => (
          <Link to={linky.route} key={linky.id}>
            {' '}
            <li key={linky.id}>{linky.val}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
export default NavBar;
