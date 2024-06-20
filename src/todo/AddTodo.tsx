import React, { useId } from "react";
import Input from "./Input";
import Button from "./Button";
import { ChangeEvent, FormEvent, useState } from "react";

const styleObj = {
  color: "black",
  backgroundColor: "#ff6347",
  borderRadius: "5px",
  width: "60px",
  height: "30px",
  cursor: "pointer",
  // padding: "10px 10px",
};

interface AddTodoProps {
  handleAddTodo: (
    e: FormEvent,
    data: { title: string; description: string; id: string },
  ) => void;
}
const AddTodo: React.FC<AddTodoProps> = ({ handleAddTodo }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handletitle = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const handleDescription = (e: ChangeEvent<HTMLInputElement>) =>
    setDescription(e.target.value);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Input value={title} label="Title" onChange={handletitle} />
        <Input
          value={description}
          label="Description"
          onChange={handleDescription}
        />
      </div>

      <Button
        lable="Add"
        onClick={(e) => {
          handleAddTodo(e, { title, description, id: title });
          setTitle("");
          setDescription("");
        }}
        style={styleObj}
      />
    </>
  );
};

export default AddTodo;
