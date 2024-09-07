"use client";
import { createRef } from "react";
import { addTodo } from "../lib/data";

function TodoForm({ userId }: { userId: string }) {
  const formRef = createRef<HTMLFormElement>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await addTodo(formData);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex gap-4">
      <input type="hidden" name="userId" value={userId} />
      <input
        name="todo"
        type="text"
        className="shadow appearance-none border rounded w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
