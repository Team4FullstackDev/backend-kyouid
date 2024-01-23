const { Shipment, Users } = require("../db/models");

// ambil semua shipment
module.exports.getShipments = async (req, res) => {
  try {
    const response = await Shipment.findAll({
      include: [
        {
          model: Users,
          as: "user",
          attributes: ["fullName", "email", "phoneNumber"],
        },
      ],
    });

    res.status(200).json({
      message: "Get all shipment successfully",
      data: response,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ambil semua shipment by id
module.exports.getShipmentsById = async (req, res) => {
  const shipmentId = req.params.id;

  try {
    const shipment = await Shipment.findByPk(shipmentId);

    if (!shipment) {
      return res.status(404).json({ message: "Shipment not found" });
    }

    res.status(200).json({
      message: "Get Shipment successfully",
      data: shipment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// create shipment
module.exports.createShipment = async (req, res) => {
  try {
    const {
      shipmentDate,
      address,
      city,
      province,
      regency,
      postalCode,
      usersId,
    } = req.body;

    // Menyimpan data pengiriman dari form
    const shipment = await Shipment.create({
      shipmentDate,
      address,
      city,
      province,
      regency,
      postalCode,
      usersId,
    });

    res.status(201).json({
      message: "Shipment was created successfully",
      data: shipment,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update shipment
module.exports.updateShipment = async (req, res) => {
  const shipmentId = req.params.id;

  try {
    const shipment = await Shipment.findByPk(shipmentId);

    if (!shipment) {
      return res.status(404).json({ msg: "Shipment not found" });
    }

    const {
      shipmentDate,
      address,
      city,
      province,
      regency,
      postalCode,
      usersId,
    } = req.body;

    // Update data pengiriman
    await shipment.update({
      shipmentDate,
      address,
      city,
      province,
      regency,
      postalCode,
      usersId,
    });

    res.status(201).json({
      message: "Shipment was updated successfully",
      data: shipment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// delete shipment
module.exports.deleteShipment = async (req, res) => {
  const shipmentId = req.params.id;

  try {
    const shipment = await Shipment.findByPk(shipmentId);

    if (!shipment) {
      return res.status(404).json({ message: "Shipment not found" });
    }

    await shipment.destroy();

    res.status(200).json({ message: "Shipment deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
