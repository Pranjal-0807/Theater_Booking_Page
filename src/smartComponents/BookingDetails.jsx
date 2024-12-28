import React from "react";
import SeatsPrice from "./SeatsPrice";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

const BookingDetails = ({ selectedSeats, bookedSeats }) => {
  return (
    <>
      <Heading
        headingText="Booking Summary"
        cssClass="text-lg font-semibold mb-2"
      />

      <SeatsPrice selectedSeats={selectedSeats} />

      <Paragraph
        paraText={`Selected Seats : ${
          selectedSeats.join(", ") || "You haven't selected any seats yet!!!"
        }`}
      />

      <Paragraph
        paraText={`Booked Seats : ${
          bookedSeats.join(", ") || " You haven't booked any seats yet!!!"
        }`}
      />
    </>
  );
};

export default BookingDetails;
