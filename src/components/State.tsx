import React, { useState } from "react";

interface StateProps {
  name: string;
}

const State: React.FC<StateProps> = ({ name }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      {name}
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
};

export default State;
