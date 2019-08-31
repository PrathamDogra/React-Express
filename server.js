const express = require("express");

const app = express();

const port = 5000;

const customers = [
  { id: 1, name: "Bjorn" },
  { id: 2, name: "Ubbe" },
  { id: 3, name: "Hvitserk" },
  { id: 4, name: "Ivar" }
];

app.get("/api/customers", (req, res) => {
  res.json(customers);
});
app.listen(port, () => console.log(`App is running at localhost: ${port}`));
