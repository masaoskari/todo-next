import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const users = [
  {
    email: "test",
    password: "test",
    todos: [],
  },
];

async function main() {
  for (const user of users) {
    await prisma.user.create({
      data: {
        email: user.email,
        todos: {
          create: user.todos,
        },
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
