import React, { Component } from "react";
import * as bootstrap from "bootstrap";
import "../scss/App.scss";
import { marked } from "marked";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      preview: "",
    };
    this.converter = this.converter.bind(this);
  }

  converter(event) {
    this.setState({
      text: event.target.value,
      preview: marked.parse(event.target.value),
    });
  }

  componentDidMount() {
    const defaultString =
      "# Welcome to my React Markdown Previewer!\n## This is a sub-heading...\n### And here's some other cool stuff:\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n";

    this.setState({
      text: defaultString,
      preview: marked.parse(defaultString),
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row headers">
          <div className="col header">
            <span>Editor</span>
          </div>
          <div className="col header">
            <span>Previewer</span>
          </div>
        </div>
        <div className="row windows">
          <textarea
            onChange={this.converter}
            value={this.state.text}
            className="col editor"
            id="editor"
            defaultValue={this.state.text}
          ></textarea>
          <div
            className="col previewer"
            id="preview"
            dangerouslySetInnerHTML={{ __html: this.state.preview }}
          ></div>
        </div>
      </div>
    );
  }
}

export default App;
