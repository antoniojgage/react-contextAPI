import React from "react";

const MatterContext = React.createContext(null);

const MatterProvider = MatterContext.Provider;
const MatterConsumer = MatterContext.Consumer;
export { MatterProvider, MatterConsumer, MatterContext };
