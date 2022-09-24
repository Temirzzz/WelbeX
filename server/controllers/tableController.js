const { Table } = require("../models/models");

class TableController {
  async getAll(req, res) {
    let data;
    data = await Table.findAndCountAll();
    return res.json(data);
  }
}

module.exports = new TableController();
