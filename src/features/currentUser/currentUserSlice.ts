import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

type User = {
    username: string | undefined;
    email: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
}
// Define a type for the slice state
interface CurrentUserState {
  value: User | undefined
}
const initialState: CurrentUserState = {
  value: undefined
}

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    logout: state => {
      state.value = undefined
    },
    initUser: (state, action: PayloadAction<User | undefined>) => {
      state.value = action.payload
    }
  }
})

export const { logout, initUser } = currentUserSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCurrentUser = (state: RootState) => state.currentUser.value

export default currentUserSlice.reducer