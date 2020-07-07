import React from 'react';
import './pagination.css';

const Pagination = () => {
  return (
    <ul className='pagination'>
      <li className='waves-effect'>
        <a href='#!'>
          <i className='material-icons'>chevron_left</i>
        </a>
      </li>
      <li className='waves-effect'>
        <a href='#!'>
          <i className='material-icons'>chevron_right</i>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
