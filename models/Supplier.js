const { sequelize } = require("../config/db");
const { DataTypes } = require("sequelize");

const Supplier = sequelize.define(
  "Supplier",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    formsfree_key: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    tableName: "supplier",
    timestamps: false,
  }
);

module.exports = Supplier;
