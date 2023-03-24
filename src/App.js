import logo from "./logo.svg";
import "./App.css";
import TodoItemCreator from "./components/TodoItemCreator";
import { todoListState, filteredTodoListState } from "./todoAtoms";
import { useRecoilValue } from "recoil";
import TodoItem from "./components/TodoItem";
import TodoListFilters from "./components/TodoListFilters";
import TodoListStats from "./components/TodoListStats";
import { currentUserNameQuery } from "./userAtoms";
import React from "react";

function App() {
  // 작성한 Atom을 불러와서 읽어준다.
  const todoList = useRecoilValue(todoListState);
  const filteredTodoList = useRecoilValue(filteredTodoListState);
  console.log("todoList >>>", todoList);
  console.log("filteredTodoListSt >>>", filteredTodoListState);

  return (
    <div className="App">
      <React.Suspense fallback={<div>Loading...</div>}>
        <CurrentUserInfo></CurrentUserInfo>
      </React.Suspense>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {filteredTodoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem}></TodoItem>
      ))}
    </div>
  );
}

export default App;

function CurrentUserInfo() {
  const userName = useRecoilValue(currentUserNameQuery);
  return <div>{userName}</div>;
}
