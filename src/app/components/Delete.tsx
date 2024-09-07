// example of how server action can be used in a client component
"use client";

import { deleteTodoById } from "../lib/data";

function Delete({ todoId }: { todoId: string }) {
  return (
    <form action={deleteTodoById}>
      <input type="hidden" name="todoId" value={todoId} />
      <button type="submit" onClick={() => console.log("hello")}>
        🗑️
      </button>
    </form>
  );
}

export default Delete;
