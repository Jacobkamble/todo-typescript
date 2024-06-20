import React, { FormEvent } from "react";
import TodoItem from "./TodoItem";

interface todoItem {
  title: string;
  id: string;
  description: string;
}

interface TodoListProps {
  todoList: todoItem[];
  handleRemoveTodo: (e: FormEvent, id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todoList, handleRemoveTodo }) => {
  console.log(":hsxh", todoList);

  return (
    <>
      {todoList.length > 0 &&
        todoList.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleRemoveTodo={handleRemoveTodo}
            />
          );
        })}
    </>
  );
};

export default TodoList;
