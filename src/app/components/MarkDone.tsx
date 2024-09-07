// Example of full server component that uses server action to mark a todo as done
import { completeTodoById } from "../lib/data";
async function MarkDone({todoId} : {todoId: string}) {
    return (<form action={completeTodoById}>
        <input type="hidden" name="todoId" value={todoId}/>
        <button type="submit">✅</button>
    </form>

    );
}

export default MarkDone;