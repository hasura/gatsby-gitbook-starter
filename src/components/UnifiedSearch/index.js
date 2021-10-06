import React, { Fragment, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import '../styles.css';
import SearchOverlay from './SearchOverlay.js';
import Search from '../../globals/icons/Search/index.js';

const SearchOverlayPortal = ({ children }) => createPortal(
  children,
  document.getElementById("react-portal-wrapper")
);

export default function SearchComponent({ indices }) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <Fragment>
      <div
        onClick={() => setShowSearch(preShowSearch => !preShowSearch)}
        className="cursorPointer searchIconWrapper"
      >
        <Search variant="grey100" size="md" />
      </div>
      <SearchOverlayPortal>
        <SearchOverlay showSearch={showSearch} onCloseSearch={() => setShowSearch(false)} defaultIndex={indices[0]} />
      </SearchOverlayPortal>
    </Fragment>
  );
}
