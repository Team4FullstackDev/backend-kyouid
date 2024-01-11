
const { Carts } = require('../db/models')

module.exports.cartsByUserId = async (req, res) => {
    const userId = req.params.userId
    try {
        const response = await Carts.findAll({
            where: { userId: userId }
        })
        if(!response) {
            return res.status(404).json({ msg: 'User Id not found' })
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

module.exports.addCart = async (req, res) => {
    const { userId, productsId } = req.body
    if(!userId || !productsId) {
        return res.status(400).json({ msg: 'All fields are required' })
    }
    try {
        const response = await Carts.create({
            quantity: 1,
            userId: userId,
            productsId: productsId
        })
        res.status(201).json({ msg: 'Cart was created successfully' })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

module.exports.updateQuantity = async (req, res) => {
    const { id } = req.params
    const { quantity } = req.body

    if(quantity <= 0) {
        return res.status(400).json({ msg: 'Quantity must be greater than 0' })
    }

    try {
        const response = await Carts.update({ quantity: quantity }, {
            where: { id: id }
        })
        if(!response) {
            return res.status(404).json({ msg: 'Cart Id not found' })
        }
        res.status(200).json({ msg: 'Quantity was updated successfully' })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

module.exports.deleteCart = async (req, res) => {
    const id = req.params.id
    try {
        const response = await Carts.destroy({
            where: { id: id }
        })
        if(!response) {
            return res.status(404).json({ msg: 'Cart Id not found' })
        }
        res.status(200).json({ msg: 'Cart was deleted successfully' })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}