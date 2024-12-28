# Theater Booking Page

## SeatBookingPage

- Includes three components

### ToggleTheme Component

- Button Component
  - Passing a function to toggle the theme

### SeatView Component

- Used the `Array.from` method to create an array of 90 seats to display on the UI using `map`.

- Created to view seats.

### BookingAction Component

- Includes four components:

  - BookingDetails

    - Heading Component

      - Showing Title

    - SeatPrice Component

      - Write the logic for calculating the price based on the seat location
      - Paragraph Component
        - Showing Total Price

    - Paragraph Component

      - Showing the seat numbers of selected seats

    - Paragraph Component
      - Showing the seat numbers of booked seats

  - ConfirmBooking

    - Button Component
      - Passing a dispatch to confirm booking

  - ResetSelectedSeats

    - Button Component
      - Passing a dispatch to reset selected seats

  - ResetBookedSeats

    - Button Component
      - Passing a dispatch to reset selected seats

### Setup Redux

- store.js

  - configured store
  - imported slices and used them in reducer

  - created slices
    - seatSlice.js
      - Created reducers for tasks like selecting seats, confirm booking, reset seats
    - themeSlice.js
      - Created reducer for toggling theme
