const { Payments, Users, Status_Transaction } = require("../db/models");

// Get all payments
module.exports.getPayments = async (req, res) => {
  try {
    const response = await Payments.findAll({
      include: [
        {
          model: Users,
          attributes: ["fullName", "email", "phoneNumber"],
        },
        {
          model: Status_Transaction,
          attributes: ["status"],
        },
      ],
    });

    res.status(200).json({
      message: "Get all payments successfully",
      data: response,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get payment by id
module.exports.getPaymentById = async (req, res) => {
  const paymentId = req.params.id;

  try {
    const payment = await Payments.findByPk(paymentId);

    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    res.status(200).json({
      message: "Get payment successfully",
      data: payment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// Create payment
module.exports.createPayment = async (req, res) => {
  try {
    const { paymentDate, paymentMethod, amount, usersId } = req.body;

    // Validasi
    if (!paymentDate || !paymentMethod || !amount || !usersId) {
      return res
        .status(400)
        .json({ message: "All fields are required for payment" });
    }

    // Menyimpan data payment
    const payment = await Payments.create({
      paymentDate,
      paymentMethod,
      amount,
      usersId,
    });

    res.status(201).json({
      message: "Payment was created successfully",
      data: payment,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update payment
module.exports.updatePayment = async (req, res) => {
  const paymentId = req.params.id;

  try {
    const payment = await Payments.findByPk(paymentId);

    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    const { paymentDate, paymentMethod, amount, usersId } = req.body;

    // Validasi
    if (!paymentDate || !paymentMethod || !amount || !usersId) {
      return res
        .status(400)
        .json({ message: "All fields are required for payment" });
    }

    // Update data payment
    await payment.update({
      paymentDate,
      paymentMethod,
      amount,
      usersId,
    });

    res.status(200).json({
      message: "Payment was updated successfully",
      data: payment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// Delete payment
module.exports.deletePayment = async (req, res) => {
  const paymentId = req.params.id;

  try {
    const payment = await Payments.findByPk(paymentId);

    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    await payment.destroy();

    res.status(200).json({ message: "Payment deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// TESTING MIDTRANS CLIENT

// const { Client } = require("midtrans-client");

// const midtransClient = new Client({
//   isProduction: false,
//   serverKey: process.env.SERVER_KEY,
//   clientKey: process.env.CLIENT_KEY,
// });

// module.exports.createMidTransPayment = async (req, res) => {
//   try {
//     const order_id = "ORDER-" + Math.round(new Date().getTime() / 1000);
//     const gross_amount = req.body.amount;

//     const transactionDetails = {
//       order_id,
//       gross_amount,
//     };

//     const response = await midtransClient.snap.createTransaction(
//       transactionDetails
//     );

//     // Periksa apakah respons dari Midtrans berhasil
//     if (response && response.token) {
//       // Jika berhasil, lanjutkan ke proses pembuatan payment lokal
//       const { paymentDate, paymentMethod, amount, usersId } = req.body;

//       // Validasi
//       if (!paymentDate || !paymentMethod || !amount || !usersId) {
//         return res
//           .status(400)
//           .json({ message: "All fields are required for payment" });
//       }

//       // Menyimpan data payment
//       const payment = await Payments.create({
//         paymentDate,
//         paymentMethod,
//         amount,
//         usersId,
//       });

//       // Berikan respons ke klien
//       res.status(201).json({
//         message: "Payment was created successfully",
//         data: payment,
//       });
//     } else {
//       // Tanggapi jika terjadi kesalahan dalam membuat transaksi Midtrans
//       res.status(500).json({ error: "Failed to create Midtrans transaction" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };
