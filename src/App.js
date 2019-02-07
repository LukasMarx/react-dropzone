import React, { Component } from "react";
import Dropzone from "./dropzone/Dropzone";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Card">
          <Dropzone onFilesAdded={console.log} />
        </div>
      </div>
    );
  }
}

export default App;
