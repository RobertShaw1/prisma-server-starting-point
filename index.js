const { prisma } = require('./prisma/generated/prisma-client')
const casual = require('casual')

// A `main` function so that we can use async/await
async function main () {
  // Create a new user
  const newUser = await prisma.createUser({ name: casual.first_name })
  console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  // Read all users from the database and print them to the console
  const allUsers = await prisma.users()
  console.log(allUsers)
}

main().catch(e => console.error(e))
