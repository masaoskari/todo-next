import { getTodos } from "../lib/data";
import Todo from "./Todo";
import MarkDone from "./MarkDone";
import Delete from "./Delete";

async function Todos({ userId }: { userId: string }) {
  const todos = await getTodos(userId);
  return (
    <div>
      {todos.map((todo) => (
        <div className="flex items-center gap-2" key={todo.id}>
          {!todo.completed ? <MarkDone todoId={todo.id} /> : null}
          <Delete todoId={todo.id} />
          <Todo key={todo.id} todo={todo} />
        </div>
      ))}
    </div>
  );
}
export default Todos;
