/* eslint-disable */
import React from 'react';
import CodeBlock from './codeBlock';
import AnchorTag from './anchor';
import '../styles.css';

const parseId = (content) => {
  const [text, id] = content.split("{#");
  if (!!text && !!id) {
    return [text, id.replace('}', '').replace(/\s+/g, '').toLowerCase()]
  }
  return [content, content.replace(/\s+/g, '').toLowerCase()]
}

export default {
  h1: (props) => (
    <h1 className="heading1" id={parseId(props.children)[1]} {...props}>{parseId(props.children)[0]}</h1>
  ),
  h2: (props) => console.log({props}) || (
    <h2 className="heading2" id={parseId(props.children)[1]} {...props}>{parseId(props.children)[0]}</h2>
  ),
  h3: (props) => (
    <h3 className="heading3" id={parseId(props.children)[1]} {...props}>{parseId(props.children)[0]}</h3>
  ),
  h4: (props) => (
    <h4 className="heading4" id={parseId(props.children)[1]} {...props}>{parseId(props.children)[0]}</h4>
  ),
  h5: (props) => (
    <h5 className="heading5" id={parseId(props.children)[1]} {...props}>{parseId(props.children)[0]}</h5>
  ),
  h6: (props) => (
    <h6 className="heading6" id={parseId(props.children)[1]} {...props}>{parseId(props.children)[0]}</h6>
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
