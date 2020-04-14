import React from "react";
import { MatterContext, MatterConsumer } from "./MatterContext";

// class Plasma extends React.Component {
//   static contextType = MatterContext;
//   render() {
//     console.log(this);
//     console.log(this.context);
//     return <h1>Element:{this.context.element}</h1>;
//   }
// }
const Plasma = () => {
  return (
    <MatterConsumer>
      {context => {
        console.log(context);
        return <h1>Element:{context.element}</h1>;
      }}
    </MatterConsumer>
  );
};

export default Plasma;
