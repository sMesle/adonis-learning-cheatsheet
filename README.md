# AdonisJS V5: Learning (Cheatsheet)

## Important links

- [NodeJS](https://nodejs.org/en/)
- [AdonisJS Documentation](https://preview.adonisjs.com/guides/quick-start)
- [Insomnia](https://insomnia.rest/)

# Introduction

### Create a project

```
npm init adonis-ts-app 'project-name'
```

Select `API Project` from the terminal

To start development server :

```
cd <project-name>
node ace serve --watch
```

# Database setup

### Links

- [Database Documentation](https://preview.adonisjs.com/guides/database/setup)
- [To verify the Database Connection](https://preview.adonisjs.com/guides/database/setup#health-checks)

### Requirements

- Any database supported by AdonisJS (I personally use postgreSQL)

### Setup

```bash
npm i @adonisjs/lucid@alpha
node ace invoke @adonisjs/lucid
```

Enter your database information in the `.env` file

### Understanding

The `.env` for the database will be used in the file `config/database.ts`
Feel free to modifying directly this file if you don't want to use `.env`

# Start creating with the CLI

### Links

- [Goodbye Adonis CLI](https://preview.adonisjs.com/blog/introducing-adonisjs-v5#good-bye-adonis-cli)
- [The new CLI (Ace)](https://github.com/adonisjs/ace)

### Basics files needed for each resources

- [Model](https://preview.adonisjs.com/guides/models/introduction)
- [Migration](https://preview.adonisjs.com/guides/database/migrations)
- [Controller](https://preview.adonisjs.com/guides/http/controllers)

```
node ace make:model <model-name> --migration --controller
```

This options can be shortened with (`-m` and `-c` flag respectively)

### Notes

- Do the migrations in the good order, basically model after model that depends on each other
- In the controller, we do not need create and edit for an API because they are used to send a form

# Migrations

### Links

- [Knex Documentation : Schema Builder](http://knexjs.org/#Schema)

### Adding columns

To add different columns, edit your migration file in the `up` function and follow the knex documentation on schema builder.
