import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   notification: ''
}

const notificationSlice = createSlice({
   name: 'notification',
   initialState,
   reducers: {
      showNotification(state, action) {
         state.notification = action.payload;
      },
      clearNotification(state) {
         state.notification = '';
      }
   }
})

export const { showNotification, clearNotification } = notificationSlice.actions;

export const setNotification = (message, timeout) => {
   return dispatch => {
      dispatch(showNotification(message));
      setTimeout(() => {
         dispatch(clearNotification());
      }, timeout);
   }
}



export default notificationSlice.reducer;

