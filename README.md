# Next.js todo app

## Features

- Server actions
- API routes
- NextAuth
- Prisma ORM
- Postgre DB
- Fully dockerized


### Prisma

*Best practices*
- do migrations with command `npx prisma migrate dev
- keep your migrations in version control
- apply migrations to production db with command `npx prisma migrate deploy`


### Deploying Next.js app to production

- next.config add `output: "standalone"`