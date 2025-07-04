System.register(["react", "react-dom"], function (_export, _context) {
  "use strict";

  var React, ReactDOM, root;
  return {
    setters: [function (_react) {
      React = _react.default;
    }, function (_reactDom) {
      ReactDOM = _reactDom.default;
    }],
    execute: function () {
      // System.register(["react", "react-dom"], function (_export, _context) {
      //   var React;
      //   var ReactDOM;
      //   return {
      //     setters: [
      //       function (_react) {
      //         React = _react;
      //       },
      //       function (_reactDom) {
      //         ReactDOM = _reactDom;
      //       },
      //     ],
      //     execute: function () {
      //       const root = ReactDOM.createRoot(document.getElementById("root"));
      //       root.render(React.createElement("h1", null, "Hello, world!"));
      //     },
      //   };
      // });
      root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(/*#__PURE__*/React.createElement("h1", null, "Hello world"));
    }
  };
});
//# sourceMappingURL=index.js.map