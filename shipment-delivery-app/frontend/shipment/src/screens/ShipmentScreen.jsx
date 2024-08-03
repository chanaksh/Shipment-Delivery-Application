import React, { useState, useEffect } from "react";
import axios from "axios";

const ShipmentScreen = () => {
  const [shipments, setShipments] = useState([]);
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [packageSize, setPackageSize] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  useEffect(() => {
    const fetchShipments = async () => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.get("/api/shipments", config);
      setShipments(data);
    };

    fetchShipments();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.post(
      "/api/shipments",
      { sender, receiver, packageSize, deliveryAddress },
      config
    );
    window.location.reload();
  };

  return (
    <div>
      <h1>Shipments</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Sender"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
        />
        <input
          type="text"
          placeholder="Receiver"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
        />
        <input
          type="text"
          placeholder="Package Size"
          value={packageSize}
          onChange={(e) => setPackageSize(e.target.value)}
        />
        <input
          type="text"
          placeholder="Delivery Address"
          value={deliveryAddress}
          onChange={(e) => setDeliveryAddress(e.target.value)}
        />
        <button type="submit">Create Shipment</button>
      </form>
      <ul>
        {shipments.map((shipment) => (
          <li key={shipment._id}>
            {shipment.sender} to {shipment.receiver} ({shipment.status})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShipmentScreen;
