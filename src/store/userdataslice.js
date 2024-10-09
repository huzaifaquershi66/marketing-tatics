import { createSlice } from '@reduxjs/toolkit';

const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    users: [], // Change from single user to array of users
  },
  reducers: {
    setUserData(state, action) {
      const { price, transactionId, phonenumber } = action.payload || {};
  
      // Check if all fields are filled
      if (!price || !transactionId || !phonenumber) {
          throw new Error('All fields (price, transactionId, phonenumber) are required!');
      }
  
      // Ensure users array is defined before pushing
      if (!Array.isArray(state.users)) {
          state.users = []; // Reset to an empty array if it's not
      }
  
      // Add new user data to the users array
      state.users.push({ price, transactionId, phonenumber });
  },
  deleteUserData(state, action) {
    const { transactionId } = action.payload; // Expecting the transactionId of the user to be deleted

    // Filter out the user with the matching transactionId
    state.users = state.users.filter(user => user.transactionId !== transactionId);
  },
  },
});

// Export the action
export const { setUserData ,deleteUserData} = userDataSlice.actions;

// Export the reducer
export default userDataSlice.reducer;

