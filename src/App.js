import React from "react";
import { MatterProvider } from "./MatterContext";
import Solid from "./Solid";

class App extends React.Component {
  state = {
    element: "Oxygen"
  };
  render() {
    return (
      <MatterProvider value={this.state}>
        <Solid />
      </MatterProvider>
    );
  }
}

export default App;
