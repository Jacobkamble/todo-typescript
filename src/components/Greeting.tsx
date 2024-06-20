import { FunctionComponent } from "react";

interface GreetingProps {
  greet?: string;
}

const Greeting: FunctionComponent<GreetingProps> = ({
  greet = "default greet",
}) => {
  return <>{greet}</>;
};

export default Greeting;
