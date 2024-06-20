import { createSelector } from '@reduxjs/toolkit';

export const selectBoards = state => state.boards.items;
export const selectBoardsLoading = state => state.boards.loading;
export const selectBoardsError = state => state.boards.error;
export const selectCurrentBoard = state => state.boards.currentBoard;

// export const selectCurrentBoard = createSelector(
//   [selectBoards, (state, boardId) => boardId],
//   (boards, boardId) => boards.find(board => board._id === boardId)
// );
