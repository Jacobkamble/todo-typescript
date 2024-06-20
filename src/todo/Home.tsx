import React, { useState, FormEvent,useCallback } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

interface TodoItem {
  title: string;
  id: string;
  description: string;
}

const Home: React.FC = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const handleAddTodo =  (e: FormEvent, data: TodoItem) => {
    e.preventDefault();
    setTodoList([...todoList, data]);
  };

 const handleRemoveTodo=(e:FormEvent,getid:string)=>{
  e.preventDefault();
  const filterList=todoList?.filter(({id})=>{
    return id !== getid
  })
  setTodoList(filterList)
 }

  return (
    <>
      <AddTodo handleAddTodo={handleAddTodo} />
      <TodoList todoList={todoList} handleRemoveTodo={handleRemoveTodo}/>
    </>
  );
};

export default Home;
