import React from 'react';
import styled from '@emotion/styled';

import CodeBlock from './codeBlock';
import AnchorTag from './anchor';

const StyledPre = styled('pre')`
  font-size: 14px;
  margin: 0px;
  padding: 16px;
  overflow: auto;
  border: 0 !important;
  background-color: rgb(245, 247, 249);

  background: ${props => props.theme.colors.preFormattedText};
`;

export default {
  h1: props => (
    <h1 className="heading1" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h2: props => (
    <h2 className="heading2" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h3: props => (
    <h3 className="heading3" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h4: props => (
    <h4 className="heading4" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h5: props => (
    <h5 className="heading5" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h6: props => (
    <h6 className="heading6" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  p: props => <p className="paragraph" {...props} />,
  pre: props => (
    <StyledPre>
      <pre {...props} />
    </StyledPre>
  ),
  code: CodeBlock,
  a: AnchorTag,
  // TODO add `img`
  // TODO add `blockquote`
  // TODO add `ul`
  // TODO add `li`
  // TODO add `table`
};
