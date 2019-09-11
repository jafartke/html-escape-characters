import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  decodeHtmlCharCodes = str => {
    return str
      .toString()
      .replace(/(&#(\d+);)/g, function(match, capture, charCode) {
        return String.fromCharCode(charCode);
      });
    //return str
  };

  render() {
    return (
      <div>
        {this.decodeHtmlCharCodes(
          "2&#39;X7&#39; Diamond Patterned Shag Woven Accent Rug Navy - Project 62&#8482;"
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
