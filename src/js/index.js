import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
const filePath = "../data/contacts.json";

app.use(express.json());
app.use(cors());

app.get("/contacts", (req, res) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.send({ message: "Issue in the server" });
    }
    const contacts = JSON.parse(data);
    res.send(contacts);
  });
});

app.post("/contacts/new", (req, res) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.send({ message: "Issue in the server" });
    }
    const contacts = JSON.parse(data);
    const newContact = req.body;
    newContact.id = crypto.randomUUID();
    newContact.createdAt = new Date().toLocaleDateString();
    contacts.push(newContact);
    fs.writeFile(filePath, JSON.stringify(contacts), "utf-8", (err) => {
      if (err) {
        return res.status(500).send({ message: "Issue in the server" });
      }
      res.status(201).send({ message: "data recieved" });
    });
  });
});

app.put("/contacts/update/:id", (req, res) => {
  const updatedID = req.params.id;
  const updatedBody = req.body;
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send({ message: "Issue in the server" });
    }
    const prevData = JSON.parse(data);
    const newData = prevData.map((contact) => {
      if (contact.id === updatedID) {
        return { ...updatedBody, id: contact.id };
      }
      return contact;
    });

    console.log(newData)

    fs.writeFile(filePath, JSON.stringify(newData), "utf-8", (err) => {
      if (err) {
        return res.status(500).send({ message: "Issue in the server" });
      }
      res.status(200).send({ message: "data updated" });
    });
  });
});

app.delete("/contacts/:id", (req, res) => {
  const deletedDataID = req.params.id;
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send({ message: "Issue in the server" });
    }
    const contacts = JSON.parse(data);
    const newContacts = contacts.filter(
      (contact) => contact.id !== deletedDataID
    );
    fs.writeFile(filePath, JSON.stringify(newContacts), "utf-8", (err) => {
      if (err) {
        return res.status(500).send({ message: "Issue in the server" });
      }
      res.status(200).send({ message: "data deleted" });
    });
  });
});

app.listen(5000, () => {
  console.log("Server is up & running");
});
