const itemModel = require('../model/items')

const getAllitems = async (req, res)=>{
    try {
       const items = await itemModel.find()
        res.status(200).send(items)
    } catch (error) {
        res.status(400).send(error)
    }
}


const CreateItems = async(req, res)=>{
    const item = req.body
    try {
        await itemModel.create(item)
        res.status(201).send(`item has been added`)
    } catch (error) {
        res.status(400).send(error)
    }
}

const getoneItem = async(req, res)=>{
    const item_id = req.params._id
    try {
       const item = await itemModel.findById(item_id)
       res.status(200).send(item)
    } catch (error) {
        res.status(400).send(error)
    }
}

const updateItem = async (req, res)=>{
    const id = req.params._id
    const item = req.body
    try {
        const itemUpdate = await itemModel.findByIdAndUpdate(id, item, {new:true})
        res.status(200).send(itemUpdate)
    } catch (error) {
        res.status(400)
    }
}

const deleteItem = async(req, res)=>{
    const item_id = req.params._id

    try {
        await itemModel.findByIdAndDelete(item_id)
        res.status(200).send(`${item_id} deleted successfully`)
    } catch (error) {
        res.status(400).send(error)
    }
}


module.exports = {getAllitems, getoneItem, updateItem, deleteItem, CreateItems}
