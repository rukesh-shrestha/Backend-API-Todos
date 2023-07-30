const asyncHandler = require("express-async-handler");
const Todos = require("../model/Todos");

const getAllData = asyncHandler(async function (req, res) {
  const data = await Todos.find();

  res.json(data);
});

const getParticularData = async function (req, res) {
  try {
    const id = req.params.id;

    if (id && id.length == 24) {
      const data = await Todos.findOne({ _id: id });
      data
        ? res.json(data)
        : res.sendStatus(404, "application/json", { error: "Data not found" });
    } else {
      res.sendStatus(400, "application/json", { error: "Invalid ID" });
      throw new Error("Invalid Id");
    }
  } catch (error) {
    console.error(error);
  }
};

const updateData = async function (req, res) {
  try {
    const { title, description } = req.body;
    console.log(req.user);
    const todos = await Todos.create({
      title,
      description,
      user_id: req.user.id,
    });
    console.log(todos);

    if (todos) {
      // res.sendStatus(200, "application/json", { todos });
      res.sendStatus(200, "application/json", todos);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(400, "application/json", {
      error: error._message,
    });
  }
};

const updateParticularData = async function (req, res) {
  try {
    const id = req.params.id;
    if (id && id.length == 24) {
      const data = await Todos.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      data
        ? res.sendStatus(200, "application/json", data)
        : res.sendStatus(404, "application/json", { error: "Data not found" });
    } else {
      res.sendStatus(400, "application/json", { error: "Invalid ID" });
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(404, "application/json", { error: error._message });
  }
};

const deleteParticularData = async function (req, res) {
  try {
    const id = req.params.id;
    if (id && id.length == 24) {
      const deletedData = await Todos.findByIdAndDelete(id);
      deletedData
        ? res.sendStatus(200, "application/json", deletedData)
        : res.sendStatus(404, "application/json", { error: "Data not found" });
    } else {
      res.sendStatus(400, "application/json", { error: "Invalid ID" });
    }
    console.log(id);

    res.json(deletedData);
  } catch (error) {}
};

module.exports = {
  getAllData,
  getParticularData,
  updateData,
  updateParticularData,
  deleteParticularData,
};
