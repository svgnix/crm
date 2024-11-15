const express = require("express");
const {
  createContact,
  getAllContacts,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

const router = express.Router();

router.post("/", createContact);
router.get("/", getAllContacts);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

module.exports = router;
