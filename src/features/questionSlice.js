import {createSlice } from '@reduxjs/toolkit';

const initialState = {
  questionId : null,
  questionName : null
};

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setQuestionInfo : (state, action) => {
        state.questionId = action.payload.questionId
        state.questionName = action.payload.questionName

    }
  },
});

export const { setQuestionInfo } = questionSlice.actions;
export const selectQuestionId = (state) => state.question.questionId;
export const selectQuestionName = (state) => state.question.questionName;

export default questionSlice.reducer;
