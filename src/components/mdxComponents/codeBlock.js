import * as React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import prismTheme from 'prism-react-renderer/themes/vsDark';
import Loadable from 'react-loadable';
import LoadingProvider from './loading';
import '../styles.css';

/** Removes the last token from a code example if it's empty. */
function cleanTokens(tokens) {
  const tokensLength = tokens.length;

  if (tokensLength === 0) {
    return tokens;
  }
  const lastToken = tokens[tokensLength - 1];

  if (lastToken.length === 1 && lastToken[0].empty) {
    return tokens.slice(0, tokensLength - 1);
  }
  return tokens;
}

// Copy to Clipboard Button and method Ref - https://raptis.wtf/blog/gatsby-mdx-copy-code-button-with-confetti/
const copyToClipboard = (str) => {
  const el = document.createElement("textarea")
  el.value = str
  el.setAttribute("readonly", "")
  el.style.position = "absolute"
  el.style.left = "-9999px"
  document.body.appendChild(el)
  el.select()
  document.execCommand("copy")
  document.body.removeChild(el)
}


const LoadableComponent = Loadable({
  loader: () => import('./LiveProvider'),
  loading: LoadingProvider,
});

const Button = (props) => (
  <button
    style={{
      position: "absolute",
      top: 0,
      right: 0,
      border: "none",
      boxShadow: "none",
      textDecoration: "none",
      margin: "8px",
      padding: "8px 12px",
      background: "#E2E8F022",
      color: "white",
      borderRadius: "8px",
      cursor: "pointer",
      color: "#E2E8F0",
      fontSize: "14px",
      fontFamily: "sans-serif",
      lineHeight: "1",
    }}
    {...props}
  />
);

/* eslint-disable react/jsx-key */
const CodeBlock = ({ children: exampleCode, ...props }) => {
  const [isCopied, setIsCopied] = React.useState(false);
  if (props['react-live']) {
    return <LoadableComponent code={exampleCode} />;
  } else {
    return (
      <Highlight {...defaultProps} code={exampleCode} language="javascript" theme={prismTheme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className + ' pre'}
            style={{
              ...style,
              padding: "2rem",
              position: "relative",
            }}
            p={3}
          >
          <Button
            onClick={() => {
              copyToClipboard(exampleCode)
              setIsCopied(true)
              setTimeout(() => setIsCopied(false), 3000)
            }}
          >
            {isCopied ? "Copied!" : "Copy"}
          </Button>

            {cleanTokens(tokens).map((line, i) => {
              let lineClass = {};

              let isDiff = false;

              if (line[0] && line[0].content.length && line[0].content[0] === '+') {
                lineClass = { backgroundColor: 'rgba(76, 175, 80, 0.2)' };
                isDiff = true;
              } else if (line[0] && line[0].content.length && line[0].content[0] === '-') {
                lineClass = { backgroundColor: 'rgba(244, 67, 54, 0.2)' };
                isDiff = true;
              } else if (line[0] && line[0].content === '' && line[1] && line[1].content === '+') {
                lineClass = { backgroundColor: 'rgba(76, 175, 80, 0.2)' };
                isDiff = true;
              } else if (line[0] && line[0].content === '' && line[1] && line[1].content === '-') {
                lineClass = { backgroundColor: 'rgba(244, 67, 54, 0.2)' };
                isDiff = true;
              }
              const lineProps = getLineProps({ line, key: i });

              lineProps.style = lineClass;
              const diffStyle = {
                userSelect: 'none',
                MozUserSelect: '-moz-none',
                WebkitUserSelect: 'none',
              };

              let splitToken;

              return (
                <div {...lineProps} key={line + i}>
                  {line.map((token, key) => {
                    if (isDiff) {
                      if (
                        (key === 0 || key === 1) &
                        (token.content.charAt(0) === '+' || token.content.charAt(0) === '-')
                      ) {
                        if (token.content.length > 1) {
                          splitToken = {
                            types: ['template-string', 'string'],
                            content: token.content.slice(1),
                          };
                          const firstChar = {
                            types: ['operator'],
                            content: token.content.charAt(0),
                          };

                          return (
                            <React.Fragment key={token + key}>
                              <span
                                {...getTokenProps({ token: firstChar, key })}
                                style={diffStyle}
                              />
                              <span {...getTokenProps({ token: splitToken, key })} />
                            </React.Fragment>
                          );
                        } else {
                          return <span {...getTokenProps({ token, key })} style={diffStyle} />;
                        }
                      }
                    }
                    return <span {...getTokenProps({ token, key })} />;
                  })}
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
    );
  }
};

export default CodeBlock;
