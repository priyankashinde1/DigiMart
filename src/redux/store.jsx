import { configureStore } from "@reduxjs/toolkit";
//import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart:cartSlice
  
  },
  devTools:true
})


// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./Slices/cartSlice";

// export const store = configureStore({
//   reducer: {
//     cart: cartSlice,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         // Adjust ignoredPaths based on where your non-serializable values are stored
//         ignoredPaths: ['cart.someNonSerializablePath'],
//         // You can also ignore specific actions if necessary
//         // ignoredActions: ['cart/addToCart'],
//       },
//     }),
//   devTools: true,
// });


// import { configureStore } from '@reduxjs/toolkit';

// import cartSlice from './Slices/cartSlice';

// const store = configureStore({
//     reducer: {
//         cart: cartSlice
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredPaths: ['cart.time'], // Ignore non-serializable value paths
//             },
//         }),
// });

// export default store;
