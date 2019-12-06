import React from "react";
import CodeBlock from "./codeBlock";
import '../styles.css';

export default {
  h1: props => <h1 class='heading1' id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />,
  h2: props => <h2 class='heading2' id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />,
  h3: props => <h3 class='heading3' id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />,
  h4: props => <h4 class='heading4' id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />,
  h5: props => <h5 class='heading5' id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />,
  h6: props => <h6 class='heading6' id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />,
  p: props => <p class='paragraph' {...props} />,
  pre: props => <pre class='pre' {...props} />,
  code: CodeBlock,
  // TODO add `a`
  // TODO add `img`
  // TODO add `blockquote`
  // TODO add `ul`
  // TODO add `li`
  // TODO add `table`
};
