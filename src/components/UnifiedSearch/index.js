import React, { Fragment, useState } from 'react';
import '../styles.css';
import SearchOverlay from './SearchOverlay.js';
import Search from '../../globals/icons/Search/index.js';

export default function SearchComponent({ indices }) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <Fragment>
      <div
        onClick={() => setShowSearch(preShowSearch => !preShowSearch)}
      >
        <Search variant="grey100" size="md" />
      </div>
      <SearchOverlay showSearch={showSearch} onCloseSearch={() => setShowSearch(false)} defaultIndex={indices[0]} />
    </Fragment>
  );
}
