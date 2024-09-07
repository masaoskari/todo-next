"use client";

import { useState } from "react";

function Todo({
  todo,
}: {
  todo: { id: string; title: string; completed: boolean };
}) {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(todo.title);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const todoId = formData.get("todoId");
    const text = formData.get("todo");
    const res = await fetch("/api/edit", {
      method: "POST",
      body: JSON.stringify({ todoId, text }),
    });
    if (res.ok) {
      console.log("Todo updated");
    }
    console.log("Todo updated");
    setEdit(false);
  };
  return (
    <>
      {!edit ? (
        <>
          <button onClick={() => setEdit(true)}>✍️</button>
          <p className={todo.completed ? "line-through" : ""}>{text}</p>
        </>
      ) : (
        <form onSubmit={handleSubmit} method="POST">
          <input
            type="text"
            name="todo"
            placeholder="Todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input type="hidden" name="todoId" value={todo.id} />
          <button type="submit">Edit</button>
        </form>
      )}
    </>
  );
}

export default Todo;
