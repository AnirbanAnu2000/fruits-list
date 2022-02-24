import React, { useCallback, useReducer, useRef } from "react";
import "./App.css";
interface Todo {
  id: number;
  text: string;
}

type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };

function App() {

  const [todos, dispatch] = useReducer((state: Todo[], action: ActionType) => {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: state.length,
            text: action.text,
          },
        ];
      case "REMOVE":
        return state.filter(({ id }) => id !== action.id);
    }
  }, []);

  const newTodoRef = useRef<HTMLInputElement>(null);
  const onAddTodo = useCallback(() => {

    if (newTodoRef.current) {
      dispatch({
        type: "ADD",
        text: newTodoRef.current.value,
      });
      newTodoRef.current.value = "";
      console.log(newTodoRef.current.value.charAt);
    }

  }, []);

  return (

    <div className="container mt-5">
      <h1 className="fw-bold text-center text-primary mb-4">Nice Fruits Shop</h1>
      <div className="row justify-content-center">
        <div className="col-lg-4">
          <input id="fruitName" className="form-control" type="text" ref={newTodoRef} placeholder="Fruit Name" />
          <button onClick={onAddTodo} className="btn btn-success fw-bold mt-4 add-button mb-4">Add Fruit Name<i className="fas fa-plus-square ms-2"></i></button>
          {todos.map((todo) => (
            <div key={todo.id} className="d-flex justify-content-center align-items-center mt-3 border border-primary border-1 rounded rounded-end-0">
              <span className="fw-bold mx-auto">{todo.text}</span>
              <button className="btn btn-danger fw-bold ms-auto" onClick={() => dispatch({ type: "REMOVE", id: todo.id })}>
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

