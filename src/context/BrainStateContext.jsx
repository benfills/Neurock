import { createContext, useState } from "react";

export const BrainStateContext = createContext();

export function BrainStateProvider({ children }) {
  const [brainState, setBrainState] = useState(null);
  
  return (
    <BrainStateContext.Provider value={{ brainState, setBrainState }}>
      {children}
    </BrainStateContext.Provider>
  );
}
