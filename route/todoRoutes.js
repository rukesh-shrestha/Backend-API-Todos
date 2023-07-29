const express = require("express");
const router = express.Router();
const {
  getAllData,
  getParticularData,
  updateData,
  updateParticularData,
  deleteParticularData,
} = require("../controller/todosController");

router.route("").get(getAllData);

router.route("/:id").get(getParticularData);

router.route("/update").post(updateData);

router.route("/update/:id").put(updateParticularData);

router.route("/delete/:id").delete(deleteParticularData);

module.exports = router;
