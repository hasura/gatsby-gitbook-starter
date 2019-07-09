import React, {useState} from 'react';
import styled from "react-emotion";
import Link from "../link";
import config from '../../../config';

const calculateTreeData = edges => {
  return edges.reduce((accu, {node: {fields: {slug, title}}}) => {
    const parts = slug.split('/');
    let {items: prevItems} = accu;
    for (const part of parts.slice(1, -1)) {
      let tmp = prevItems.find(({label}) => label == part);
      if (tmp) {
        if (!tmp.items) {
          tmp.items = [];
        }
      } else {
        tmp = {label: part, items: []};
        prevItems.push(tmp)
      }
      prevItems = tmp.items;
    }
    const existingItem = prevItems.find(({label}) => label === parts[parts.length - 1]);
    if (existingItem) {
      existingItem.url = slug;
      existingItem.title = title;
    } else {
      prevItems.push({
        label: parts[parts.length - 1],
        url: slug,
        items: [],
        title
      });
    }
    return accu;
  }, {items: []});
}

const TreeNode = styled(({isFirst = false, className, url, title, items, ...rest}) => {
  const hasChildren = items.length !== 0;
  return (
    <li
      className={className}
    >
      {title && (
        <Link
          to={url}
        >
          {title}
        </Link>)
      }
      {hasChildren ? (
        <ul>
          {items.map((item) => (
            <TreeNode className={!isFirst && hasChildren && config.sidebar.frontLine ? 'subLevel' : ''}
              active={
                location && (location.pathname === item.url || location.pathname === (config.gatsby.pathPrefix + item.url))}
              key={item.url}
              {...item}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
})`
  list-style: none;
    padding: 0.45rem 0 0.45rem 0.45rem;
    >a {
      color: #fff;
    text-decoration: none;
    display: block;
    position: relative;

    &:hover {
      background-color: #542683;
    }

    ${props =>
    props.active &&
    `
      color: #fff;
      background-color: #473485;
    `} // external link icon
    svg {
      float: right;
      margin-right: 1rem;
    }
    }
`;

const Tree = ({edges}) => {
  const [treeData, setState] = useState(() => {
    return calculateTreeData(edges);
  });
  return (
    <ul>
      <TreeNode isFirst {...treeData} />
    </ul>
  );
}

export default Tree 
