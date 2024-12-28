import React from "react";
import Seat from "../components/Seat";
import { useDispatch } from "react-redux";
import { selectSeat } from "../redux/slices/seatSlice";

const SeatView = ({ bookedSeats, selectedSeats }) => {
  const dispatch = useDispatch();
  const seats = Array.from({ length: 90 }, (_, i) => i + 1);

  return (
    <div className="flex flex-wrap justify-center w-full max-w-2xl">
      {seats.map((seat) => (
        <Seat
          key={seat}
          divText={seat}
          cssClass={`border w-10 h-10 flex items-center justify-center rounded-sm mx-1 my-1 ${
            bookedSeats.includes(seat)
              ? "cursor-not-allowed bg-red-600"
              : selectedSeats.includes(seat)
              ? "cursor-pointer bg-green-600"
              : "cursor-pointer bg-gray-300 hover:bg-green-400"
          }`}
          handleClick={() => dispatch(selectSeat(seat))}
        />
      ))}
    </div>
  );
};

export default SeatView;
