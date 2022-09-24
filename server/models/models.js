const sequelize = require("../config/config");
const { DataTypes } = require("sequelize");

const Table = sequelize.define("table", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  date: { type: DataTypes.STRING, allowNull: true },
  name: { type: DataTypes.STRING, allowNull: true },
  quantity: { type: DataTypes.INTEGER, allowNull: true },
  distance: { type: DataTypes.INTEGER, allowNull: true },
});

module.exports = {
  Table,
};
