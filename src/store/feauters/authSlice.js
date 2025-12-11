import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Async thunk
export const register = createAsyncThunk("auth/register", async (formData, { rejectWithValue }) => {
    try {        
      const res = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        return rejectWithValue("Failed to register");
      }

      const data = await res.json();
      return data;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Initial State
const initialState = {
  user: null,
  loading: "idle",
  error: null,
};

// Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = "success";
        state.user = action.payload;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
