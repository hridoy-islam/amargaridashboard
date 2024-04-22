import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userCredentials) => {
    const request = await axios.post(
      `http://localhost:4000/api/auth/login`,
      userCredentials,
    );
    const response = await request.data.data;
    localStorage.setItem('garirmela', JSON.stringify(response));
    return response;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    error: null,
    user: null,
    token: null,
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
        state.token = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.accessToken;
        const decodedUser = jwtDecode(action.payload.accessToken);
        state.user = decodedUser;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error.message;
        state.token = null;
      });
  },
});

export default userSlice.reducer;