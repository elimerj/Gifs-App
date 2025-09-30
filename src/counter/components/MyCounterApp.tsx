import { useCounter } from "../hooks/useCounter";

export const MyCounterApp = () => {
  const { counter, handleAdd, handleReset, handleSubtrac } = useCounter();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Counter: {counter}</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleSubtrac}>-1</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
