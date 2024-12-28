import React from "react";
import SeatBookingPage from "./pages/SeatBookingPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <SeatBookingPage />
    </Provider>
  );
};

export default App;
