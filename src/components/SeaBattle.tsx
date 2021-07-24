import {createContext, ReactNode, useMemo} from "react";

interface SeaBattleProps {
  children: ReactNode;
  cellSize: number;
}

const SeaBattleContext = createContext(0);

const SeaBattle = ({ children, cellSize = 32 }: SeaBattleProps) => {
  const value = useMemo(() => cellSize, []);
  return (
    <SeaBattleContext.Provider value={value}>{children}</SeaBattleContext.Provider>
  )
};

export { SeaBattle, SeaBattleContext };