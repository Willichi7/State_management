import React, { createContext, useReducer } from "react";
import PropTypes from 'prop-types';

const NotificationContext = createContext();

const notificationReducer = (state, action) => {
   switch (action.type) {
      case 'SHOW':
         return action.payload || '';
      case 'CLEAR':
         return '';
      case 'ERROR':
            return action.payload;
      default:
         return state;
   }
}

export const NotificationProvider = ({ children }) => {
   const [notification, dispatch] = useReducer(notificationReducer, '');
   return (
      <NotificationContext.Provider value={{ notification, dispatch }}>
         {children}
      </NotificationContext.Provider>
   );
}
NotificationProvider.propTypes = {
   children: PropTypes.node.isRequired,
};

export default NotificationContext;


