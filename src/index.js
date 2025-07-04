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

import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>Hello world</h1>);
