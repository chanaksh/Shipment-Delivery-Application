const Shipment = require('../models/Shipment');

const createShipment = async (req, res) => {
  const { sender, receiver, packageSize, deliveryAddress } = req.body;

  const shipment = new Shipment({
    sender,
    receiver,
    packageSize,
    deliveryAddress,
    user: req.user._id,
  });

  const createdShipment = await shipment.save();
  res.status(201).json(createdShipment);
};

const getMyShipments = async (req, res) => {
  const shipments = await Shipment.find({ user: req.user._id });
  res.json(shipments);
};

const updateShipmentStatus = async (req, res) => {
  const shipment = await Shipment.findById(req.params.id);

  if (shipment) {
    shipment.status = req.body.status || shipment.status;

    const updatedShipment = await shipment.save();
    res.json(updatedShipment);
  } else {
    res.status(404);
    throw new Error('Shipment not found');
  }
};

module.exports = { createShipment, getMyShipments, updateShipmentStatus };
