import React, {useState} from 'react';
import styled from "react-emotion";
import Link from "../link";
import config from '../../../config';

const calculateTreeData = edges => {
  const tree = edges.reduce((accu, {node: {fields: {slug, title}}}) => {
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
  const {sidebar: {forcedNavOrder = []}} = config;
  const tmp = [...forcedNavOrder];
  tmp.reverse();
  return tmp.reduce((accu, slug) => {
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
    const index = prevItems.findIndex(({label}) => label === parts[parts.length - 1]);
    accu.items.unshift(prevItems.splice(index, 1)[0]);
    return accu;
  }, tree);
}

const TreeNode = ({className = '', url, title, items, ...rest}) => {
  const hasChildren = items.length !== 0;
  const active =
    location && (location.pathname === url || location.pathname === (config.gatsby.pathPrefix + url));
  const calculatedClassName = `${className} item ${active ? 'active' : ''}`;
  return (
    <li
      className={calculatedClassName}
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
            <TreeNode
              key={item.url}
              {...item}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

const Tree = ({edges}) => {
  const [treeData, setState] = useState(() => {
    return calculateTreeData(edges);
  });
  return (
    <TreeNode
      className={`${config.sidebar.frontLine ? 'showFrontLine' : ''} firstLevel`}
      {...treeData}
    />
  );
}

export default Tree 
