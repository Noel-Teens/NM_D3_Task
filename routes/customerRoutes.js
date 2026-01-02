const express = require('express');
const router = express.Router();

// In-memory student data
let customers = [
  { id: 1, name: "Mohammed", membership: "DIAMOND", age: 21 },
  { id: 2, name: "Bhakar", membership: "GOLD", age: 27 }
];

// READ – Get all students
router.get('/', (req, res) => {
  res.json(customers);
});

// CREATE => POST
router.post("/", (req, res) => {
  const customer = {
    id: customers.length + 1,
    name: req.body.name,
    age: req.body.age,
    membership: req.body.membership
  };

  customers.push(customer);
  res.status(201).json(customer);
});

// UPDATE => PUT
router.put("/:id", (req, res) => {
  const customer = customers.find(c => c.id == req.params.id);
  if (!customer) return res.status(404).json({ message: "Not found" });

  customer.name = req.body.name;
  customer.age = req.body.age;
  customer.membership = req.body.membership;

  res.json(customer);
});

// EXPORT ROUTER (THIS LINE IS CRITICAL)
module.exports = router;
