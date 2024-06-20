import React from "react";

interface PropsType {
  name?: string;
}
const Props: React.FC<PropsType> = ({ name = "default" }) => {
  return (
    <>
      <h1>hello {name}</h1>
    </>
  );
};
export default Props;
