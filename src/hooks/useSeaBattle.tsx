import { useContext } from "react";
import { SeaBattleContext } from '../components/SeaBattle';

export const useSeaBattle = () => useContext(SeaBattleContext);