import React, { useEffect } from "react";
import SeatView from "../smartComponents/SeatView";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, selectTheme } from "../redux/slices/themeSlice";
import BookingActions from "../smartComponents/BookingActions";
import ToggleTheme from "../smartComponents/ToggleTheme";

const SeatBookingPage = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const { bookedSeats, selectedSeats } = useSelector((state) => state.seat);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div
      className={`flex flex-col items-center m-8 ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      <ToggleTheme handleToggleTheme={handleToggleTheme} theme={theme} />

      <SeatView bookedSeats={bookedSeats} selectedSeats={selectedSeats} />

      <BookingActions bookedSeats={bookedSeats} selectedSeats={selectedSeats} />
    </div>
  );
};

export default SeatBookingPage;
