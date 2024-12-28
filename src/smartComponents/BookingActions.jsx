import React from "react";
import BookingDetails from "./BookingDetails";
import ConfirmBooking from "./ConfirmBooking";
import ResetSelectedSeats from "./ResetSelectedSeats";
import ResetBookedSeats from "./ResetBookedSeats";

const BookingActions = ({ bookedSeats, selectedSeats }) => {
  return (
    <div className="mt-4">
      <BookingDetails selectedSeats={selectedSeats} bookedSeats={bookedSeats} />
      <ConfirmBooking selectedSeats={selectedSeats} />
      <br />
      <ResetSelectedSeats />
      <br />
      <ResetBookedSeats />
    </div>
  );
};

export default BookingActions;
