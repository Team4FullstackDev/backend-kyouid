const { Users } = require("../db/models");
const bcrypt = require("bcrypt");
const home = (req, res, next) => {
  res.send("<h1>INI API</h1>");
};

module.exports = { home };

module.exports.getUsers = async (req, res) => {
  try {
    const response = await Users.findAll({
      attributes: [
        "id",
        "fullName",
        "username",
        "email",
        "phoneNumber",
        "isAdmin",
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports.getUsersById = async (req, res) => {
  try {
    const response = await Users.findOne({
      attributes: [
        "id",
        "fullName",
        "username",
        "email",
        "phoneNumber",
        "isAdmin",
      ],
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports.createUser = async (req, res) => {
  const {
    fullName,
    username,
    email,
    password,
    phoneNumber,
    birthDate,
    isAdmin,
  } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  try {
    await Users.create({
      fullName,
      username,
      email,
      password: hashPassword,
      phoneNumber,
      birthDate,
      isAdmin,
    });
    res.status(201).json({ msg: "User was created successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports.updateUser = async (req, res) => {
  const user = await Users.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!user) {
    return res.status(404).json({ msg: "User not found" });
  }
  const {
    fullName,
    username,
    email,
    password,
    phoneNumber,
    birthDate,
    isAdmin,
  } = req.body;
  let hashPassword;
  if (!password) {
    hashPassword = user.password;
  } else {
    hashPassword = await bcrypt.hash(password, 10);
  }
  try {
    await Users.update(
      {
        fullName,
        username,
        email,
        password: hashPassword,
        phoneNumber,
        birthDate,
        isAdmin,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "User was updated successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports.deleteUser = async (req, res) => {
  const user = await Users.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!user) {
    return res.status(404).json({ msg: "User not found" });
  }
  try {
    await Users.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User was deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
