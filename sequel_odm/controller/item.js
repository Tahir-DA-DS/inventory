const itemdb = require("../models");
require("dotenv").config();
const itemModel = itemdb.item;

const createItem = async (req, res) => {
  const item = req.body;
  try {
    await itemModel.create(item);
    res.status(201).json({
      message: "item added succesfully",
      data: item
    });
  } catch (error) {
    console.log(error);
  }
};

const updateItem = async (req, res) => {
  const updateItem = req.body;
  const _id = req.params.id;
  console.log(_id);
  const checkid = await itemModel.findOne({ where: { id: _id } });
  if (!checkid) {
    res.send(`item not found`);
  }

  try {
    await itemModel.update(updateItem, {
      where: {
        id: _id
      }
    });
    res.status(200).send(`update done for item with id:${_id}`);
  } catch (error) {
    res.status(500).send(`internal error`);
  }
};

const getOne = async (req, res) => {
  const _id = req.params.id;
  try {
    const oneitem = await itemModel.findOne({ where: { id: _id } });
    res.status(200).send(oneitem);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAll = async (req, res) => {
  try {
    const allItem = itemModel.findAll({});
    res.status(201).send(allItem);
  } catch (error) {
    res.send(401).send(error);
  }
};

const deleteItem = async (req, res) => {
  const _id = req.params.id;
  const checkid = await itemModel.findOne({ where: { id: _id } });
  if (!checkid) {
    res.send(`item not found`);
  } else {
    try {
      await itemModel.destroy({ where: { id: _id } });
      res.status(200).send(`item with id : ${_id} deleted`);
    } catch (error) {
      res.status(400).send(error);
    }
  }
};

module.exports = {
  createItem,
  updateItem,
  getOne,
  getAll,
  deleteItem
};
