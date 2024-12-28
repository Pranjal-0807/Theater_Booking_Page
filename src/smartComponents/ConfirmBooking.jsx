import React from "react";
import Button from "../components/Button";
import { confirmBooking } from "../redux/slices/seatSlice";
import { useDispatch } from "react-redux";

const ConfirmBooking = ({ selectedSeats }) => {
  const dispatch = useDispatch();
  return (
    <Button
      btnText="Confirm Booking"
      handleClick={() => dispatch(confirmBooking())}
      cssClass={`mt-4 px-6 py-2 text-white rounded ${
        selectedSeats.length === 0
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-green-500 hover:bg-green-700"
      }`}
      disabled={selectedSeats.length === 0}
    />
  );
};

export default ConfirmBooking;
