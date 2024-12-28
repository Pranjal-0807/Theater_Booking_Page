import { createSlice } from "@reduxjs/toolkit";

const seatSlice = createSlice({
  name: "seat",
  initialState: {
    bookedSeats: JSON.parse(localStorage.getItem("bookedSeats")) || [],
    selectedSeats: [],
  },
  reducers: {
    selectSeat: (state, action) => {
      const seatNumber = action.payload;
      if (state.bookedSeats.includes(seatNumber)) return;

      state.selectedSeats.includes(seatNumber)
        ? (state.selectedSeats = state.selectedSeats.filter(
            (seat) => seat !== seatNumber
          ))
        : state.selectedSeats.push(seatNumber);
    },
    confirmBooking: (state) => {
      alert(
        `You have successfully booked seats ${state.selectedSeats.join(", ")}`
      );
      state.bookedSeats = [...state.bookedSeats, ...state.selectedSeats];
      localStorage.setItem("bookedSeats", JSON.stringify(state.bookedSeats));
      state.selectedSeats.length = 0;
    },
    resetSelectedSeats: (state) => {
      state.selectedSeats.length = 0;
    },
    resetBookedSeats: (state) => {
      state.bookedSeats.length = 0;
      localStorage.removeItem("bookedSeats");
    },
  },
});

export const {
  selectSeat,
  confirmBooking,
  resetSelectedSeats,
  resetBookedSeats,
} = seatSlice.actions;

export default seatSlice.reducer;
