# prisma-server-starting-point

*Note: This starting point assumes you have the following tools installed...

* [yarn](https://yarnpkg.com/en/docs/getting-started) or [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* [docker](https://docs.docker.com/) and [docker-compose](https://docs.docker.com/compose/install/)
* [prisma](https://www.prisma.io/docs/1.34/get-started/01-setting-up-prisma-new-database-JAVASCRIPT-a002/#install-the-prisma-cli)

## Setup

Clone this repo

Rename the directory...

```bash
mv prisma-server-starting-point <project name>
```

```bash
yarn init
```

This is your opportunity to change the name, description, author, license, etc.

Delete the current `.git` directory and initialize a new one...

```bash
rm -rf .git && git init
```

Install dependencies...

```bash
yarn
```

Start a new repository on github.\
Be sure to initialize the repository with the appropriate README and LICENSE.

Synchronize the local repository with the newly created remote...

```bash
git remote add origin <repository url>
git pull # accept all changes from remote
git push -u origin master
```

## To get started

```bash
docker-compose up -d
```

In a different terminal...

```bash
prisma deploy
```

To test out the server execute `node index.js`


Credit: https://www.prisma.io/docs/get-started/01-setting-up-prisma-new-database-JAVASCRIPT-a002/
