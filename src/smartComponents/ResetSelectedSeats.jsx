import React from "react";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { resetSelectedSeats } from "../redux/slices/seatSlice";

const ResetSelectedSeats = () => {
  const dispatch = useDispatch();
  return (
    <Button
      btnText="Reset Selected Seats"
      handleClick={() => dispatch(resetSelectedSeats())}
      cssClass="mt-4 px-6 py-2 text-white rounded bg-gray-500"
    />
  );
};

export default ResetSelectedSeats;
