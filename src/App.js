import React from 'react';
import Spreadsheet from './spreadsheet/Spreadsheet';
import mock from './mocks/ilots';

function App() {

  const customSort = () => {
    console.log('hello i am sort by a custom function');
  };

  const structure = {
    idBy: 'recordid',
    columns: [
      {
        name: 'adresse',
        linkTo: 'fields,arrondissement',
        sortBy: ['unset', 'increasing', 'decreasing'],
      },
      {
        name: 'nom',
        linkTo: 'fields,nom',
        sortBy: ['unset', 'increasing', 'decreasing'],
      },
      {
        name: 'payant',
        linkTo: 'fields,payant',
        sortBy: ['unset', 'increasing', 'decreasing', { name: 'custom', action: customSort }],
      },
    ]
  };

  const limit = 10;

  return (
      <Spreadsheet
        structure={structure}
        source={mock}
        limit={limit}
      />
  );
}

export default App;
