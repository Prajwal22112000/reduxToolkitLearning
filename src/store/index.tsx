import { configureStore } from "@reduxjs/toolkit";
import UserDetails from "../components/UserDetails";
const Store = configureStore({
  reducer: {
    users: UserDetails,
  },
});
export default Store;
