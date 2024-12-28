import React from "react";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { resetBookedSeats } from "../redux/slices/seatSlice";

const ResetBookedSeats = () => {
  const dispatch = useDispatch();
  return (
    <Button
      btnText="Reset Booked Seats"
      handleClick={() => dispatch(resetBookedSeats())}
      cssClass="mt-4 px-6 py-2 text-white rounded bg-gray-500"
    />
  );
};

export default ResetBookedSeats;
