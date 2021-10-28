import React from 'react';
import OpenedSvg from '../images/opened';
import ClosedSvg from '../images/closed';
import config from '../../../config';
import Link from '../link';

const TreeNode = ({ className = '', setCollapsed, collapsed, url, title, items }) => {
  const isCollapsed = collapsed[url];

  const collapse = () => {
    setCollapsed(url);
  };

  const hasChildren = items.length !== 0;

  let location;

  if (typeof document != 'undefined') {
    location = document.location;
  }

  let active = false;
  if (!!location) {
    const pathPrefixedUrl = config.gatsby.pathPrefix + url;
    const pathMatchesUrl = location.pathname === url || location.pathname === pathPrefixedUrl;
    const pathStartsWithUrl = location.pathname?.startsWith(url) || location.pathname?.startsWith(pathPrefixedUrl);
    active = pathMatchesUrl || pathStartsWithUrl;
  }

  const calculatedClassName = `${className} item ${active ? 'active' : ''}`;
  return (
    <li className={calculatedClassName}>
      {title && (
        <Link to={url}>
          {!config.sidebar.frontLine && title && hasChildren ? (
            <button onClick={collapse} aria-label="collapse" className="collapser">
              {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
            </button>
          ) : (
            <>
            {
              !hasChildren ? (
                <div className="greyCircle"></div>
              ) : null
            }
            </>
          )
        }
          {title}
        </Link>
      )}

      {!isCollapsed && hasChildren ? (
        <ul>
          {items.map((item, index) => (
            <TreeNode
              key={item.url + index.toString()}
              setCollapsed={setCollapsed}
              collapsed={collapsed}
              {...item}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default TreeNode;
