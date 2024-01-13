const { Status_Transaction, Payments, Users } = require("../db/models");

// Get all status transactions
module.exports.getStatusTransactions = async (req, res) => {
  try {
    const response = await Status_Transaction.findAll({
      include: [
        {
          model: Payments,
          attributes: ["paymentMethod", "amount"],
        },
        {
          model: Users,
          attributes: ["fullName", "email", "phoneNumber"],
        },
      ],
    });

    res.status(200).json({
      message: "Get all status transactions successfully",
      data: response,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get status transaction by id
module.exports.getStatusTransactionById = async (req, res) => {
  const statusTransactionId = req.params.id;

  try {
    const statusTransaction = await Status_Transaction.findByPk(
      statusTransactionId
    );

    if (!statusTransaction) {
      return res.status(404).json({ message: "Status transaction not found" });
    }

    res.status(200).json({
      message: "Get status transaction successfully",
      data: statusTransaction,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// Create status transaction
module.exports.createStatusTransaction = async (req, res) => {
  try {
    const { status, paymentId, userId, paymentUserId } = req.body;

    // Validasi
    if (!status || !paymentId || !userId || !paymentUserId) {
      return res
        .status(400)
        .json({ message: "All fields are required for status transaction" });
    }

    // Menyimpan data status transaction
    const statusTransaction = await Status_Transaction.create({
      status,
      paymentId,
      userId,
      paymentUserId,
    });

    res.status(201).json({
      message: "Status transaction was created successfully",
      data: statusTransaction,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update status transaction
module.exports.updateStatusTransaction = async (req, res) => {
  const statusTransactionId = req.params.id;

  try {
    const statusTransaction = await Status_Transaction.findByPk(
      statusTransactionId
    );

    if (!statusTransaction) {
      return res.status(404).json({ message: "Status transaction not found" });
    }

    const { status, paymentId, userId, paymentUserId } = req.body;

    // Validasi
    if (!status || !paymentId || !userId || !paymentUserId) {
      return res
        .status(400)
        .json({ message: "All fields are required for status transaction" });
    }

    // Update data status transaction
    await statusTransaction.update({
      status,
      paymentId,
      userId,
      paymentUserId,
    });

    res.status(200).json({
      message: "Status transaction was updated successfully",
      data: statusTransaction,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// Delete status transaction
module.exports.deleteStatusTransaction = async (req, res) => {
  const statusTransactionId = req.params.id;

  try {
    const statusTransaction = await Status_Transaction.findByPk(
      statusTransactionId
    );

    if (!statusTransaction) {
      return res.status(404).json({ message: "Status transaction not found" });
    }

    await statusTransaction.destroy();

    res
      .status(200)
      .json({ message: "Status transaction deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
