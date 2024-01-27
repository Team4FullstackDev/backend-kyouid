const { Order } = require("../db/models");

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json({ success: true, data: orders });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const getOrderById = async (req, res) => {
  const orderId = req.params.id;

  try {
    const order = await Order.findByPk(orderId);

    if (!order) {
      res.status(404).json({ success: false, message: "Order not found" });
    } else {
      res.json({ success: true, data: order });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const createOrder = async (req, res) => {
  const { userId, shipmentId, paymentId, totalPrice } = req.body;

  try {
    const order = await Order.create({
      orderDate: new Date(),
      userId,
      shipmentId,
      paymentId,
      totalPrice,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    res.json({ success: true, data: order });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const updateOrder = async (req, res) => {
  const orderId = req.params.id;
  const updateData = req.body;

  try {
    const order = await Order.findByPk(orderId);

    if (!order) {
      res.status(404).json({ success: false, message: "Order not found" });
    } else {
      await order.update(updateData);
      res.json({ success: true, data: order });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const deleteOrder = async (req, res) => {
  const orderId = req.params.id;

  try {
    const order = await Order.findByPk(orderId);

    if (!order) {
      res.status(404).json({ success: false, message: "Order not found" });
    } else {
      await order.destroy();
      res.json({ success: true, message: "Order deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
