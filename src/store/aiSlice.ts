import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAIInsights } from '../services/apiService';

interface AIState {
  data: typeof import('../data/ai-data.json');
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: AIState = {
  data: {} as typeof import('../data/ai-data.json'),
  status: 'idle',
};

export const getAIInsights = createAsyncThunk('ai/getAIInsights', async () => {
  return await fetchAIInsights();
});

const aiSlice = createSlice({
  name: 'ai',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAIInsights.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAIInsights.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getAIInsights.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export default aiSlice.reducer;
