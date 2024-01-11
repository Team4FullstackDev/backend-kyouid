const { Shipment, Users } = require("../db/models");

// ambil semua shipment
const getShipments = async (req, res) => {
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
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// ambil semua shipment by id
const getShipmentsById = async (req, res) => {
  const shipmentId = req.params.id;

  try {
    const shipment = await Shipment.findByPk(shipmentId);

    if (!shipment) {
      return res.status(404).json({ msg: "Shipment not found" });
    }

    res.status(200).json(shipment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: error.message });
  }
};

// create shipment
const createShipment = async (req, res) => {
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

    res.status(201).json({ msg: "Shipment was created successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// update shipment
const updateShipment = async (req, res) => {
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

    res.status(200).json({ msg: "Shipment was updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: error.message });
  }
};

// delete shipment
const deleteShipment = async (req, res) => {
  const shipmentId = req.params.id;

  try {
    const shipment = await Shipment.findByPk(shipmentId);

    if (!shipment) {
      return res.status(404).json({ msg: "Shipment not found" });
    }

    await shipment.destroy();

    res.status(200).json({ msg: "Shipment deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getShipments,
  getShipmentsById,
  createShipment,
  updateShipment,
  deleteShipment,
};