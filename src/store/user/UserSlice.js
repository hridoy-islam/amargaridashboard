import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userCredentials, { rejectWithValue }) => {
    try {
      const request = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        userCredentials,
      );
      const response = await request.data;

      // Check if the user's role is 'admin'
      if (response.user.role === 'admin') {
        localStorage.setItem('garirmela', JSON.stringify(response));
        return response;
      } else {
        return rejectWithValue('Please check Credentials');
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const logout = createAsyncThunk('user/logout', async () => {
  localStorage.removeItem('garirmela');
  return null;
});

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
        state.token = action.payload.token;
        state.user = action.payload.user;
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
