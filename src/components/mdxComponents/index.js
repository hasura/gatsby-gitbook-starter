/* eslint-disable */
import React from 'react';
import CodeBlock from './codeBlock';
import AnchorTag from './anchor';
import { customIdParser } from '../../utils/customIdParser';
import '../styles.css';

export default {
  h1: (props) => (
    <h1 className="heading1" id={customIdParser(props.children).id} {...props}>{customIdParser(props.children).content}</h1>
  ),
  h2: (props) => (
    <h2 className="heading2" id={customIdParser(props.children).id} {...props}>{customIdParser(props.children).content}</h2>
  ),
  h3: (props) => (
    <h3 className="heading3" id={customIdParser(props.children).id} {...props}>{customIdParser(props.children).content}</h3>
  ),
  h4: (props) => (
    <h4 className="heading4" id={customIdParser(props.children).id} {...props}>{customIdParser(props.children).content}</h4>
  ),
  h5: (props) => (
    <h5 className="heading5" id={customIdParser(props.children).id} {...props}>{customIdParser(props.children).content}</h5>
  ),
  h6: (props) => (
    <h6 className="heading6" id={customIdParser(props.children).id} {...props}>{customIdParser(props.children).content}</h6>
  ),
  p: (props) => <p className="paragraph" {...props} />,
  pre: (props) => <pre className="pre" {...props} />,
  code: CodeBlock,
  a: AnchorTag,
  // TODO add `img`
  // TODO add `blockquote`
  // TODO add `ul`
  // TODO add `li`
  // TODO add `table`
};
