const { Discounts } = require('../db/models'); // Sesuaikan path sesuai struktur proyek Anda

const createDiscount = async (req, res) => {
  try {
    const {
      discountPercentage,
      startDate,
      endDate,
      eventDiscount,
      discountStock,
      productsId,
    } = req.body;

    const newDiscount = await Discounts.create({
      discountPercentage,
      startDate,
      endDate,
      eventDiscount,
      discountStock,
      productsId,
    });

    res.status(201).json(newDiscount);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getDiscounts = async (req, res) => {
  try {
    const allDiscounts = await Discounts.findAll();
    res.status(200).json(allDiscounts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getDiscountById = async (req, res) => {
  const { id } = req.params;

  try {
    const discount = await Discounts.findByPk(id);

    if (!discount) {
      return res.status(404).json({ error: 'Discount not found' });
    }

    res.status(200).json(discount);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateDiscount = async (req, res) => {
  const { id } = req.params;

  try {
    const [updatedRowsCount] = await Discounts.update(req.body, {
      where: { id },
    });

    if (updatedRowsCount === 0) {
      return res.status(404).json({ error: 'Discount not found' });
    }

    res.status(200).json({ message: 'Discount updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteDiscount = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRowCount = await Discounts.destroy({
      where: { id },
    });

    if (deletedRowCount === 0) {
      return res.status(404).json({ error: 'Discount not found' });
    }

    res.status(200).json({ message: 'Discount deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createDiscount,
  getDiscounts,
  getDiscountById,
  updateDiscount,
  deleteDiscount,
};
