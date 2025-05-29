import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";
import "./Grandpa.css";
import { createContext } from "react";

export const AssetContext = createContext("Gold");
const Grandpa = () => {
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <AssetContext.Provider value="gold">
        <section className="flex">
          <Dad></Dad>
          <Uncle></Uncle>
          <Aunty></Aunty>
        </section>
      </AssetContext.Provider>
    </div>
  );
};

export default Grandpa;
/**
 * 1. Create a context and export it.
 * 2. Add provider for the context with a value.
 * useContext to access value in context API
 */