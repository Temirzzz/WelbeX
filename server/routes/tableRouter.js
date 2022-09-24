const Router = require("express");
const router = new Router();
const tableController = require("../controllers/tableController");

router.get("/", tableController.getAll);

module.exports = router;
