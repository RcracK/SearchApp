import React from "react";
import Header from "./Header";
import SearchBox from "./SearchBox";

import "./App.css";

class App extends React.Component {
  state = {
    headerText: "Name It!",
  };

  render() {
    return (
      <div>
        <Header headTitle={this.state.headerText} />
        <SearchBox />
      </div>
    );
  }
}

export default App;