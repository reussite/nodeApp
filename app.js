const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
//console.log(prisma)
/* prisma.user
  .create({
    data: {
      email: "john@example.com",
      password: "password",
      name: "John",
    },
  })
  .then(console.log); */

prisma.user
  .findUnique({
    where: {
      id: 2 ,
    },
    include: {
      articles: true,
    },
  })
  .then(console.log);

prisma.user
  .update({
    where: {
      email: "author@author.com",
    },
    data: {
      password: "123456",
    },
  })
  .then(console.log);
