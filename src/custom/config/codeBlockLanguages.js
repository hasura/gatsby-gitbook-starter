export function applyLanguages(_Prism) {
  /**
   * Here you have the possibility to add other supported languages to Prism and thus to the code highlighting.
   *
   * We support the following languages automatically:
   * markup, bash, clike, c, cpp, css, javascript, jsx, coffeescript, actionscript, css-extr,
   * diff, git, go, graphql, handlebars, json, less, makefile, markdown, objectivec, ocaml, python,
   * reason, sass, scss, sql, stylus, tsx, typescript, wasm, yaml
   *
   * If you need more languages you can add them yourself as follows:
   * (https://github.com/PrismJS/prism/tree/master/components)
   *
   * ```js
   * require("prismjs/components/prism-docker");
   * require("prismjs/components/prism-ada");
   * ```
   */

}

export function getTheme(_Prism) {
  /**
   * Here you have the possibility to change the prism highlighting.
   */
  return require('prism-react-renderer/themes/vsDark').default;
}
