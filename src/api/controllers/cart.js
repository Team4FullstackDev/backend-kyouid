
const { Carts, Products, Users } = require('../db/models')

module.exports.cartsByUserId = async (req, res) => {
    const userId = req.params.userId
    if (!userId) {
        return res.status(400).json({ msg: 'User Id is required' })
    }
    try {
        const response = await Carts.findAll({
            where: { userId: userId },
            include: [Products]
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
    const { userId, productId, quantity } = req.body
    if(!userId || !productId) {
        return res.status(400).json({ msg: 'All fields are required' })
    }
    try {

        const product = await Products.findByPk(productId)
        const user = await Users.findByPk(userId)

        if(!product) {
            return res.status(404).json({ msg: 'Product Id not found' })
        }

        if(!user) {
            return res.status(404).json({ msg: 'User Id not found' })
        }

        const response = await Carts.create({
            quantity: quantity || 1,
            userId: userId,
            productId: productId
        })
        res.status(201).json({ msg: 'Cart was created successfully', response })
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