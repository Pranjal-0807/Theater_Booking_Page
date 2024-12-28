import React from "react";
import Paragraph from "../components/Paragraph";

const SeatsPrice = ({ selectedSeats }) => {
  const totalPrice = selectedSeats.reduce(
    (total, seat) =>
      seat >= 1 && seat <= 28
        ? total + 400
        : seat >= 29 && seat <= 56
        ? total + 300
        : total + 200,
    0
  );
  return <Paragraph paraText={`Total Price : ₹${totalPrice}`} />;
};

export default SeatsPrice;
