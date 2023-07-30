const User = require("../model/User");
const bcrypt = require("bcrypt");
const signUpUser = async (req, res) => {
  const reg = /[a-zA-Z\.]+[0-9a-zA-Z\.]*@[a-z]{5,}.com$/g;
  try {
    const { username, email, firstName, lastName, password, confirmPassword } =
      req.body;

    if (
      !username ||
      !email ||
      !firstName ||
      !lastName ||
      !password ||
      !confirmPassword
    ) {
      res.status(400);
      throw new Error("Missing Field");
    }

    if (password !== confirmPassword) {
      res.status(403);
      throw new Error("Password validation Failed");
    }

    const userAvailable = await User.findOne({ email });

    const hashedPassword = await bcrypt.hash(password, 10);

    if (!reg.test(email)) {
      res.status(403);
      throw new Error("Email Validation Failed");
    } else if (userAvailable) {
      res.status(401);
      throw new Error("User Already Exist");
    } else {
      const user = await User.create({
        username,
        email,
        firstName,
        lastName,
        password: hashedPassword,
      });
      user
        ? res.sendStatus(200, "application/json", {
            message: {
              _id: user.id,
              username: user.username,
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName,
            },
          })
        : res.status(400);
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error("Missing Field");
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { signUpUser, signInUser };
