import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";
import { getUser } from "./lib/data";
import { getServerSession } from "next-auth";
export default async function Home() {
  const session = await getServerSession();
  let user = null;
  if (session) {
    user = await getUser(session?.user?.email ?? "");
  }
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <h1 className="font-bold text-4xl">TODOS</h1>
      {session && user ? (
        <>
          <TodoForm userId={user.id} />
          <Todos userId={user.id} />
        </>
      ) : (
        <p>Not sign in. Please sign in to add todos.</p>
      )}
    </div>
  );
}
