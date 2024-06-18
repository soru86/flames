# Welcome to Flames! Your animation buddy.

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This application uses [Tailwind CSS](https://tailwindcss.com/) for styling.

## Persistent Storage

For this demo application, `SqlLite` has been used as a persistent storage and `Prisma` has been used as ORM tool/library. There is a single database table called `animation`. The schema for this database object has been defined under `prisma/schema.prisma`.
The name of the database will be `dev.db`.

Initially, the newly created database table can be seeded with test records using seed file at location `prisma/seed.js`.

To initialize the database with given schema, below command can be used from project root folder:

```sh
npx prisma init --data-source-provider sqlite
```

Above command will create the blank database called `dev.db`.

To seed the blank database with test cards, below command can be used from project root folder:

```sh
node prisma/seed
```

Next, a VSCode extension called [SQLite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite) can be used to vew and veify the database schema. The steps are below:

1. Press `Ctrl + Shift + P`. This will open the command palette.
2. Search for SQLite.
3. Select `SQLite: Open Database` option.
4. Next, it will prompt for the path of database to be opened.
5. Browse and select the `dev.db`, created in above CLI step.
6. At the bottom-left corner of VSCode (in sidebar), a new option will appear called `SQLITE EXPLORER`.
7. Expand it and you can see the DB in explorer.

Next, below built-in web-based tool called `Prisma Studio` can be used to see the actual data records. The steps as below:

1. Open a new terminal window.
2. Type `npx prisma studio`.
3. This will launch a new studio tool in a new browser tab.
4. This tool can be used to see the actual table data records.
