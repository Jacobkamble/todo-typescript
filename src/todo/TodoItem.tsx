import React, { FormEvent } from "react";
import Button from "./Button";

const styleObj = {
  color: "black",
  backgroundColor: "red",
  borderRadius: "5px",
  width: "60px",
  height: "30px",
  cursor: "pointer",
  // padding: "10px 10px",
};

interface TodoItemProps {
  todo: { title: string; id: string; description: string };
  handleRemoveTodo: (e: FormEvent, id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo: { title, description, id },
  handleRemoveTodo,
}) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
      <Button
        lable="Remove"
        onClick={(e) => handleRemoveTodo(e, id)}
        style={styleObj}
      />
    </>
  );
};

export default TodoItem;
