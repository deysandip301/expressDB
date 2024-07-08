const router = require("express").Router();
const { Router } = require("express");
const userControllers = require("../controllers/UserControllers");

// create a user
router.post("/", userControllers.createUser);

// get all users
router.get("/", userControllers.getAllUsers);

// get user by id
router.get("/:id", userControllers.getUserById);

// update user
router.put("/:id", userControllers.updateUser);

// delete user
router.delete("/:id", userControllers.deleteUser);

module.exports = router;