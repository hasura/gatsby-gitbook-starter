import React from "react";
import styled from "react-emotion";
import Link from "../link";

// eslint-disable-next-line no-unused-vars
const TreeNode = styled(({className, active, level, ...props}) => {
  if (level === 0) {
    return (
      <li className={className}>
        <Link {...props} />
      </li>
    );
  } else if (level === 1) {
    const customClass = active ? 'active' : '';
    return (
      <li className={'subLevel ' + customClass}>
        <Link {...props} />
      </li>
    );
  } else {
    return (
      <li className={className}>
        <Link {...props} />
      </li>
    );
  }
})`
  list-style: none;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: ${({level}) => (level === 0 ? 700 : 400)};
    padding: 0.45rem 0 0.45rem ${props => 2 + (props.level || 0) * 1}rem;
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

export default TreeNode
