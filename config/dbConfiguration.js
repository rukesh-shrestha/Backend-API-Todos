const mongoose = require("mongoose");
const connectDB = async function () {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      `Data Connected: in ${connect.connection.host} with name ${connect.connection.name}`
    );
  } catch (err) {
    console.log(err);
    res.json({ error: err.message });
  }
};
module.exports = connectDB;
