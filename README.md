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

## Links

- [Database Documentation](https://preview.adonisjs.com/guides/database/setup)
- [To verify the Database Connection](https://preview.adonisjs.com/guides/database/setup#health-checks)

## Requirements

- Any database supported by AdonisJS (I personally use postgreSQL)

## Setup

```bash
npm i @adonisjs/lucid@alpha
node ace invoke @adonisjs/lucid
```

Enter your database information in the `.env` file

## Understanding

The `.env` for the database will be used in the file `config/database.ts`
Feel free to modifying directly this file if you don't want to use `.env`
