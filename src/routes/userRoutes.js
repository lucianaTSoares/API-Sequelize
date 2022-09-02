const { Router } = require("express");
const UserController = require("../controllers/UserController");

const router = Router()

router.get('/', UserController.getUsers)
router.get('/:id', UserController.getUserById)
router.post('/', UserController.createUser)
router.put('/:id', UserController.updateUser)
router.delete('/:id', UserController.deleteUser)

module.exports = router