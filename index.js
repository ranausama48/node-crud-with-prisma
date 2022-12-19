const { PrismaClient } = require("@prisma/client");
const express = require("express");
const bodyParser = require("body-parser");


const prisma = new PrismaClient();
const app = express();
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  return res.send("");
});

app.post("/users", async (req, res) => {
  await prisma.users.create({
    data: {
      email: req.body.email,
      name: req.body.name,
    },
  });
  return res.status(201).json({
    message: "Record Created Successfully",
  });
});

app.get("/users", async (req, res) => {
  let allUsers = await prisma.users.findMany();
  return res.json({
    message: "Record get Successfully",
    data: allUsers,
  });
});

app.get("/users/:id", async (req, res) => {
  let singleUser = await prisma.users.findUnique({
    where: { id: parseInt(req.params.id) },
  });
  return res.json({
    message: "Single Record get Successfully",
    data: singleUser,
  });
});

app.put("/users/:id", async (req, res) => {
  let updatedData = await prisma.users.update({
    where: { id: parseInt(req.params.id) },
    data: {
      name: req.body.name || undefined,
      email: req.body.email || undefined,
    },
  });
  // let allUsers = await prisma.users.findMany();
  console.log("updatedData", updatedData);
  return res.json({
    message: "Record updated Successfully",
    data: updatedData,
  });
});

app.delete("/users/:id", async (req, res) => {
  let deletedRecord = await prisma.users.delete({
    where: { id: parseInt(req.params.id) },
  });
  return res.json({
    message: "Record deleted Successfully",
    data: deletedRecord,
  });
});


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is runing on ${port}`);
});
