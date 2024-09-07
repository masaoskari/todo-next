"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../lib/db";

export async function addTodo(formData: FormData) {
  const todo = formData.get("todo") as string;
  const userId = formData.get("userId") as string;
  if (!todo || !userId) {
    return;
  }
  await prisma.todo.create({
    data: {
      title: todo,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
  revalidatePath("/");
}

export async function getUser(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

export async function getTodos(userId: string) {
  return prisma.todo.findMany({
    where: {
      userId,
    },
  });
}

export async function deleteTodoById(formData: FormData) {
  const todoId = formData.get("todoId") as string;
  if (!todoId) {
    return;
  }
  await prisma.todo.delete({
    where: {
      id: todoId,
    },
  });
  revalidatePath("/");
}

export async function completeTodoById(formData: FormData) {
  const todoId = formData.get("todoId") as string;
  if (!todoId) {
    return;
  }
  await prisma.todo.update({
    where: {
      id: todoId,
    },
    data: {
      completed: true,
    },
  });
  revalidatePath("/");
}

export async function updateTodoById(todoId: string, text: string) {
  await prisma.todo.update({
    where: {
      id: todoId,
    },
    data: {
      title: text,
    },
  });
}
